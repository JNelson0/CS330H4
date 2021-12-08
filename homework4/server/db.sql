CREATE DATABASE dbClass;

CREATE TABLE class(
    class_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    number VARCHAR(255),
    description VARCHAR(255)
);