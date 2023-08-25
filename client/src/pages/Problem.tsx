import { useParams } from "react-router-dom"
import Layout from "../components/layout/Layout"
import { useEffect, useState } from "react"
import axios from "axios"
import '../styles/Problem.css'
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution";
import CodeEditor from "../components/editor/CodeEditor";
import { Problem } from "../interfaces/BytecodeInterface"
import ProblemDetail from "../components/problemdetails/ProblemDetail"

const ProblemPage = () => {
  const params = useParams()
  const [problem, setProblem] = useState<Problem | null>(null);
  useEffect(() => {
    const getProblem = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/problemset/task/${params?.id}`)
        setProblem(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProblem()
  }, [])

  return (
    <Layout title={`${problem?._name} |ByteCode`}>
      <div className="problem-section">
        <div className="problem-details">
          <ProblemDetail problem={problem} />
        </div>
        <div className="code-editor">
          <CodeEditor id={params?.id} tests={problem?._tests}/>
        </div>
      </div>
    </Layout>
  )
}
export default ProblemPage