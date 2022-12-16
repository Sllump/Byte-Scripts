-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.24-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table astralrp.mdw_charges
CREATE TABLE IF NOT EXISTS `mdw_charges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `charges` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table astralrp.mdw_charges: ~3 rows (approximately)
INSERT INTO `mdw_charges` (`id`, `category`, `color`, `charges`) VALUES
	(1, 'Infractions', '#417011', '[{"title":"Failure to stop at Red Light","months":"0","points":"0","fine":"500"},{"title":"Failure to stop at Stop Sign","months":"0","points":"0","fine":"500"},{"title":"Speeding 5mph over","months":"0","points":"0","fine":"500"},{"title":"Speeding 10mph over","months":"0","points":"0","fine":"750"},{"title":"Speeding 20mph over","months":"0","points":"0","fine":"1000"},{"title":"Speeding 30+ mph over","months":"0","points":"1","fine":"1250"},{"title":"Unroadworthy Vehicle","months":"0","points":"0","fine":"500"},{"title":"Careless Driving","months":"0","points":"0","fine":"750"},{"title":"Illegal U-Turn","months":"0","points":"0","fine":"200"},{"title":"Failure to yield to Emergency Services","months":"0","points":"2","fine":"750"},{"title":"Failure to give Right of Way","months":"0","points":"0","fine":"450"},{"title":"Failure to Signal","months":"0","points":"0","fine":"50"},{"title":"Broken Tail Light","months":"0","points":"0","fine":"50"},{"title":"Broken Headlight","months":"0","points":"0","fine":"50"},{"title":"Illegal Parking","months":"0","points":"0","fine":"200"},{"title":"Improper/Unsafe Turn","months":"0","points":"0","fine":"100"},{"title":"Improper/Missing Plate","months":"0","points":"0","fine":"100"},{"title":"Wrong Way of Travel","months":"0","points":"2","fine":"250"},{"title":"Improper/Illegal Pass","months":"0","points":"0","fine":"150"},{"title":"Use of Emergency Sirens","months":"0","points":"0","fine":"500"},{"title":"Driving without Headlights","months":"0","points":"0","fine":"150"},{"title":"Obstructing Traffic","months":"0","points":"0","fine":"250"},{"title":"Failure to Present A Drivers Licence","months":"0","points":"0","fine":"500"},{"title":"Operating a Motorcycle Without a Helmet","months":"0","points":"0","fine":"100"},{"title":"Improperly Equipped Vehicle","months":"0","points":"0","fine":"250"},{"title":"Texting While Driving","months":"0","points":"2","fine":"150"},{"title":"Following too closely","months":"0","points":"0","fine":"200"},{"title":"Failure to Maintain Lane","months":"0","points":"0","fine":"100"},{"title":"Calling while driving","months":"0","points":"2","fine":"500"},{"title":"Falling right hand turn","months":"0","points":"0","fine":"250"}]'),
	(2, 'Misdemeanors', '#7e5800', '[{"months":"15","title":"Negligent Discharge of a Firearm/Weapon in Public","fine":"1000","points":"0"},{"months":"15","title":"Reckless Endangerment","fine":"1000","points":"0"},{"months":"15","title":"Assault","fine":"1500","points":"0"},{"months":"10","title":"Threat to Bodily Harm","fine":"500","points":"0"},{"months":"20","title":"Domestic Violence","fine":"1500","points":"0"},{"months":"50","title":"Contempt of Court","fine":"4000","points":"0"},{"months":"15","title":"Poss. Of Stolen Property","fine":"1000","points":"0"},{"months":"20","title":"Aiding and Abetting","fine":"1500","points":"0"},{"months":"10","title":"Attempted Grand Theft Auto","fine":"1500","points":"0"},{"months":"20","title":"Hit and Run No Injuries","fine":"2000","points":"0"},{"months":"15","title":"Fleeing/Eluding Law Enforcement (On Foot)","fine":"1500","points":"0"},{"months":"15","title":"Money Laundering","fine":"2000","points":"0"},{"months":"10","title":"Gambling","fine":"1000","points":"0"},{"months":"15","title":"Prostitution","fine":"750","points":"0"},{"months":"10","title":"False Identification","fine":"500","points":"0"},{"months":"15","title":"False Imprisonment","fine":"750","points":"0"},{"months":"15","title":"False Personation","fine":"750","points":"0"},{"months":"10","title":"Criminal Trespass","fine":"1000","points":"0"},{"months":"15","title":"Breaking And Entering","fine":"1000","points":"0"},{"months":"10","title":"Misuse of 911","fine":"350","points":"0"},{"months":"10","title":"Indecent Exposure","fine":"500","points":"0"},{"months":"10","title":"Harbouring or Concealing Persons","fine":"500","points":"0"},{"months":"15","title":"Illegal Operation of an Unlicensed Business","fine":"1000","points":"0"},{"months":"10","title":"False Report to a Peace Officer","fine":"500","points":"0"},{"months":"10","title":"Selling or Furnishing Alcohol to a Minor","fine":"750","points":"0"},{"months":"10","title":"Possession of Alcohol by a Minor","fine":"500","points":"0"},{"months":"10","title":"Sale of Alcohol without a licence","fine":"350","points":"0"},{"months":"20","title":"Illegal Possession of Class 2 Controlled Substances","fine":"1500","points":"0"},{"months":"5","title":"Illegal Possession of Drug Paraphernalia","fine":"750","points":"0"},{"months":"10","title":"Reckless Driving","fine":"1500","points":"5"},{"months":"10","title":"Poss. of Stolen Vehicle","fine":"1250","points":"0"},{"months":"15","title":"Poss. of Counterfeit Currency","fine":"1250","points":"0"},{"months":"10","title":"Damage to Public Property","fine":"750","points":"0"},{"months":"10","title":"Damage to Private Property","fine":"750","points":"0"},{"months":"15","title":"Poss. of Weapon w/ Criminal Intent","fine":"1000","points":"0"},{"months":"10","title":"Poss. of Illegal Contraband","fine":"750","points":"0"},{"months":"5","title":"Failure to Obey a Lawful Order","fine":"500","points":"0"},{"months":"5","title":"Illegal Brandishing of Firearm","fine":"1000","points":"0"},{"months":"10","title":"Hunting from Flotation Device","fine":"750","points":"0"},{"months":"15","title":"Possession of Valuable Goods","fine":"1250","points":"0"},{"months":"5","title":"Vandalism","fine":"500","points":"0"},{"months":"10","title":"Sale of CDS","fine":"1000","points":"0"},{"months":"10","title":"Poss. of Firearm w/o a Weapon Licence","fine":"1000","points":"0"},{"months":"10","title":"Poss. Of An Unregistered Firearm","fine":"1000","points":"0"},{"months":"25","title":"Illegal Sale/Transfer of Non Class 2 Firearm","fine":"2000","points":"0"},{"months":"0","title":"Failure to Inform of Concealed Weapon","fine":"500","points":"0"},{"months":"5","title":"Operating Motor Vehicle w/o Valid Drivers License","fine":"750","points":"2"},{"months":"10","title":"Resisting Arrest","fine":"750","points":"0"},{"months":"10","title":"Disorderly Conduct","fine":"500","points":"0"},{"months":"10","title":"Disturbing the Peace","fine":"750","points":"0"},{"months":"10","title":"Domestic Disturbance","fine":"750","points":"0"},{"months":"5","title":"Harassment","fine":"1000","points":"0"},{"months":"0","title":"Loitering","fine":"500","points":"0"},{"months":"0","title":"Jay Walking","fine":"500","points":"0"},{"months":"10","title":"Conspiracy to Commit State Misdemeanor","fine":"500","points":"0"},{"months":"0","title":"Public Intoxication","fine":"500","points":"0"},{"months":"5","title":"Failure to Identify","fine":"500","points":"0"},{"months":"10","title":"Failure to Abide by Hunting Laws","fine":"500","points":"0"},{"months":"5","title":"Unlawful Assembly","fine":"500","points":"0"},{"months":"10","title":"Failure to Pay a Fine","fine":"1000","points":"0"}]'),
	(3, 'Felonies', '#7e2100', '[{"title":"Torture","months":"35","points":"0","fine":"10000"},{"title":"Racketeering/RICO","months":"999999","points":"0","fine":"10000"},{"title":"Airplane/Helicopter Hijacking","months":"10","points":"0","fine":"1000"},{"title":"Possession of a Destructive or Incendiary Device","months":"20","points":"0","fine":"1500"},{"title":"Unlawful Use of Firearm from a Motor Vehicle","months":"15","points":"0","fine":"1250"},{"title":"Armed Federal Bank Robbery","months":"35","points":"0","fine":"3500"},{"title":"Hostage Taking (Federal)","months":"20","points":"0","fine":"1250"},{"title":"Stalking","months":"10","points":"0","fine":"1000"},{"title":"Contempt of Court (Federal)","months":"100","points":"0","fine":"5000"},{"title":"Perjury","months":"15","points":"0","fine":"2500"},{"title":"Witness Tampering","months":"15","points":"0","fine":"2500"},{"title":"Failure to Comply with Subpoena","months":"15","points":"0","fine":"1250"},{"title":"Retaliating Against a Witness, Victim, or Informant","months":"15","points":"0","fine":"1000"},{"title":"Retaliating Against a Justice/Judge by False Claim or Slander","months":"15","points":"0","fine":"1000"},{"title":"False Declarations before Grand Jury or Court","months":"15","points":"0","fine":"1250"},{"title":"Flight to Avoid Prosecution or Giving Testimony","months":"25","points":"0","fine":"1500"},{"title":"Probation/Parole Violation","months":"30","points":"0","fine":"1500"},{"title":"Blackmail","months":"10","points":"0","fine":"750"},{"title":"Extortion","months":"15","points":"0","fine":"1250"},{"title":"Corruption","months":"999999","points":"0","fine":"3500"},{"title":"Federal Possession of Counterfeit Currency","months":"20","points":"0","fine":"2500"},{"title":"Disclosure of Confidential Information/Documents","months":"15","points":"0","fine":"2000"},{"title":"Damage to Religious Property","months":"10","points":"0","fine":"1200"},{"title":"Obstruction of Justice","months":"15","points":"0","fine":"1500"},{"title":"Arson","months":"20","points":"0","fine":"5000"},{"title":"Destruction of Government Documentation/Information","months":"999999","points":"0","fine":"5000"},{"title":"Conspiracy to Commit a Federal Felony","months":"15","points":"0","fine":"2500"},{"title":"Weapons Stockpiling w/ Intent to Traffic 5 - 10","months":"20","points":"0","fine":"1750"},{"title":"Weapons Stockpiling w/ Intent to Traffic 20+","months":"999999","points":"0","fine":"3000"},{"title":"Jailbreak","months":"500","points":"0","fine":"3000"},{"title":"Terroristic Threat","months":"20","points":"0","fine":"2500"},{"title":"Terrorism","months":"999999","points":"0","fine":"5000"},{"title":"Violation of bail","months":"20","points":"0","fine":"2500"},{"title":"Treason - POTENTIAL DEATH SENTENCE","months":"999999","points":"0","fine":"3000"},{"title":"Failure to Comply and Relinquish to a Seizure Warrant","months":"200","points":"0","fine":"5000"},{"title":"Improper Entry by an Alien","months":"100","points":"0","fine":"3000"},{"title":"Tax Evasion","months":"50","points":"0","fine":"5000"},{"title":"1st Degree Murder of a Peace Officer","months":"999999","points":"0","fine":"10000"},{"title":"Attempted Murder of a Peace Officer","months":"30","points":"0","fine":"3500"},{"title":"1st Degree Felony Murder","months":"999999","points":"0","fine":"10000"},{"title":"Attempted Murder","months":"25","points":"0","fine":"2500"},{"title":"Kidnapping","months":"15","points":"0","fine":"2000"},{"title":"Aggravated Armed Robbery","months":"20","points":"0","fine":"2500"},{"title":"Armed Bank Robbery","months":"20","points":"0","fine":"2750"},{"title":"Grand Theft Auto","months":"10","points":"0","fine":"1500"},{"title":"2nd Degree Murder of a Peace Officer","months":"999999","points":"0","fine":"15000"},{"title":"2nd Degree Murder","months":"999999","points":"0","fine":"10000"},{"title":"Possession of weed  w/ Intent to Traffic 10-19","months":"5","points":"0","fine":"1000"},{"title":"Possession of weed  w/ Intent to Traffic 20-59","months":"10","points":"0","fine":"1250"},{"title":"Possession of weed  w/ Intent to Traffic 60-119","months":"10","points":"0","fine":"1500"},{"title":"Possession of weed  w/ Intent to Traffic 12-199","months":"15","points":"0","fine":"1750"},{"title":"Possession of Cocaine  w/ Intent to Traffic 1-29","months":"10","points":"0","fine":"1250"},{"title":"Possession of Cocaine  w/ Intent to Traffic 30-59","months":"20","points":"0","fine":"1750"},{"title":"Possession of Cocaine  w/ Intent to Traffic 60-119","months":"20","points":"0","fine":"2000"},{"title":"Possession of Cocaine  w/ Intent to Traffic 120-199","months":"20","points":"0","fine":"2500"},{"title":"Drug Cultivation/Manufacturing","months":"25","points":"0","fine":"3000"},{"title":"Drug Trafficking 200 - 350","months":"20","points":"0","fine":"2500"},{"title":"Drug Trafficking 350 - 600","months":"20","points":"0","fine":"3000"},{"title":"Drug Trafficking 600+","months":"999999","points":"0","fine":"5000"},{"title":"Manslaughter","months":"999999","points":"0","fine":"5000"},{"title":"Negligent Homicide","months":"999999","points":"0","fine":"5500"},{"title":"Vehicular Manslaughter","months":"20","points":"0","fine":"2500"},{"title":"Attempted Kidnapping","months":"15","points":"0","fine":"1750"},{"title":"Felonious Restraint","months":"15","points":"0","fine":"1500"},{"title":"Robbery","months":"15","points":"0","fine":"2500"},{"title":"Animal Cruelty","months":"15","points":"0","fine":"1250"},{"title":"Assault On Public Servant","months":"10","points":"0","fine":"1250"},{"title":"Assault w/ Deadly Weapon","months":"15","points":"0","fine":"1500"},{"title":"Criminal Possession of a Government Issued Firearm","months":"20","points":"0","fine":"2500"},{"title":"Criminal Possession of a Government Issued Taser","months":"15","points":"0","fine":"1500"},{"title":"Criminal Possession of Government Issued Equipment","months":"15","points":"0","fine":"1500"},{"title":"Gang Related Shooting","months":"25","points":"0","fine":"3500"},{"title":"Embezzlement","months":"10","points":"0","fine":"2500"},{"title":"Possession of a Stolen Government Vehicle","months":"15","points":"0","fine":"1500"},{"title":"Poaching","months":"15","points":"0","fine":"1500"},{"title":"Poss. of a Class 1 Illegal Firearm","months":"10","points":"0","fine":"1500"},{"title":"Poss. of a Class 2 Illegal Firearm","months":"20","points":"0","fine":"2000"},{"title":"Poss. of a Class 3 Illegal Firearm","months":"35","points":"0","fine":"3500"},{"title":"Illegal Sale/Transfer of Illegal Weapons","months":"30","points":"0","fine":"3500"},{"title":"Manufacturing of Illegal Weapons","months":"999999","points":"0","fine":"5000"},{"title":"Poss. of Firearm by a Convicted Violent Felon","months":"15","points":"0","fine":"1500"},{"title":"Driving Under The Influence","months":"10","points":"0","fine":"1500"},{"title":"Hit and Run with Injuries","months":"15","points":"0","fine":"1500"},{"title":"Felony Evading Law Enforcement (Vehicle)","months":"15","points":"0","fine":"2000"},{"title":"Felony Evading (w/ Injury/Death) (Vehicle)","months":"15","points":"0","fine":"1500"},{"title":"Attempted or Unarmed Robbery","months":"15","points":"0","fine":"1500"},{"title":"Attempted Bribery","months":"15","points":"0","fine":"1000"},{"title":"Escape","months":"15","points":"0","fine":"1500"},{"title":"Rioting","months":"10","points":"0","fine":"1000"},{"title":"Felonious Trespassing","months":"15","points":"0","fine":"1500"},{"title":"Smuggling","months":"15","points":"0","fine":"1000"},{"title":"Conspiracy to Commit State Felony","months":"10","points":"0","fine":"1250"},{"title":"Gang Enhancement","months":"15","points":"0","fine":"1200"},{"title":"Illegal Street Racing Participation","months":"15","points":"3","fine":"1250"},{"title":"Unauthorised Practice of Law","months":"15","points":"0","fine":"1000"},{"title":"Joyriding","months":"10","points":"0","fine":"1000"},{"title":"Grand Larceny","months":"25","points":"0","fine":"3500"},{"title":"Failure to follow Aviation Guidelines","months":"15","points":"0","fine":"1250"},{"title":"Operation of an Aircraft without a licence","months":"15","points":"0","fine":"1500"}]');

-- Dumping structure for table astralrp.mdw_evidence
CREATE TABLE IF NOT EXISTS `mdw_evidence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `identifier` longtext DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `cid` int(255) DEFAULT NULL,
  `incidentId` int(255) DEFAULT NULL,
  `tags` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

-- Dumping structure for table astralrp.mdw_incidents
CREATE TABLE IF NOT EXISTS `mdw_incidents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `unix` varchar(255) DEFAULT NULL,
  `info` longtext DEFAULT NULL,
  `evidence` longtext DEFAULT NULL,
  `officers` longtext DEFAULT NULL,
  `persons` longtext DEFAULT NULL,
  `tags` longtext DEFAULT NULL,
  `vehicles` longtext DEFAULT NULL,
  `criminals` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

-- Dumping structure for table astralrp.mdw_incidents_ems
CREATE TABLE IF NOT EXISTS `mdw_incidents_ems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `unix` varchar(255) DEFAULT NULL,
  `info` longtext DEFAULT NULL,
  `ems` longtext DEFAULT NULL,
  `persons` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

-- Dumping structure for table astralrp.mdw_warrants
CREATE TABLE IF NOT EXISTS `mdw_warrants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(255) DEFAULT 0,
  `incidentid` int(255) DEFAULT 0,
  `expiry` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

-- Dumping structure for table astralrp.user_priors
CREATE TABLE IF NOT EXISTS `user_priors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(255) NOT NULL,
  `charge` varchar(255) DEFAULT NULL,
  `times` int(255) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;