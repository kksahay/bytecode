import { pool } from "../config/db.js";
import bcrypt from 'bcrypt';
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { _username, _password } = req.body
        if (!_username) {
            return res.send({
                message: "Username is missing"
            })
        }
        if (!_password) {
            return res.send({
                message: "Password is missing"
            })
        }
        const existingUser = await pool.query(
            "SELECT _username FROM users WHERE _username = $1", [_username]
        )
        if (existingUser.rows[0]) {
            return res.send({
                success: false,
                message: "Username already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(_password, 10)
        await pool.query(
            "INSERT INTO users (_username, _password) VALUES ($1, $2)", [_username, hashedPassword]
        )
        res.send({
            success: true,
            message: "Registered Successfully",
            token
        })

    } catch (error) {
        res.status(500).send(error)
    }
}
export const loginController = async (req, res) => {
    try {
        const { _username, _password } = req.body;
        if (!_username || !_password) {
            return res.status(404).send({
                success: false,
                message: "Email or password missing"
            })
        }
        const user = await pool.query(
            "SELECT _username FROM users where _username = $1", [_username]
        )
        if (!user.rows[0]) {
            return res.status(404).send({
                success: false,
                message: "Username does not exists"
            })
        }
        const userPasswordQuery = await pool.query(
            "SELECT _password FROM users where _username = $1", [_username]
        )
        const userPassword = await userPasswordQuery.rows[0]._password
        const matchPassword = await bcrypt.compare(_password, userPassword);
        if (!matchPassword) {
            return res.status(404).send({
                success: false,
                message: "Invalid Password"
            })
        }
        const token = JWT.sign({_username}, process.env.JWT_SECRET, { expiresIn: "7d" })
        res.status(200).send({
            success: true,
            message: "Login Successful",
            user: {
                username: _username,
                password: _password
            },
            token
        })

    } catch (error) {
        res.status(500).send(error)
    }
}