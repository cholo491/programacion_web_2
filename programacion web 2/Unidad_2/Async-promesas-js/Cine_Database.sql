CREATE TABLE `Peliculas` (
  `Id` varchar(255) PRIMARY KEY,
  `Nombre` varchar(255),
  `duracion` time
);

CREATE TABLE `salas` (
  `Id` int PRIMARY KEY,
  `Asientos` int
);

CREATE TABLE `clientes` (
  `Ci` varchar(255) PRIMARY KEY,
  `Nombre_completo` varchar(255),
  `Edad` int
);

CREATE TABLE `Boleto` (
  `Pelicula_id` varchar(255),
  `Ci_cliente` varchar(255),
  `funcion_id` varchar(255)
);

CREATE TABLE `Funcion` (
  `Id` varchar(255) PRIMARY KEY,
  `Sala_id` int,
  `Pelicula_id` varchar(255),
  `horario_entrada` time
);

ALTER TABLE `Funcion` ADD FOREIGN KEY (`Sala_id`) REFERENCES `salas` (`Id`);

ALTER TABLE `Funcion` ADD FOREIGN KEY (`Pelicula_id`) REFERENCES `Peliculas` (`Id`);

ALTER TABLE `Boleto` ADD FOREIGN KEY (`funcion_id`) REFERENCES `Funcion` (`Id`);

ALTER TABLE `Boleto` ADD FOREIGN KEY (`Pelicula_id`) REFERENCES `Peliculas` (`Id`);

ALTER TABLE `Boleto` ADD FOREIGN KEY (`Ci_cliente`) REFERENCES `clientes` (`Ci`);
