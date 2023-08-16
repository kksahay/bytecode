import jwt from 'jsonwebtoken';
import { pool } from '../config/db.js';

export const requireSignIn = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized - Missing token' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send({ message: 'Unauthorized - Invalid token' });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        const { username } = req.body;
        const userRole = await pool.query(
            "SELECT _role from users WHERE _username = $1", [username]
        )
        if (userRole.rows[0]._role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized access"
            })
        }
        next();
    } catch (error) {
        res.status(401).send(error)
    }
}