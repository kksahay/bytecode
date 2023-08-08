CREATE DATABASE leetcode;

CREATE TABLE problem(
    problem_id SERIAL PRIMARY KEY,
    problem_name VARCHAR(255),
    problem_statement VARCHAR(255),
    problem_difficulty VARCHAR(255)
);