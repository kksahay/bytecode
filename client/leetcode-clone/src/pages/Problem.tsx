import { useEffect, useState } from 'react';
import Editor from "../components/editor/Editor";
import '../styles/Problem.css';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Problem = () => {
  const { id } = useParams();
  const [problemData, setProblemData] = useState(null);

  const init = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/problem/problem-list/" + id);
      setProblemData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="problem-page">
      <div className="problem-description">
        <div>{problemData && problemData.problem_name}</div>
        <div>{problemData && problemData.problem_statement}</div>
      </div>
      <div className="code-editor">
        <Editor />
      </div>
    </div>
  );
};

export default Problem;
