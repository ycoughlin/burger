CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
	burger_name VARCHAR
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY
    (id)
);

    SELECT *
    FROM burgers;