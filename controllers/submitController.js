import { pool } from '../db.js';

export const submitController = async (req, res) => {
    try {
        const { problem_name, problem_statement, problem_difficulty } = req.body
        const problem = await pool.query(
            "INSERT INTO problem (problem_name, problem_statement, problem_difficulty) VALUES($1, $2, $3) RETURNING *",
            [problem_name, problem_statement, problem_difficulty]
        )
        res.send(problem.rows[0])
    } catch (error) {
        res.send(error);
    }
};
