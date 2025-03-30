-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         11.6.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para seminario
CREATE DATABASE IF NOT EXISTS `seminario` /*!40100 DEFAULT CHARACTER SET armscii8 COLLATE armscii8_bin */;
USE `seminario`;

-- Volcando estructura para tabla seminario.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL DEFAULT '0',
  `apellido` varchar(30) NOT NULL DEFAULT '0',
  `edad` int(2) NOT NULL DEFAULT 0,
  `telefono` varchar(8) NOT NULL DEFAULT '0',
  `ciudad` varchar(30) NOT NULL DEFAULT '0',
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla seminario.clientes: ~3 rows (aproximadamente)
INSERT INTO `clientes` (`codigo`, `nombre`, `apellido`, `edad`, `telefono`, `ciudad`) VALUES
	(2, 'Carlos', 'Contreras', 22, '87654321', 'mongolon'),
	(4, 'Sofia', 'Molina', 23, '12378456', 'San Juan'),
	(5, 'Pedro', 'Castillo', 90, '9512365', 'LAX');

-- Volcando estructura para tabla seminario.empleados
CREATE TABLE IF NOT EXISTS `empleados` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL DEFAULT '',
  `fecha` varchar(50) NOT NULL DEFAULT '',
  `sueldo` decimal(10,2) NOT NULL DEFAULT 0.00,
  `telefono` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla seminario.empleados: ~5 rows (aproximadamente)
INSERT INTO `empleados` (`codigo`, `nombre`, `apellido`, `fecha`, `sueldo`, `telefono`) VALUES
	(1, 'David', 'Aguilar', '2025-03-05', 10000.00, '12345678'),
	(2, 'Enil', 'Contrras', '2025-03-04', 1000.00, '1234789'),
	(4, 'carlos', 'Mata', '2025-03-02', 80000.00, '2341234'),
	(5, 'Alexa', 'Canales', '2025-03-06', 200.00, '12324'),
	(6, 'Carla', 'Murillo', '2025-03-06', 36.00, '9874561');

-- Volcando estructura para tabla seminario.idiomas
CREATE TABLE IF NOT EXISTS `idiomas` (
  `codigoIdioma` int(11) NOT NULL AUTO_INCREMENT,
  `codigoEmp` int(11) NOT NULL DEFAULT 0,
  `nombreIdioma` varchar(50) NOT NULL DEFAULT '0',
  `tiempo` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`codigoIdioma`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla seminario.idiomas: ~4 rows (aproximadamente)
INSERT INTO `idiomas` (`codigoIdioma`, `codigoEmp`, `nombreIdioma`, `tiempo`) VALUES
	(1, 1, 'ingless', '14'),
	(3, 5, 'Portugues', '8'),
	(5, 4, 'Aleman', '5'),
	(6, 2, 'Aleman', '1');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
