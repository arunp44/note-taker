DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

use company;

CREATE TABLE department (
    id int NOT NULL,
    name varchar(30) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE role (
    id int NOT NULL,
    title varchar(30),
    salery decimal,
    department_id int NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Employee (
    id int NOT NULL,
    LastName varchar(30) NOT NULL,
    FirstName varchar(30) NOT NULL,
    roleID int,
    managerID int,
    PRIMARY KEY (ID)
);