import { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution";
import axios from "axios";
import './CodeEditor.css';
interface Result {
  passed: number,
  failed: number
}
const CodeEditor = ({ id }: { id: string | undefined }) => {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const handleClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const blob = new Blob([code], { type: 'text/plain' })
    const file = new File([blob], "solution.cpp", { type: "text/plain" })
    const formData = new FormData()
    formData.append("file", file)
    formData.append("tests", "7")
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
      <div>
        <button onClick={handleClick}>Submit</button>
        {result && (
          <div>
            <p>Testcases</p>
            <p>Passed: {result.passed}</p>
            <p>Failed: {result.failed}</p>
          </div>
        )}
      </div>
    </>
  )

};

export default CodeEditor;