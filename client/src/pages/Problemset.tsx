import Layout from "../components/layout/Layout";
import useProblemset from "../hooks/useProblemset";

const Problemset = () => {
  const problems = useProblemset()
  return (
    <Layout>
      <div className="problem-list">
        <table>
          <thead>
            <tr className="space-x-4 py-4">
              <th>Name</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem?._id}>
                <td>{problem?._name}</td>
                <td>{problem?._difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Problemset;
