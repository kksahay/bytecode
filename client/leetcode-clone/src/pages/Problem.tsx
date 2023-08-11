import Editor from "../components/editor/Editor"
import '../styles/Problem.css'

const Problem = () => {
  return (
    <div className="problem-page">
      <div className="problem-description">
        <h2>Problem Name</h2>
        <div>Problem Statement</div>
        <h3>Contraints:</h3>
      </div>
      <div className="code-editor">
        <Editor />
        <button>Submit</button>
      </div>
    </div>
  )
}
export default Problem