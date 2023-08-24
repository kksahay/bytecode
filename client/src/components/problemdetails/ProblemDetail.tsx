import { Problem } from "../../interfaces/BytecodeInterface";
import "../../styles/ProblemDetail.css";

const ProblemDetail = ({ problem }: { problem: Problem | null }) => {
    return (
        <div>
            <div className="name">
                <h1>{problem?._name}</h1>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{ __html: problem?._description || ""}} />
            </div>
            <div className="input">
                <h4>Input</h4>
                <p dangerouslySetInnerHTML={{ __html: problem?._input || ""}} />
            </div>
            <div className="output">
                <h4>Output</h4>
                <p dangerouslySetInnerHTML={{ __html: problem?._output || ""}} />
            </div>
            <div className="constraint">
                <h4>Constraints</h4>
                <ul>
                    {problem?._constraint.split(', ').map((constraint, index) => (
                        <li key={index}>{constraint}</li>
                    ))}
                </ul>
            </div>
            <div className="example">
                <h4>Example</h4>
                <p>Input</p>
                <p dangerouslySetInnerHTML={{ __html: problem?._sample_input || ""}} />
                <p>Output</p>
                <p dangerouslySetInnerHTML={{ __html: problem?._sample_output || ""}} />
            </div>
        </div>
    );
};

export default ProblemDetail;
