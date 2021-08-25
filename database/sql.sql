-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 139.59.125.83    Database: iot711
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auto_control`
--

DROP TABLE IF EXISTS `auto_control`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auto_control` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `delays` int DEFAULT NULL,
  `priority` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto_control`
--

LOCK TABLES `auto_control` WRITE;
/*!40000 ALTER TABLE `auto_control` DISABLE KEYS */;
INSERT INTO `auto_control` VALUES (1,'ระบบล้างหน้าไส้กรอง A',5000,1),(2,'ระบบล้างหน้าไส้กรอง B',5000,2),(3,'ระบบล้างไส้กรอง A',5000,3),(4,'ระบบล้างหน้าไส้กรอง A',5000,4),(5,'ระบบล้างไส้กรอง B',5000,5),(6,'ระบบล้างหน้าไส้กรอง B',5000,6),(7,'ระบบกรองน้ำ',5000,7),(8,'ระบบล้างหน้าไส้กรอง A',5000,8),(9,'ระบบล้างหน้าไส้กรอง B',5000,9),(10,'ระบบกรองน้ำ',5000,10),(11,'ระบบล้างหน้าไส้กรอง A',5000,11),(12,'ระบบล้างหน้าไส้กรอง B',5000,12),(13,'ระบบกรองน้ำ',5000,13),(14,'ระบบล้างหน้าไส้กรอง A',5000,14),(15,'ระบบล้างหน้าไส้กรอง B',5000,15),(16,'ระบบกรองน้ำ',5000,16),(17,'เสร็จสิ้น',5000,17);
/*!40000 ALTER TABLE `auto_control` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auto_control_detail_valve`
--

DROP TABLE IF EXISTS `auto_control_detail_valve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auto_control_detail_valve` (
  `id` int NOT NULL AUTO_INCREMENT,
  `priority` int DEFAULT NULL,
  `v1` tinyint(1) DEFAULT NULL,
  `v2` tinyint(1) DEFAULT NULL,
  `v3` tinyint(1) DEFAULT NULL,
  `v4` tinyint(1) DEFAULT NULL,
  `v5` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto_control_detail_valve`
--

LOCK TABLES `auto_control_detail_valve` WRITE;
/*!40000 ALTER TABLE `auto_control_detail_valve` DISABLE KEYS */;
INSERT INTO `auto_control_detail_valve` VALUES (1,1,1,0,1,0,0),(2,2,0,1,0,1,0),(3,3,0,1,1,0,0),(4,4,1,0,1,0,0),(5,5,1,0,0,1,0),(6,6,0,1,0,1,0),(7,7,1,1,0,0,1),(8,8,1,0,1,0,0),(9,9,0,1,0,1,0),(10,10,1,1,0,0,1),(11,11,1,0,1,0,0),(12,12,0,1,0,1,0),(13,13,1,1,0,0,1),(14,14,1,0,1,0,0),(15,15,0,1,0,1,0),(16,16,1,1,0,0,1),(17,17,0,0,0,0,0);
/*!40000 ALTER TABLE `auto_control_detail_valve` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_work_auto`
--

DROP TABLE IF EXISTS `status_work_auto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status_work_auto` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_work_auto`
--

LOCK TABLES `status_work_auto` WRITE;
/*!40000 ALTER TABLE `status_work_auto` DISABLE KEYS */;
INSERT INTO `status_work_auto` VALUES (1,0);
/*!40000 ALTER TABLE `status_work_auto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'iot711'
--

--
-- Dumping routines for database 'iot711'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-15 20:19:05
