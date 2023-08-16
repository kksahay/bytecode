import { pool } from '../config/db.js'
import fs from 'fs'
import { exec } from 'child_process'

export const problemsetController = async (req, res) => {
    try {
        const problemSet = await pool.query(
            "SELECT * FROM problemset"
        )
        res.status(200).send(problemSet.rows)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const taskController = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await pool.query(
            "SELECT * FROM problemset WHERE _id = $1", [id]
        )
        res.status(200).send(task.rows[0])
    } catch (error) {
        res.status(500).send(error)
    }
}
export const submitController = async (req, res) => {
    try {
        const { id } = req.params;
        const code = req.files.file.data;
        fs.writeFileSync("test.cpp", code);
        exec("g++ -o test test.cpp", (error, stderr) => {
            if (error) {
                return res.send(stderr)
            }
            exec("./test > o.txt", (error, stderr) => {
                if (error) {
                    return res.send(stderr)
                }
                exec("rm -rf test.cpp test", (error, stderr) => {
                    if (error) {
                        return res.send(stderr)
                    }
                })
            })
        })
        res.status(200).send({
            success: true,
            id
        })
    } catch (error) {
        res.status(500).send({
            success: false
        })
    }
}
export const createProblemController = async (req, res) => {
    try {
        const { name, description, difficulty, constraint } = req.body
        if (!name) { return res.send("Problem name is not given") }
        if (!description) { return res.send("Problem Description is missing") }
        if (!difficulty) { return res.send("Problem difficulty is not given") }
        if (!constraint) { return res.send("Problem constraint is not given") }
        console.log(constraint)
        const problem = await pool.query(
            "INSERT INTO problemset (_name, _description, _difficulty, _constraint) VALUES ($1, $2, $3, $4)",
            [name, description, difficulty, constraint]
        )
        res.status(200).send({
            success: true
        })

    } catch (error) {
        res.status(500).send(error)
    }
}
