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
        const { _name, _description, _difficulty, _constraint } = req.body
        if (!_name) { return res.send("Problem name is not given") }
        if (!_description) { return res.send("Problem Description is missing") }
        if (!_difficulty) { return res.send("Problem difficulty is not given") }
        if (!_constraint) { return res.send("Problem constraint is not given") }
        const problem = await pool.query(
            "INSERT INTO (_name, _description, _difficulty, _constraint) VALUES ($1, $2, $3, $4)",
            [_name, _description, _difficulty, _constraint]
        )
        res.status(200).send({
            success: true
        })

    } catch (error) {
        res.status(500).send({
            success: false
        })
    }
}
