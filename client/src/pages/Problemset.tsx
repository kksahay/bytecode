import Layout from "../components/layout/Layout";
import useProblemset from "../hooks/useProblemset";
import '../styles/Problemset.css'

const Problemset = () => {
  const problems = useProblemset()
  const ProblemInfo = () => {
    return (
      <ul className="problem-list">
        {problems.map(problem => (
          <li>
            <a href={`/problemset/task/${problem?._id}`} className="p-name">{problem?._name}</a>
            <span className="p-difficulty">{problem?._difficulty}</span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <Layout>
      <div className="problem-heading">Introductory Problems</div>
      <ProblemInfo />
    </Layout>
  );
};

export default Problemset;
