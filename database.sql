CREATE DATABASE leetcode;

CREATE TABLE problemset (
    _id serial PRIMARY KEY,
    _name varchar,
    _description text,
    _difficulty VARCHAR(20),
    _input varchar,
    _output varchar,
    _constraint text,
    _sample_input text,
    _sample_output text,
    _tests integer
);

CREATE TABLE users (
    _username VARCHAR(20) NOT NULL,
    _password VARCHAR(100) NOT NULL,
    _role INT NOT NULL DEFAULT 0,
    _solved INT[]
);