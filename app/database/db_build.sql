BEGIN;

DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(1000) NOT NULL,
  body VARCHAR(1000) NOT NULL,
  completed BOOLEAN NOT NULL
);

INSERT INTO todos (title, body, completed) VALUES
('World Domination', 'Muhaha first we will come for the fishes', false);

COMMIT;
