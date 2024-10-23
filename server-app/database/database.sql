CREATE DATABASE tasklist;

\c tasklist

CREATE TABLE users (id serial primary key , username VARCHAR(50) NOT NULL, email VARCHAR UNIQUE, password VARCHAR, fecha_registro DATE DEFAULT CURRENT_DATE );