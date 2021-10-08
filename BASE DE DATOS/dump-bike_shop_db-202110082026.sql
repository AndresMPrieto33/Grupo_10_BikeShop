-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: bike_shop_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopping_session_id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_9e1e67d0-c27f-40fa-b7b7-f15cd74557a1` (`productId`),
  KEY `FK_e66bedab-039b-45b7-be77-93d7db1ed83e` (`shopping_session_id`),
  CONSTRAINT `FK_9e1e67d0-c27f-40fa-b7b7-f15cd74557a1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_e66bedab-039b-45b7-be77-93d7db1ed83e` FOREIGN KEY (`shopping_session_id`) REFERENCES `shopping_sessions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `payment_details_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_0eebf998-0b10-48d8-92d2-850c731bd8d7` (`user_id`),
  KEY `FK_3b125200-167c-40de-855c-242220a284a1` (`payment_details_id`),
  CONSTRAINT `FK_0eebf998-0b10-48d8-92d2-850c731bd8d7` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_3b125200-167c-40de-855c-242220a284a1` FOREIGN KEY (`payment_details_id`) REFERENCES `payment_details` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_details_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_details`
--

DROP TABLE IF EXISTS `payment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_details_id` int(11) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `status` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiesdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_51c89683-bb58-442b-90e1-e863408e26f3` (`order_details_id`),
  CONSTRAINT `FK_51c89683-bb58-442b-90e1-e863408e26f3` FOREIGN KEY (`order_details_id`) REFERENCES `order_items` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_details`
--

LOCK TABLES `payment_details` WRITE;
/*!40000 ALTER TABLE `payment_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` int(11) NOT NULL,
  `image` text DEFAULT NULL,
  `category` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifeidAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `brand` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_dbf88b83-341d-4e9d-b051-1e986fcfc1e0` (`category`),
  KEY `FK_fa1ff422-c361-496f-bbf8-75a74a8628a7` (`stock`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'THORN EVO','24 velocidades (3x8) Shimano ALTUS.Cuadro de Aluminio 6061. Cubiertas Chaoyang/Kenda. Frenos a disco hidráulicos delanteros y traseros Shimano. Ruedas de aluminio, reforzadas y doble pared Venzo. Horquilla RST GILA / SR SUNTOUR XCT con bloqueo y regulación. Piñón a cassette.',82000,10,'venzo-THORN-EVO-24V.jpg',1,10,'2021-10-08 21:10:19','2021-10-08 21:10:19','2021-10-08 21:10:19','VENZO','Negro'),(4,'STINGER','Equipamiento VENZO y SHIMANO originales. Frenos a DISCOS HIDRAULICOS SHIMANO. Shimano Deore M6000 2x10V. Suspensión con bloqueo RST Gila. Aluminio 6061. Rodado 29. Llantas dobles pared marca Venzo con masas a rulemanes. Cubiertas MAXXIS PACE',70000,0,'venzo-stinger-2x10v.png',1,5,'2021-10-08 21:17:12','2021-10-08 21:17:12','2021-10-08 21:17:12','VENZO','Naranja'),(5,'Cube BMX','Asiento Velo BMX freestyle. Frenos V-Brake. Llanta 48 rayos reforzada Forma freestyle. Engranaje freestyle compact disc. Pedales freestyle acrílico Neco. Cubierta freestyle 20x2,0. Rodado 20',39000,0,'venzo-cube-bmx.png',1,6,'2021-10-08 21:21:10','2021-10-08 21:21:10','2021-10-08 21:21:10','VENZO','Naranja'),(6,'SKYLINE EVO 21v','21 velocidades Shimano TOURNEY. Cuadro de aluminio 6061. Frenos a disco mecánico. Rodado 29. Cubiertas Chaoyang. Ruedas reforzadas, doble pared de aluminio, Venzo, con mazas a rulemanes.',64200,7,'venzo-skyline-evo-21v.png',1,2,'2021-10-08 21:33:49','2021-10-08 21:33:49','2021-10-08 21:33:49','VENZO','Negro'),(7,'PRIMAL XC Shadow 21v','24 velocidades (3x8) Shimano ALTUS. Cuadro de Aluminio 6061. Cubiertas Chaoyang/Kenda (según envío de fábrica). Frenos a disco hidráulicos delanteros y traseros Shimano. Ruedas de aluminio, reforzadas y doble pared Venzo. Horquilla RST GILA / SR SUNTOUR XCT (según envío de fábrica) con bloqueo y regulación.',82000,0,'venzo-pirmal-xc-shadow-24v.jpeg',1,1,'2021-10-08 21:41:58','2021-10-08 21:41:58','2021-10-08 21:41:58','VENZO','Negro'),(8,'LOKI EVO Shadow 21v','21 Velocidades SHIMANO SIS. Cuadro Aluminio 6061. Frenos A Disco Mecánicos. Rodado 29. Cubiertas Chaoyang. Ruedas Reforzadas Doble Pared Aluminio Venzo con masas a rulemanes.',52500,0,'venzo-loki-evo-shadow.png',1,4,'2021-10-08 22:00:39','2021-10-08 22:00:39','2021-10-08 22:00:39','VENZO','Negro'),(9,'TRAVELER 700','27 velocidades (3x9). Pata de cambio: Shimano Acera Shadow Descarrilador: Shimano Altus Shadow. Cuadro de Aluminio 6061. Cubiertas Chaoyang Frenos a disco mecánicos delanteros y traseros Shimano Tourney. Ruedas de aluminio, reforzadas y doble pared Venzo. Horquilla rígida Venzo Traveler. Piñón a cassette. Parrilla delantera y trasera',93500,10,'venzo-traveler-700.png',1,2,'2021-10-08 22:06:07','2021-10-08 22:06:07','2021-10-08 22:06:07','VENZO','Verde'),(10,'Horquilla Venzo VMT Plus R29','Horquilla rígida. Poste cónico. Rodado 29. Material: aluminio. Peso: 1155g.',7600,0,'horquilla-venzo vmt-plus-r29.jpeg',3,8,'2021-10-08 22:19:30','2021-10-08 22:19:30','2021-10-08 22:19:30','VENZO','Negro'),(11,'BLAZE EVO r29','Rodado 29. Frente cónico. Eje 9mm. Rígida. Material: fibra de carbono. 3K Peso: 580g',53000,10,'horquilla-venzo-x-blaze-evo.png',3,1,'2021-10-08 22:23:10','2021-10-08 22:23:10','2021-10-08 22:23:10','VENZO','Negro'),(12,'Portabicicletas Venzo Reforzado Plegable P/3 Bicicletas','Estructura de caño metálico. Cierre con seguro para el amarre de las bicis con grampas rígidas y tensor. Correas de sujeción con trabas. Peso: 3.9 kg. Capacidad Maxima: 45kg. Regulacion de angulo de los brazos. Gomas para el apoyo al auto.  No compatible con autos con aleron de plastico. Capacidad maxima 3 bicicletas.',16000,0,'portabicicletas-venzo-reforzado.jpg',2,10,'2021-10-08 22:27:30','2021-10-08 22:27:30','2021-10-08 22:27:30','VENZO','Negro'),(13,'Asiento De Gel Antiprostatico',' ',2500,0,'asiento-de-gel-antiprostatico-firebird.jpg',3,15,'2021-10-08 22:30:14','2021-10-08 22:30:14','2021-10-08 22:30:14','FIREBIRD','Negro'),(14,'Asiento Fabric Line Elite Shallow','Rieles: Cro-mo (7 mm). Base: nailon flexible.Funda: microfibra. Perfil: poco profundo. Peso: 242g. Ancho: 142 mm. Longitud: 282 mm. Riel intermedio a la parte superior de la silla de montar 49 mm.',10000,0,'asiento-fabric-line-elite.jpg',3,6,'2021-10-08 22:32:46','2021-10-08 22:32:46','2021-10-08 22:32:46','LINE','Negro'),(15,'Asiento Fizik MTB Tundra M5','Carcasa: Nylon reforzado con carbono. Rieles WingFlex : S-Alloy. Carcasa: Microtex Nero Carcasa. Lateral: Antracite Printed Microtex Carcasa. Trasera: Cordura negra Acolchado. Baja densidad con canal de alivio de presión. Compatible con el sistema de clip integrado Peso: 235 g. Dimensiones: 287x126 mm',21900,7,'asiento-fizik-mtb-tundra-m5.jpg',3,2,'2021-10-08 22:36:28','2021-10-08 22:36:28','2021-10-08 22:36:28','FIZIK','Negro'),(16,'Pedales BBB Road Dynamic','Uso: Ruta. Fuerza de liberación ajustable (te permite personalizar y ajustar los pedales). 9 ° libertad de movimiento lateral para proteger las articulaciones de la rodilla. Eje CrMo mecanizado CNC. Geometría única para fácil entrada y salida. Rodamiento a rulemanes. Pedales de clic compatibles. Incluye calas RoadClip BPD-02A rojas floted. Peso: 322 g.',9600,0,'pedales-bbb-road-dynamic.jpg',3,6,'2021-10-08 22:38:24','2021-10-08 22:38:24','2021-10-08 22:38:24','BBB','Negro'),(17,'Pedales Cannondale 6 Point 3','Fabricada en aluminio de alta calidad. Ideal para bicicletas mtb, fixie, urbanas. ultra resistentes. Diseño exclusivo de cannondale. Rosca: 9/16. Rodamientos de rulemanes. Incluye reflectores amarillos para mayor seguridad. Color: negro',6700,0,'pedales-cannodale-6-point.jpg',3,2,'2021-10-08 22:43:14','2021-10-08 22:43:14','2021-10-08 22:43:14','Cannondale','Negro'),(18,'Pedales Shimano M520 SPD','Su peso es de 380 gramos el par de pedales. Diseño de cuerpo compacto con anclaje abierto para un anclaje fácil.  Mejor repelencia del barro y la suciedad que cualquier otro pedal de su clase. Tensión de anclaje y liberación ajustable. Eje en aleación de cromoly y eje de cartucho de rodamientos sellados de bajo mantenimiento',8200,10,'Pedales-Shimano-M520-SPD.jpg',3,1,'2021-10-08 22:46:44','2021-10-08 22:46:44','2021-10-08 22:46:44','Shimano','Negro'),(19,'CUBIERTA MAXXIS ASPEN 29X2.25 TR EXO','Marca: Maxxis. Modelo: Aspen TR Exo Protection. Rodado: 29x2.25. Tipo: Tubeless Ready. Aro: de Kevlar (plegables/folding). Versión reforzada Exo Protection. Goma/Shore: 62a/60a. Tpi: 120 tpi. Inspirada en las carreras. Tacos laterales agresivos. Compuesto dual (Dual compound). Cubierta de XC liviana. Terreno: Duro, compacto, Mixto: tierra, piedras, raíces. Condiciones:Todo. ETRTO: 52-622. Peso: 646g',11000,20,'CUBIERTA-MAXXIS-ASPEN-29X2.25-TR-EXO.jpg',5,20,'2021-10-08 22:50:29','2021-10-08 22:50:29','2021-10-08 22:50:29','Maxxis','Negro'),(20,'Cubierta Maxxis Grifter SilkShield 20x2,40 Kevlar','20x2.40. ETRTO: 61-406. TPI: 60. Peso: 605 g. Compuesto: Doble. PSI máximo: 110. Color: Negro. Tecnología: SilkShield',8100,0,'Cubierta-Maxxis-Grifter-SilkShield-20x2.40-Kevlar.png',5,20,'2021-10-08 22:53:13','2021-10-08 22:53:13','2021-10-08 22:53:13','Maxxis','Negro'),(21,'Soporte De Pared Bicicleta Hornit Clug','Listo P/ Amurar. 3 Medidas Para Ruedas de Ruta, Híbrida o MTB. Ruta = 23 - 32mm (1 - 1.25) De 6 a 13Kg. Híbrida = 33 - 42mm (1.3 - 1.75) De 8 a 20Kg. MTB = 43 - 62mm (1.8 - 2.5) De 8 a 20Kg.  Con Tornillos y Tarugos.',3200,15,'Soporte-De-Pared-Bicicleta-Hornit-Clug.jpg',2,14,'2021-10-08 22:57:43','2021-10-08 22:57:43','2021-10-08 22:57:43','Hornit','Negro'),(22,'Linterna USB - Van Halen','Luz led blanca de alta potencia de 3 Watt. 350 lumenes. Recargable por USB. Carga rápida. Resistente al agua. Indicador de batería baja. Protector de batería. 4 modos (super brillo / potenciada / constante / parpadeante). Tamaño: 61,5x27x27mm. Peso: 50g.',2500,0,'Linterna-USB -Van-Halen.jpg',2,30,'2021-10-08 23:00:20','2021-10-08 23:00:20','2021-10-08 23:00:20','Van Halen','Negro'),(23,'Luz delantera y trasera RAVEMEN LS-CT02',' ',8200,0,'Luz-delantera-y-trasera-RAVEMEN-LS-CT02.png',2,18,'2021-10-08 23:02:01','2021-10-08 23:02:01','2021-10-08 23:02:01','Ravemen','Negro');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_sessions`
--

DROP TABLE IF EXISTS `shopping_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping_sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_98b14381-5bdb-442c-a340-0a0a9af7c9c2` (`user_id`),
  CONSTRAINT `FK_98b14381-5bdb-442c-a340-0a0a9af7c9c2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_sessions`
--

LOCK TABLES `shopping_sessions` WRITE;
/*!40000 ALTER TABLE `shopping_sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  `lastName` varchar(70) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` text DEFAULT NULL,
  `user_rol_Id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `modifiedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_926c9416-8ccc-476e-880b-3a42a27ea972` (`user_rol_Id`),
  CONSTRAINT `FK_926c9416-8ccc-476e-880b-3a42a27ea972` FOREIGN KEY (`user_rol_Id`) REFERENCES `user_rol` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `number` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `postalCode` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a243f4e6-b25b-4ba2-8977-98178f90f189` (`user_id`),
  CONSTRAINT `FK_a243f4e6-b25b-4ba2-8977-98178f90f189` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_rol`
--

DROP TABLE IF EXISTS `user_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_rol`
--

LOCK TABLES `user_rol` WRITE;
/*!40000 ALTER TABLE `user_rol` DISABLE KEYS */;
INSERT INTO `user_rol` VALUES (1,'admin'),(2,'usuario');
/*!40000 ALTER TABLE `user_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bike_shop_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-08 20:26:10
