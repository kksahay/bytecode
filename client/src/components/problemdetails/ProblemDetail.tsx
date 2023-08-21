import { Problem } from "../../interfaces/BytecodeInterface"
import "../../styles/ProblemDetail.css"

const ProblemDetail = ({ problem }: { problem: Problem | null }) => {
    return (
        <>
            <div className="name">
                <h1>{problem?._name}</h1>
            </div>
            <div className="description">
                <p>{problem?._description}</p>
            </div>
            <div className="input">
                <h4>Input</h4>
                <p>{problem?._input}</p>
            </div>
            <div className="output">
                <h4>Output</h4>
                <p>{problem?._output}</p>
            </div>
            <div className="constraint">
                <h4>Constraints</h4>
                <p>{problem?._constraint}</p>
            </div>
            <div className="example">
                <h4>Example</h4>
                <p>Input</p>
                {problem?._example_input}
                <p>Output</p>
                {problem?._example_output}
            </div>
        </>
    )
}

export default ProblemDetail
