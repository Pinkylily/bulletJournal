DROP TABLE IF EXISTS Tasks;
DROP TABLE IF EXISTS Events;
DROP TABLE IF EXISTS Users;
drop type if exists status_enum;
drop type if exists date_type_enum;

CREATE TABLE Users (
    id uuid DEFAULT gen_random_uuid() primary KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE type status_enum AS ENUM ('archived', 'active');

CREATE TABLE Events (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    creator_id uuid NOT null REFERENCES Users(id),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status status_enum NOT NULL DEFAULT 'active',
    "startAt" TIMESTAMP NOT NULL,
    "endAt" TIMESTAMP NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE date_type_enum AS ENUM ('month', 'year', 'day', 'time');

CREATE TABLE Tasks (
    id uuid DEFAULT gen_random_uuid() primary key,
    creator_id uuid NOT null REFERENCES Users(id),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status status_enum NOT NULL DEFAULT 'active',
    done boolean NOT NULL DEFAULT false,
    planDate TIMESTAMP,
    planDateType date_type_enum,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    event_id uuid REFERENCES Events(id)
);

CREATE OR REPLACE FUNCTION update_updatedAt_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updatedAt = now(); 
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_ab_updatedAt BEFORE UPDATE
ON Users FOR EACH ROW EXECUTE PROCEDURE update_updatedAt_column();

CREATE TRIGGER update_ab_updatedAt BEFORE UPDATE
ON Events FOR EACH ROW EXECUTE PROCEDURE update_updatedAt_column();

CREATE TRIGGER update_ab_updatedAt BEFORE UPDATE
ON Tasks FOR EACH ROW EXECUTE PROCEDURE update_updatedAt_column();