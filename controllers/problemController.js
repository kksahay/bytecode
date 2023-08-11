import { pool } from "../config/db.js"

export const problemListController = async (req, res) => {
    try {
        const problemList = await pool.query("SELECT * FROM problem")
        res.status(200).send(problemList.rows)
    } catch (error) {
        res.status(500).send("error")
    }
}
export const problemController = async (req, res) => {
    try {
        const { id } = req.params
        const problem = await pool.query("SELECT * FROM problem WHERE problem_id = $1", [id])
        res.status(200).send(problem.rows[0])
    } catch (error) {
        res.status(500).send("error")
    }
}