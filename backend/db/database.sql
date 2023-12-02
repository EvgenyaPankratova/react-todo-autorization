
create TABLE person(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(50),
    surname VARCHAR(50),
    login_person VARCHAR(30) NOT NULL UNIQUE,
    password_person VARCHAR(100) NOT NULL,
    supervisor VARCHAR(100)
);

create TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    description_task TEXT,
    finished TIMESTAMP,
    created TIMESTAMP,
    updated TIMESTAMP,
    priority_task VARCHAR(20),
    status_task VARCHAR(20),
    creator_id INTEGER,
    responsible_id INTEGER,
    FOREIGN KEY (creator_id) REFERENCES person(id),
    FOREIGN KEY (responsible_id) REFERENCES person(id)
);

