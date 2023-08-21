import { useState } from "react"
import MonacoEditor from "react-monaco-editor"
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution"
import axios from "axios"
import '../../styles/CodeEdior.css'
import { useAuth } from "../../context/auth"

interface Result {
  passed: number,
  failed: number
}
const CodeEditor = ({ id, tests }: { id: string | undefined, tests: number | undefined }) => {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [auth, setAuth] = useAuth()
  const handleClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const blob = new Blob([code], { type: 'text/plain' })
    const file = new File([blob], "solution.cpp", { type: "text/plain" })
    const formData = new FormData()
    formData.append("file", file)
    formData.append("tests", `${tests}`)
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_EXECUTOR_URL}/submit/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setResult(data)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
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
      {
        auth?.token ? (
          <div className="submit-section">
            <button className="button" onClick={handleClick} disabled={result !== null}>Submit</button>
            {result && ((result?.passed == tests) ?
              (<div className="success">Accepted</div>) :
              (<div className="failure">Wrong Answer on {result?.failed} Testcases</div>)
            )}
          </div>
        ) : (<div className="login-failure">
          Please <a href="/login" style={{ margin: '0 0.25rem' }}>login</a> to Submit
        </div>)
      }
    </>
  )
};

export default CodeEditor;