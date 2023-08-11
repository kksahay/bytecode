import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  const init = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/problem/problem-list");
      setProblems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div id="allproblems">
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
          </tr>
          {problems.map(problem => (
            <tr key={problem.problem_id}>
              <td>
                <Link to={`/problem/${problem.problem_id}`}>{problem.problem_name}</Link>
              </td>
              <td>{problem.problem_difficulty}</td>
              <td>{problem.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemList;
