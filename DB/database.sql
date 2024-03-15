create TABLE person(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) UNIQUE  
);

create TABLE data(
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_login VARCHAR(255),
    FOREIGN KEY (user_login) REFERENCES person (login)
);
