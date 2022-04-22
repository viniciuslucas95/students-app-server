#!/bin/bash
export PGPASSWORD='admin'
psql -U 'postgres' <<- EOSQL
    CREATE DATABASE dev;
    CREATE ROLE dev WITH
    	LOGIN
	    NOSUPERUSER
	    NOCREATEDB
	    NOCREATEROLE
	    INHERIT
	    NOREPLICATION
	    CONNECTION LIMIT -1
	    PASSWORD 'dev';
    GRANT CONNECT ON DATABASE dev TO dev;
	\c dev;
	CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	CREATE TABLE students (
	id UUID DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL,
	age SMALLINT NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY(id)
    );
    GRANT INSERT, SELECT, UPDATE, DELETE ON TABLE public.students TO dev;
EOSQL