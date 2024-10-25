CREATE DATABASE tasklist;

\c tasklist

CREATE TABLE users (id serial primary key , username VARCHAR(50) NOT NULL, email VARCHAR UNIQUE, password VARCHAR, fecha_registro DATE DEFAULT CURRENT_DATE );

CREATE TABLE task (idUser int, date DATE DEFAULT CURRENT_DATE, id SERIAL PRIMARY KEY, tittle VARCHAR, description VARCHAR, budget int, priority VARCHAR(10), state VARCHAR(20), CONSTRAINT fk_idUser FOREIGN KEY (idUser) REFERENCES users(id) );