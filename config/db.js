import pg from 'pg'
const { Pool } = pg
export const pool = new Pool({
    user: "postgres",
    password: "1202",
    host: "localhost",
    port: process.env.DB_PORT,
    database: "leetcode"
});