-- File: /human-resources-project/server/db/db.sql

-- Create the database
CREATE DATABASE IF NOT EXISTS RECURSOS_HUMANOS;

-- Use the database
USE RECURSOS_HUMANOS;

-- Create the 'empleados' table
CREATE TABLE IF NOT EXISTS empleados (
    nro_empleado INT PRIMARY KEY,
    nro_documento INT,
    apellido VARCHAR(50) NOT NULL,
    nombre VARCHAR(50),
    telefono VARCHAR(50),
    correo_electronico VARCHAR(50),
    fecha_contratacion DATE,
    cargo_id INT,
    sucursal_id INT,
    region_id INT,
    provincia_id INT,
    salario FLOAT,
    descripcion VARCHAR(50),
    descripcion_corta VARCHAR(50)
);

-- Create the 'informes' table
CREATE TABLE IF NOT EXISTS informes (
    informe_id INT PRIMARY KEY,
    detalle VARCHAR(50),
    nro_empleado INT
);

-- Create the 'cargos' table
CREATE TABLE IF NOT EXISTS cargos (
    cargo_id INT PRIMARY KEY,
    descripcion VARCHAR(50),
    salario_min FLOAT,
    salario_max FLOAT
);

-- Create the 'sucursales' table
CREATE TABLE IF NOT EXISTS sucursales (
    sucursal_id INT PRIMARY KEY,
    nombre_sucursal VARCHAR(50),
    direccion VARCHAR(50),
    provincia_id INT,
    region_id INT,
    localidad_id INT,
    telefono VARCHAR(50)
);

-- Create the 'regiones' table
CREATE TABLE IF NOT EXISTS regiones (
    region_id INT PRIMARY KEY,
    region_descripcion VARCHAR(50)
);

-- Create the 'provincias' table
CREATE TABLE IF NOT EXISTS provincias (
    provincia_id INT PRIMARY KEY,
    provincia_nombre VARCHAR(50),
    region_id INT
);

-- Create the 'localidades' table
CREATE TABLE IF NOT EXISTS localidades (
    localidad_id INT PRIMARY KEY,
    localidad_nombre VARCHAR(50),
    region_id INT,
    provincia_id INT,
    sucursal_id INT
);

-- Create the 'movimientos_internos' table
CREATE TABLE IF NOT EXISTS movimientos_internos (
    nro_movimiento INT AUTO_INCREMENT PRIMARY KEY,
    nro_empleado INT,
    cargo_id INT,
    cargo_historico INT,
    periodo DATE
);

-- Insert initial data into the 'empleados' table
INSERT INTO empleados (nro_empleado, nro_documento, apellido, nombre, telefono, correo_electronico, fecha_contratacion, cargo_id, sucursal_id, region_id, provincia_id, salario, descripcion, descripcion_corta)
VALUES 
    (1, 34447402, 'Abdala', 'Alejandro', '351-12345', 'abdala@gmail.com', '2005-08-09', 1, 1, 1, 1, 200000, NULL, NULL),
    (2, 34447403, 'Bernabeu', 'Bastian', '351-123458', 'bernabeu@gmail.com', '2000-08-09', 2, 2, 1, 2, 150000, NULL, NULL),
    (3, 34447404, 'Castillo', 'Carlos', '351-123451', 'castillo@gmail.com', '2013-08-09', 3, 3, 2, 3, 120000, NULL, NULL),
    (4, 34447405, 'Diaz', 'Daniel', '351-123452', 'diaz@gmail.com', '2010-08-09', 4, 4, 2, 4, 175000, NULL, NULL),
    (5, 34447406, 'Echegaray', 'Enrique', '351-123453', 'echegaray@gmail.com', '2020-08-09', 4, 5, 3, 5, 260000, NULL, NULL),
    (6, 34447407, 'Gonzales', 'Leandro', '351-12345', 'leangon@gmail.com', '2019-08-09', 3, 6, 3, 6, 200000, NULL, NULL);

-- Insert initial data into the 'informes' table
INSERT INTO informes (informe_id, detalle, nro_empleado)
VALUES 
    (1, 'informe de gastos', 1),
    (2, 'informe de ganancias', 2),
    (3, 'informe de ingresos', 3);

-- Insert initial data into the 'cargos' table
INSERT INTO cargos (cargo_id, descripcion, salario_min, salario_max)
VALUES 
    (1, 'Gerente de ventas', 80000, 240000),
    (2, 'Gerente de Operaciones', 150000, 300000),
    (3, 'Atencion al cliente', 80000, 100000),
    (4, 'Recursos humanos', 80000, 100000),
    (5, 'Direccion', 200000, 500000);

-- Insert initial data into the 'sucursales' table
INSERT INTO sucursales (sucursal_id, nombre_sucursal, direccion, provincia_id, region_id, localidad_id, telefono)
VALUES 
    (1, 'Sucursal Buenos Aires', 'Aguirre 235', 1, 1, 1, '3764213350'),
    (2, 'Sucursal La Plata', 'Mitre 300', 1, 2, 2, '2944686719'),
    (3, 'Sucursal Posadas', 'San Martin 435', 2, 1, 3, '111561235'),
    (4, 'Sucursal Obera', 'Lavalle 567', 2, 1, 4, '224646891'),
    (5, 'Sucursal Alta gracia', 'Corrientes 1190', 3, 2, 5, '3416891620'),
    (6, 'Sucursal Cordoba', 'Jujuy 636', 3, 2, 6, '221789457'),
    (7, 'Sucursal Bell Ville', 'Salta 985', 4, 2, 7, '221789458'),
    (8, 'Sucursal Merlo', 'Lavalle 1980', 4, 2, 8, '221789459'),
    (9, 'Sucursal Las Chacritas', 'Callao 263', 5, 3, 9, '221789410'),
    (10, 'Sucursal Villa Don Bosco', 'Castelli 589', 5, 3, 10, '221789411'),
    (11, 'Sucursal Bella Vista', 'Junin 548', 6, 3, 11, '221789412'),
    (12, 'Sucursal Goya', 'J.M de Rosas 654', 6, 3, 12, '221789413');

-- Insert initial data into the 'regiones' table
INSERT INTO regiones (region_id, region_descripcion)
VALUES 
    (1, 'Centro'),
    (2, 'Nuevo Cuyo'),
    (3, 'Norte Grande');

-- Insert initial data into the 'provincias' table
INSERT INTO provincias (provincia_id, provincia_nombre, region_id)
VALUES 
    (1, 'Buenos Aires', 1),
    (2, 'Cordoba', 1),
    (3, 'Misiones', 3),
    (4, 'San Luis', 2),
    (5, 'San Juan', 2),
    (6, 'Corrientes', 3);

-- Insert initial data into the 'localidades' table
INSERT INTO localidades (localidad_id, localidad_nombre, region_id, provincia_id, sucursal_id)
VALUES 
    (1, 'Bahia Blanca', 1, 1, 1),
    (2, 'La Plata', 1, 1, 2),
    (3, 'Alta Gracia', 1, 2, 3),
    (4, 'Bell Ville', 1, 2, 4),
    (5, 'Posadas', 3, 3, 5),
    (6, 'Obera', 3, 3, 6),
    (7, 'Villa Mercedes', 2, 4, 7),
    (8, 'Merlo', 2, 4, 8),
    (9, 'Las Chacritas', 2, 5, 9),
    (10, 'Villa Don Bosco', 2, 5, 10),
    (11, 'Bella Vista', 3, 6, 11),
    (12, 'Goya', 3, 6, 12);

-- Insert initial data into the 'movimientos_internos' table
INSERT INTO movimientos_internos (nro_movimiento, nro_empleado, cargo_id, cargo_historico, periodo)
VALUES 
    (1, 1, 1, 3, '2020-08-09'),
    (2, 2, 2, 5, '2023-05-02'),
    (3, 3, 3, 3, '2012-01-01'),
    (4, 4, 4, 4, '2018-04-04'),
    (5, 5, 5, 4, '2022-01-01'),
    (6, 6, 6, 1, '2021-02-06');

-- Stored Procedure: p_aumento_empleado
DELIMITER //
CREATE PROCEDURE p_aumento_empleado (empleado INT, porcentaje FLOAT)
BEGIN
    UPDATE empleados
    SET salario = (salario * (1 + porcentaje / 100))
    WHERE nro_empleado = empleado;
END //
DELIMITER ;

-- Stored Procedure: p_nuevo_cargo
DELIMITER //
CREATE PROCEDURE p_nuevo_cargo (new_cargo_id INT, new_descripcion VARCHAR(50), new_salario_min FLOAT, new_salario_max FLOAT)
BEGIN
    INSERT INTO cargos (cargo_id, descripcion, salario_min, salario_max)
    VALUES (new_cargo_id, new_descripcion, new_salario_min, new_salario_max);
END //
DELIMITER ;

-- Stored Procedure: p_cambio_cargo
DELIMITER //
CREATE PROCEDURE p_cambio_cargo (cambio_nro_empleado INT, cambio_cargo_id INT)
BEGIN
    UPDATE empleados
    SET cargo_id = cambio_cargo_id
    WHERE nro_empleado = cambio_nro_empleado;
END //
DELIMITER ;

-- Trigger: t_registro_cargo
DELIMITER //
CREATE TRIGGER t_registro_cargo
AFTER UPDATE ON empleados
FOR EACH ROW
BEGIN
    IF NEW.cargo_id <> OLD.cargo_id THEN
        INSERT INTO movimientos_internos (nro_empleado, cargo_id, cargo_historico, periodo)
        VALUES (OLD.nro_empleado, NEW.cargo_id, OLD.cargo_id, CURDATE());
    END IF;
END //
DELIMITER ;

-- Function: f_antiguedad
DELIMITER //
CREATE FUNCTION f_antiguedad (empleado INT)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE antiguedad INT;
    SET antiguedad = TIMESTAMPDIFF(YEAR, (SELECT fecha_contratacion FROM empleados WHERE nro_empleado = empleado), CURDATE());
    RETURN antiguedad;
END //
DELIMITER ;

-- End of file: /human-resources-project/server/db/db.sql