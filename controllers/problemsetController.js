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

export const createProblemController = async (req, res) => {
    try {
        const { name, description, difficulty, input, output, constraint, sample_input, sample_output } = req.body
        if (!name) { return res.send("Problem name is not given") }
        if (!description) { return res.send("Problem Description is missing") }
        if (!difficulty) { return res.send("Problem difficulty is not given") }
        if (!constraint) { return res.send("Problem constraint is not given") }
        console.log(constraint)
        const problem = await pool.query(
            "INSERT INTO problemset (_name, _description, _difficulty, _input, _output, _constraint, _sample_input, _sample_output) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            [name, description, difficulty, input, output, constraint, sample_input, sample_output]
        )
        res.status(200).send({
            success: true
        })

    } catch (error) {
        res.status(500).send(error)
    }
}
