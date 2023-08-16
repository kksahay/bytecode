import { useParams } from "react-router-dom"
import Layout from "../components/layout/Layout"
import { useEffect, useState } from "react"
import axios from "axios"
import MonacoEditor from "react-monaco-editor/lib/editor";
import '../styles/Problem.css'
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution";

interface Problem {
  _name: string;
  _difficulty: string;
  _description: string;
  _constraint: string;
}
const Problem = () => {
  const params = useParams()
  const [problem, setProblem] = useState<Problem | null>(null);
  const [code, setCode] = useState('')
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
  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(code)
  }
  return (
    <Layout>
      <div className="problem-section">
        <div className="problem-description">
          <div>
            {problem?._name}
          </div>
          <div>
            {problem?._difficulty}
          </div>
          <div>
            {problem?._description}
          </div>
          <div>
            {problem?._constraint}
          </div>
        </div>
        <div className="code-editor">
          <MonacoEditor
            language="cpp"
            theme="vs-dark"
            value="//Your C++ code here"
            options={{
              automaticLayout: true,
              minimap: { enabled: false },
              tabSize: 2,
              insertSpaces: true,
              fontFamily: "monospace",
              fontSize: 14,
            }}
            onChange={setCode}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
        
      </div>
    </Layout>
  )
}
export default Problem