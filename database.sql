CREATE DATABASE leetcode;

CREATE TABLE problems (
    _id serial PRIMARY KEY,
    _name VARCHAR(100) NOT NULL,
    _description TEXT,
    _difficulty VARCHAR(20),
    _constraint VARCHAR(200)
);

CREATE TABLE users (
    _username VARCHAR(20) NOT NULL,
    _password VARCHAR(100) NOT NULL,
    _role INT NOT NULL DEFAULT 0,
    _solved INT[]
);