-------------------CREACION DE LA BASE DE DATOS Y TABLAS-----------------
CREATE DATABASE Editoriales;

USE Editoriales;

CREATE TABLE Reg_Libros (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(180),
    Año DATE(30),
    Genero VARCHAR(30),
    Num_Paginas VARCHAR(9),
    Editorial VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Autores (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombres VARCHAR(180),
    Fech_Nac DATE,
    Ciudad VARCHAR(30),
    Correo VARCHAR(9),
    Max_Libros VARCHAR(30),
    description VARCHAR(255),

);
CREATE TABLE Reg_Editorial (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(180),
    Direccion VARCHAR(30),
    Telefono VARCHAR(30),
    Email VARCHAR(9),
    Max_Libros VARCHAR(30),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE Editoriales to Editoriales;

DESCRIBE Editoriales;