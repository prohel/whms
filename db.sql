-- Created by Vertabelo (http://vertabelo.com)
-- Model: GLnpBqR8qn5oqbrGX7NNeKKd3LZbbIDqHcucofO3rTQO9Flx3vxL9sjZkfneIuBl
-- Version: chcHaVcrJOJHQI1ZFFANJ7QNC3tKsY51Fxdmi6UrOS6g1Y5az4HYuznl0Lt0xSXZ
-- Script type: create
-- Scope: [tables, references, sequences, views, procedures]
-- Generated at Wed Jan 08 20:31:18 CET 2014

DROP Table IF EXISTS rooms;
DROP Table IF EXISTS questions;
CREATE DATABASE clicker;
USE clicker;

-- tables
-- Table ideas
CREATE TABLE rooms (
    id int  NOT NULL AUTO_INCREMENT,
     varchar(255) NOT NULL,
    description text  NOT NULL,
    count int,
    active tinyint,
    usercode int,
    admincode int,
    created_at timestamp,
    PRIMARY KEY (id)
);

-- Table categories
CREATE TABLE questions (
    id int  NOT NULL AUTO_INCREMENT,
    room_id int  NOT NULL,
    description text NOT NULL,
    active tinyint,
    choicea varchar(255) NOT NULL,
    choiceb varchar(255),
    choicec varchar(255),
    choiced varchar(255),
    choicee varchar(255),
    created_at timestamp,
    PRIMARY KEY (id)
);


-- foreign keys
-- Reference:  questions (table: rooms)


ALTER TABLE rooms ADD CONSTRAINT questions FOREIGN KEY questions (room_id)
    REFERENCES rooms (id)
