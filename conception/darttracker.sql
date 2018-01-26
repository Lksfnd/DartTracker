-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 26, 2018 at 08:36 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `darttracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `participants` text NOT NULL,
  `startScore` int(11) NOT NULL,
  `mode_in` tinyint(3) UNSIGNED NOT NULL,
  `mode_out` tinyint(3) UNSIGNED NOT NULL,
  `winner` int(10) UNSIGNED NOT NULL,
  `metadata` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamehits`
--

CREATE TABLE `gamehits` (
  `fk_game_id` int(10) UNSIGNED NOT NULL,
  `hits` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `pictureUrl` text NOT NULL,
  `wins` int(10) UNSIGNED NOT NULL,
  `losses` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `playerStats`
--

CREATE TABLE `playerStats` (
  `fk_player_id` int(10) UNSIGNED NOT NULL,
  `maxHit` int(10) UNSIGNED NOT NULL,
  `maxHitCounter` int(10) UNSIGNED NOT NULL,
  `top_hits` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gamehits`
--
ALTER TABLE `gamehits`
  ADD PRIMARY KEY (`fk_game_id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `playerStats`
--
ALTER TABLE `playerStats`
  ADD PRIMARY KEY (`fk_player_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `gamehits`
--
ALTER TABLE `gamehits`
  ADD CONSTRAINT `gamehits_ibfk_1` FOREIGN KEY (`fk_game_id`) REFERENCES `game` (`id`);

--
-- Constraints for table `playerStats`
--
ALTER TABLE `playerStats`
  ADD CONSTRAINT `playerStats_ibfk_1` FOREIGN KEY (`fk_player_id`) REFERENCES `player` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
