CREATE TABLE students (
	id UUID DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY(id)
);

GRANT INSERT, SELECT, UPDATE, DELETE ON TABLE public.students TO dev;