import { useState } from "react"
import MonacoEditor from "react-monaco-editor"
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution"
import axios from "axios"
import '../../styles/CodeEdior.css'
import { useAuth } from "../../context/auth"
import { Result } from "../../interfaces/BytecodeInterface"

const CodeEditor = ({ id, tests }: { id: string | undefined, tests: number | undefined }) => {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<Result | null>()
  const [button, setButton] = useState(false)
  const [message, setMessage] = useState<string>("")
  // @ts-ignore
  const [auth] = useAuth()
  const handleClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setButton(true)
    setMessage("")
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
      setButton(false)
      if(data && data.passed === tests) {
        setMessage("Accepted")
      } else {
        setMessage(`Wrong Answer on ${data.failed} testcases`)
      }
    } catch (error) {
      // @ts-ignore
      setMessage(error.response.data.message)
      setButton(false)
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
            <button className="button" onClick={handleClick} disabled={button}>Submit</button>
            {result && ((message === "Accepted") ?
              (<div className="success">{message}</div>) :
              (<div className="failure">{message}</div>)
            )}
          </div>
        ) : (<div className="login-failure">
          Please <a href="/login" style={{ margin: '0 0.25rem' }}>Login</a> to Submit
        </div>)
      }
    </>
  )
};

export default CodeEditor;