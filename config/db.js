import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'

dotenv.config()

export const pool = new Pool({
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});