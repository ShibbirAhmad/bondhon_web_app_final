-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2021 at 10:37 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bondhon_society`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_and_contacts`
--

CREATE TABLE `about_and_contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `about_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_and_contacts`
--

INSERT INTO `about_and_contacts` (`id`, `about_info`, `contact_info`, `created_at`, `updated_at`) VALUES
(1, '<p>Assalamu alaikum&nbsp;</p>', '<h4>Office: House:36, Road-6 ,Block:A, Banaroshi Polli, section-10, Mirpur,Dhaka.</h4><p>Phone:01880005511</p><p>Email:Mybondhonsociety2020@gmail.com</p>', '2021-01-17 10:35:03', '2021-06-21 09:54:27');

-- --------------------------------------------------------

--
-- Table structure for table `account_purposes`
--

CREATE TABLE `account_purposes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `account_purposes`
--

INSERT INTO `account_purposes` (`id`, `text`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Project Cost', 'debit', '2021-05-26 07:16:27', '2021-06-01 08:18:51'),
(2, 'Member Profit', 'debit', '2021-05-26 07:17:01', '2021-06-01 08:18:44'),
(3, 'Investor Profit', 'debit', '2021-05-26 07:19:34', '2021-06-01 08:18:37'),
(4, 'Investment Return', 'debit', '2021-05-26 07:19:50', '2021-06-01 08:18:30'),
(5, 'Bill Statements', 'debit', '2021-05-26 07:21:06', '2021-06-01 08:18:15'),
(6, 'Debit Others', 'debit', '2021-05-26 07:21:30', '2021-06-01 08:19:39'),
(7, 'Employee Salary', 'debit', '2021-05-26 09:08:08', '2021-06-01 08:17:48'),
(8, 'Project Profit', 'credit', '2021-05-27 09:33:49', '2021-06-01 08:17:38'),
(9, 'Member Monthly Collection', 'credit', '2021-05-27 09:34:47', '2021-06-01 08:17:29'),
(10, 'Investment Add', 'credit', '2021-05-27 09:35:14', '2021-06-01 08:17:15'),
(11, 'Credit Others', 'credit', '2021-06-01 08:19:14', '2021-06-01 08:19:30');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_role` int(11) DEFAULT 2,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `nid` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `present_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permanent_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mother_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mother_image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `father_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_present_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_permanent_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nominee_present_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_permanent_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_nid` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nominee_father_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_mother_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_father_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_mother_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_parent_present_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_parent_permanent_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_father_nid` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nominee_mother_nid` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nominee_mother_image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nominee_father_image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mother_nid` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `father_nid` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agree_with_aggreement` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aggreement_image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `admin_role`, `name`, `email`, `password`, `image`, `status`, `nid`, `present_address`, `permanent_address`, `father_name`, `father_image`, `mother_name`, `mother_image`, `father_phone`, `mother_phone`, `parent_present_address`, `parent_permanent_address`, `nominee_name`, `nominee_email`, `nominee_phone`, `nominee_image`, `nominee_present_address`, `nominee_permanent_address`, `nominee_nid`, `nominee_father_name`, `nominee_mother_name`, `nominee_father_phone`, `nominee_mother_phone`, `nominee_parent_present_address`, `nominee_parent_permanent_address`, `nominee_father_nid`, `nominee_mother_nid`, `nominee_mother_image`, `nominee_father_image`, `mother_nid`, `father_nid`, `phone`, `agree_with_aggreement`, `aggreement_image`, `created_at`, `updated_at`) VALUES
(2, 1, 'Bondhon Society', 'b@admin.com', '$2y$10$k.LX0VgSbtKY0sA/8aYtxuMiJB5dHzny.P8tVbxNqSw6tqe/VYom2', 'images/admin/cCVnmW9X3aXqEhmgRcVNkIAnrt3xthzO9Ej4gYxc.png', 1, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, '', '', '01880005511', '', '', '2020-09-22 10:10:43', '2021-06-23 07:51:08'),
(15, 2, 'Shimul', 's@gmail.com', '$2y$10$hGh//so//ullJoYmPwq9huM6Ik7aRsV3flUiVp/VuOjHMDkSSKWDm', 'images/admin/u1sL1vMwREOwvAZw9ww107KZRkwVWTam1sEOmKHv.jpg', 1, 'images/admin/eP8NdytMvMligVQmu4n2O8QZGfmi27z92Z7EBdBJ.png', 'Chhatak', 'Mirpur', 'f of test', 'images/admin/miOo0eIsG3J2erc36YJ2gdILCCxLpUeQUGZzcUwT.jpg', 'ldgiukofjhm', 'images/admin/5MdAtwJtOJPVcN6NpL6NU4cSsAQbcLvhVNsAPSDU.png', '01635529841', '01635529847', '112', 'chha', 'kawcer', 'k@admin.com', '01635529842', 'images/admin/JFcxKjdjChvLJNObJOBjUu6XGwICC235WkmjBhcl.png', 'dsdfasd', 'dfasdf', 'images/nominee/DqGtnB6qVqR17D902qlw3spdSzSOWzQCoiRonCJ2.png', 'md kamal', 'm of test', '01478562020', '0147896325', 'n test address', 'n test address', 'images/nominee/UQ8dCro4fxVN9S3PX5FMFF7DnC0T7HyOZfs7mBkE.jpg', 'images/nominee/QbTFtz3uZTqeZqFIYbwysT8DxESpJ624alJjH38v.png', 'images/admin/c9iXyjQQrFok8Bd9yazgZGyUQPyn6t0QGiUpzL7a.txt', 'images/admin/sJ7GAb2WbnPB3UI6cGAwAaIHTvqa6NzWQWDxKwFb.png', 'images/admin/duNO0E0aBg3nR4m5bIRMNMJwn8Ljpr7UbemQO5Vy.png', 'images/admin/Ambh2kaFkaNl91LGEqBMUEPiMHtgW7ITuYBAvflO.png', '01759416979', 'yes', 'images/admin/C6VpXgtNeo3Hml29i4u67H1VChvgOMDiMhh35wnE.jpg', '2021-06-22 09:16:34', '2021-06-23 04:49:02'),
(16, 1, 'shbbir', 'shibbir@gmail.com', '$2y$10$AsCtfuGY.nwgIxfqfvk4XuVT9Z2Vzk/HHbRRBvR9rWV0sWNZxbsgW', NULL, 1, NULL, 'demo', 'demo', 'demo', NULL, 'demo', NULL, 'demo', 'demo', 'demo', 'demo', 'demo', 'demo', 'demo', NULL, 'demo', 'demo', NULL, 'demo', 'demo', 'demo', 'demo', 'demo', 'demo', NULL, NULL, NULL, NULL, NULL, NULL, '01795297424', 'yes', 'demo.png', '2021-06-23 06:19:13', '2021-06-23 06:19:13'),
(17, 2, 'HM Rachel Uddin', 'hmracheluddin@gmail.com', '$2y$10$yPNloxxWD7a5WUiw5DnIQ.Ec3yn36ZttMZbSu6EnDVQJOZ9HnnOw.', 'images/admin/RM2Jw026i6lAQ4pstgwmFN6rLzf9h8AhexRM2guU.jpg', 1, 'images/admin/TMSspHedvgKbirTBSDEmsYeUQx3xhQCvMHa8rHnR.png', 'Mirpur-10', 'lakshmipur', 'Md shahab uddin', 'images/admin/THYrcEcBacnB065z31OgbplFAlxw3ndOWuQncKKl.jpg', 'MS Kamrunnahar', 'images/admin/E6woefVYtFfv3F4XpzsoBiSmDFzmgs2q4Cpo4ImS.jpg', '01881814030', '01864929299', 'lakshmipur', 'lakshmipur', 'md kapil', 'kapil@gmail.com', '01635529841', 'images/admin/sp9tqPM46hn63DcLjrMGp9TOlPVh3gzlYDoVQO32.jpg', 'lakshmipur', 'lakshmipur', 'images/nominee/bXPTsw9h06qPNEf8VqBOgLvqbn8httlbSrfWqI7G.jpg', 'Md shahab uddin', 'MS Kamrunnahar', '01881814030', '01864929299', 'lakshmipur', 'lakshmipur', 'images/nominee/k2GkwAEOAk6tzmWGVq8GzVBEpBZ2cpXNxXCi0nqm.jpg', 'images/nominee/rrz6FZImS27DOfvJE1EUVly45qXIok1kuI7kM7NX.jpg', 'images/admin/V8rsv9VxysEoohaJnMLOJLToCX7kxZrqAFpFHMrS.jpg', 'images/admin/zhnOI6aEomATGFmk2zrNQuRn4x9gJuwbDgdapSYN.jpg', 'images/admin/vmjlsRY80SjLYYWqbxzfE6KhMR7z62QCQNVKYanG.jpg', 'images/admin/oScfJjptQLbEP3dpdy8usBwD9rhFr8ReecMC73Z6.jpg', '01635529841', 'yes', 'images/admin/f269QzcXutsRxhKKdH9jidcd0sWIKvkHxKS32aRG.jpg', '2021-06-23 08:41:12', '2021-06-23 08:41:12');

-- --------------------------------------------------------

--
-- Table structure for table `admin_accounts`
--

CREATE TABLE `admin_accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` date NOT NULL,
  `month` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_accounts`
--

INSERT INTO `admin_accounts` (`id`, `admin_id`, `amount`, `date`, `month`, `comment`, `created_at`, `updated_at`) VALUES
(1, 2, 1000, '2021-06-22', '', NULL, '2021-06-22 09:37:11', '2021-06-22 09:37:11'),
(2, 17, 5000, '2020-04-01', '', 'ok', '2021-06-23 08:44:19', '2021-06-23 08:44:19');

-- --------------------------------------------------------

--
-- Table structure for table `admin_profits`
--

CREATE TABLE `admin_profits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` date NOT NULL,
  `month` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_profits`
--

INSERT INTO `admin_profits` (`id`, `admin_id`, `amount`, `date`, `month`, `paid_by`, `comment`, `created_at`, `updated_at`) VALUES
(1, 17, 1000, '2021-06-23', '', 'Cash', NULL, '2021-06-23 08:48:18', '2021-06-23 08:48:18'),
(2, 17, 1000, '2021-06-23', '', 'Cash', NULL, '2021-06-23 08:54:10', '2021-06-23 08:54:10');

-- --------------------------------------------------------

--
-- Table structure for table `aggreements`
--

CREATE TABLE `aggreements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `policy` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aggreements`
--

INSERT INTO `aggreements` (`id`, `policy`, `created_at`, `updated_at`) VALUES
(1, '<p><strong>Assalamu Alaikum All Members</strong></p><p>&nbsp;</p><p><strong>Our&nbsp;Dreams Are Too Large</strong></p>', '2021-01-17 10:52:27', '2021-06-21 09:49:06');

-- --------------------------------------------------------

--
-- Table structure for table `bill_paid_statements`
--

CREATE TABLE `bill_paid_statements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bill_statement_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bill_per_months`
--

CREATE TABLE `bill_per_months` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bill_statement_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `month` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bill_statements`
--

CREATE TABLE `bill_statements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bill_statements`
--

INSERT INTO `bill_statements` (`id`, `name`, `company_name`, `mobile_no`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Nasta/Entertainment', 'bondhon', '01880005511', 'Mirpur', '2021-06-21 10:06:04', '2021-06-21 10:06:04');

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` int(11) NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `carriers`
--

CREATE TABLE `carriers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `vacency` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `deadline` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `credits`
--

CREATE TABLE `credits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL COMMENT 'date',
  `purpose` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `credit_in` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insert_admin_id` int(11) NOT NULL COMMENT 'store_admin_id',
  `signature` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `credits`
--

INSERT INTO `credits` (`id`, `date`, `purpose`, `amount`, `credit_in`, `comment`, `insert_admin_id`, `signature`, `created_at`, `updated_at`) VALUES
(1, '2021-06-22', 'Member Monthly Collection', 1000.00, 'Cash', '(Bondhon Society)', 2, 'images/creditSignature/debit-signature-1624354631.png', '2021-06-22 09:37:11', '2021-06-22 09:37:11'),
(2, '2021-06-23', 'Fund Transfer', 0.00, 'Bank', 'Fond In Bkash(merchant)fromBank. Amount 0. And Transfer Cost 0', 2, NULL, '2021-06-23 05:10:55', '2021-06-23 05:10:55'),
(4, '2020-04-01', 'Member Monthly Collection', 5000.00, 'Cash', 'ok(HM Rachel Uddin)', 2, 'images/creditSignature/debit-signature-1624437859.png', '2021-06-23 08:44:19', '2021-06-23 08:44:19'),
(5, '2021-06-23', 'Invest From HM Rachel Uddin', 5000.00, 'Cash', 'write purpose details here', 2, NULL, '2021-06-23 08:58:22', '2021-06-23 08:58:22'),
(6, '2021-06-23', 'Project Profit', 1000.00, 'Cash', '(Abdullah)', 2, 'images/creditSignature/debit-signature-1624440360.png', '2021-06-23 09:26:00', '2021-06-23 09:26:00');

-- --------------------------------------------------------

--
-- Table structure for table `credit_dues`
--

CREATE TABLE `credit_dues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `credit_id` int(11) NOT NULL,
  `due_amount` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `debits`
--

CREATE TABLE `debits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL COMMENT 'date',
  `purpose` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `debit_from` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` double(8,2) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `signature` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insert_admin_id` int(11) NOT NULL COMMENT 'store_admin_id',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `debits`
--

INSERT INTO `debits` (`id`, `date`, `purpose`, `debit_from`, `amount`, `comment`, `signature`, `insert_admin_id`, `created_at`, `updated_at`) VALUES
(3, '2021-06-23', 'Member Profit', 'Cash', 1000.00, '(HM Rachel Uddin)', 'images/debitSignature/debit-signature-1624438098.png', 2, '2021-06-23 08:48:18', '2021-06-23 08:48:18'),
(4, '2021-06-23', 'Member Profit', 'Cash', 1000.00, '(HM Rachel Uddin)', 'images/debitSignature/debit-signature-1624438450.png', 2, '2021-06-23 08:54:10', '2021-06-23 08:54:10'),
(5, '2021-06-23', 'Project Cost', 'Cash', 1000.00, '(Abdullah)', 'images/debitSignature/debit-signature-1624440324.png', 2, '2021-06-23 09:25:24', '2021-06-23 09:25:24');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) NOT NULL,
  `name` text NOT NULL,
  `joining_date` text DEFAULT NULL,
  `designation` text NOT NULL,
  `phone` text NOT NULL,
  `phone_office` text DEFAULT NULL,
  `email` text NOT NULL,
  `position` int(11) NOT NULL,
  `avator` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `resume` text DEFAULT NULL,
  `details` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employee_salaries`
--

CREATE TABLE `employee_salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employee_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `paid` int(11) NOT NULL DEFAULT 0,
  `date` date NOT NULL,
  `comment` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fond_transfers`
--

CREATE TABLE `fond_transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `cost` double(8,2) NOT NULL DEFAULT 0.00,
  `creator_admin` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fond_transfers`
--

INSERT INTO `fond_transfers` (`id`, `from`, `to`, `amount`, `cost`, `creator_admin`, `created_at`, `updated_at`) VALUES
(1, 'Bkash(merchant)', 'Bank', 0.00, 0.00, 'Bondhon Society', '2021-06-23 05:10:55', '2021-06-23 05:10:55');

-- --------------------------------------------------------

--
-- Table structure for table `footer_settings`
--

CREATE TABLE `footer_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `facebook_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `copyright_info` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footer_settings`
--

INSERT INTO `footer_settings` (`id`, `facebook_url`, `twitter_url`, `youtube_url`, `linkedin_url`, `copyright_info`, `footer_description`, `created_at`, `updated_at`) VALUES
(1, 'https://www.facebook.com/mybondhonsocietyLTD', 'https://twitter.com/Shibbir71910444', 'https://www.youtube.com/channel/UCNjroR1fiP9QXk_fM-0s6BQ', 'https://www.linkedin.com/in/shibbir-ahmad-91a855167/', 'bondhonsociety.com @ all right reserved', '<p>Bondhon Society is a group of company&nbsp;</p>', NULL, '2021-06-28 07:24:59');

-- --------------------------------------------------------

--
-- Table structure for table `found_transfers`
--

CREATE TABLE `found_transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `cost` int(11) NOT NULL DEFAULT 0,
  `creator_admin` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `header_contact_number` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_address_details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `logo`, `title`, `icon`, `header_contact_number`, `invoice_address_details`, `created_at`, `updated_at`) VALUES
(1, 'images/general_setting/7kynbm9f7NXpp3jtdaDdN4SWfbD66820B7BOX8Qu.png', 'bondhonsociety.com', 'images/general_setting/LWi5G2E2oL8LSHnvUFmU6YczTQtMVugFbqPnpiM0.png', '01880005511', '<p>Mirpur-10, Dhaka-1216</p><p>Phone: 01880005511</p><p>Email: <a href=\"mailto:mybondhonsociety2020@gmail.com\">mybondhonsociety2020@gmail.com</a></p>', '2021-01-10 05:29:08', '2021-06-28 07:20:13');

-- --------------------------------------------------------

--
-- Table structure for table `investments`
--

CREATE TABLE `investments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `month` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `investor_id` int(11) NOT NULL,
  `purpose` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `investments`
--

INSERT INTO `investments` (`id`, `date`, `month`, `investor_id`, `purpose`, `amount`, `created_at`, `updated_at`) VALUES
(1, '2021-06-23', NULL, 1, 'write purpose details here', 5000.00, '2021-06-23 08:58:22', '2021-06-23 08:58:22');

-- --------------------------------------------------------

--
-- Table structure for table `investment_returns`
--

CREATE TABLE `investment_returns` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `investor_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `investors`
--

CREATE TABLE `investors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referance_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profit_margin` int(11) DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `father_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_nid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_nid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_present_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_permanent_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `investors`
--

INSERT INTO `investors` (`id`, `name`, `referance_name`, `mobile_no`, `email`, `nid`, `profit_margin`, `address`, `image`, `father_name`, `mother_name`, `father_phone`, `mother_phone`, `father_nid`, `mother_nid`, `parent_present_address`, `parent_permanent_address`, `created_at`, `updated_at`) VALUES
(1, 'HM Rachel Uddin', 'MD Kamal', '01635529841', '', '', 0, 'Mirpur-10', NULL, 'Md shahab uddin', 'MS Kamrunnahar', '01635529840', '01635529841', '44545', '45645645', 'lakshmipur', 'lakshmipur', '2021-06-23 08:58:22', '2021-06-23 08:58:22');

-- --------------------------------------------------------

--
-- Table structure for table `investor_profit_paids`
--

CREATE TABLE `investor_profit_paids` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `investor_id` int(11) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `profit_month` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_applies`
--

CREATE TABLE `job_applies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_08_13_074443_create_categories_table', 1),
(4, '2020_08_17_060825_create_admins_table', 1),
(5, '2020_08_18_122228_create_sub_categories_table', 2),
(6, '2020_08_19_053842_create_sub_sub_categories_table', 2),
(7, '2020_08_19_081000_create_sliders_table', 2),
(8, '2020_08_19_104901_create_attributes_table', 2),
(9, '2020_08_19_105047_create_variants_table', 2),
(10, '2020_08_23_052431_create_merchants_table', 3),
(11, '2020_08_23_064414_create_couriers_table', 3),
(12, '2020_08_23_064458_create_cities_table', 3),
(13, '2020_08_23_075702_create_comments_table', 3),
(14, '2020_08_23_093241_create_products_table', 3),
(15, '2020_08_23_093326_create_product_images_table', 3),
(16, '2020_08_24_051714_create_product_variants_table', 3),
(17, '2020_08_24_052410_create_product_attributes_table', 3),
(18, '2020_08_25_055640_create_coupons_table', 3),
(19, '2020_08_25_082149_create_product_barcodes_table', 3),
(20, '2020_08_26_111627_create_purchases_table', 3),
(21, '2020_08_29_113350_create_purchaseitems_table', 3),
(29, '2020_09_05_164925_create_orders_table', 5),
(30, '2020_09_05_165048_create_order_items_table', 5),
(31, '2020_09_05_172052_create_customers_table', 5),
(32, '2020_08_31_110050_create_offers_table', 6),
(35, '2014_10_12_000000_create_users_table', 7),
(36, '2020_10_15_082430_create_contacts_table', 8),
(37, '2020_10_22_081732_create_selling__offers_table', 9),
(38, '2020_10_24_115225_create_carriers_table', 9),
(39, '2020_10_26_100913_create_job_applies_table', 9),
(40, '2020_10_28_094859_create_permission_tables', 9),
(41, '2020_11_05_080038_create_credit_dues_table', 10),
(42, '2020_11_09_052816_create_account_purposes_table', 10),
(43, '2020_11_09_100132_create_employee_salaries_table', 10),
(44, '2020_11_10_103502_create_category_sliders_table', 10),
(45, '2020_11_18_050426_create_order_barcodes_table', 10),
(46, '2020_11_18_110811_create_supplier_payments_table', 10),
(47, '2020_11_19_054703_create_customer_dues_table', 10),
(48, '2020_11_25_061607_create_reseller_models_table', 10),
(49, '2020_11_25_061640_create_reseller_payments_table', 10),
(50, '2020_12_03_055822_create_factories_table', 10),
(51, '2020_12_06_054115_create_found_transfers_table', 10),
(52, '2020_12_06_070445_create_fond_transfers_table', 10),
(53, '2021_01_04_164956_create_salary_per_months_table', 10),
(54, '2021_01_09_174652_create_otp_verifications_table', 10),
(55, '2021_01_11_154041_create_sub_cities_table', 10),
(56, '2021_02_01_104156_create_product_reviews_table', 10),
(57, '2021_02_02_151814_create_loans_table', 10),
(58, '2021_02_02_154010_create_loaners_table', 10),
(59, '2021_02_02_161612_create_loan_paids_table', 10);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\Admin', 1),
(1, 'App\\Models\\Admin', 2),
(1, 'App\\Models\\Admin', 6),
(1, 'App\\Models\\Admin', 11),
(1, 'App\\Models\\Admin', 15),
(20, 'App\\Models\\Admin', 1),
(20, 'App\\Models\\Admin', 2),
(20, 'App\\Models\\Admin', 11),
(21, 'App\\Models\\Admin', 1),
(21, 'App\\Models\\Admin', 2),
(22, 'App\\Models\\Admin', 1),
(22, 'App\\Models\\Admin', 2),
(23, 'App\\Models\\Admin', 1),
(23, 'App\\Models\\Admin', 2),
(24, 'App\\Models\\Admin', 1),
(24, 'App\\Models\\Admin', 2),
(25, 'App\\Models\\Admin', 1),
(25, 'App\\Models\\Admin', 2),
(26, 'App\\Models\\Admin', 1),
(26, 'App\\Models\\Admin', 2),
(27, 'App\\Models\\Admin', 1),
(27, 'App\\Models\\Admin', 2),
(28, 'App\\Models\\Admin', 1),
(28, 'App\\Models\\Admin', 2),
(29, 'App\\Models\\Admin', 1),
(29, 'App\\Models\\Admin', 2),
(30, 'App\\Models\\Admin', 1),
(30, 'App\\Models\\Admin', 2),
(31, 'App\\Models\\Admin', 1),
(31, 'App\\Models\\Admin', 2),
(32, 'App\\Models\\Admin', 1),
(32, 'App\\Models\\Admin', 2),
(41, 'App\\Models\\Admin', 1),
(41, 'App\\Models\\Admin', 2),
(42, 'App\\Models\\Admin', 1),
(42, 'App\\Models\\Admin', 2),
(44, 'App\\Models\\Admin', 1),
(44, 'App\\Models\\Admin', 2),
(45, 'App\\Models\\Admin', 1),
(45, 'App\\Models\\Admin', 2),
(45, 'App\\Models\\Admin', 11),
(46, 'App\\Models\\Admin', 1),
(46, 'App\\Models\\Admin', 2),
(46, 'App\\Models\\Admin', 11),
(47, 'App\\Models\\Admin', 1),
(47, 'App\\Models\\Admin', 2),
(47, 'App\\Models\\Admin', 11),
(48, 'App\\Models\\Admin', 1),
(48, 'App\\Models\\Admin', 2),
(48, 'App\\Models\\Admin', 11),
(51, 'App\\Models\\Admin', 1),
(51, 'App\\Models\\Admin', 2),
(52, 'App\\Models\\Admin', 1),
(52, 'App\\Models\\Admin', 2),
(53, 'App\\Models\\Admin', 1),
(53, 'App\\Models\\Admin', 2),
(54, 'App\\Models\\Admin', 1),
(54, 'App\\Models\\Admin', 2),
(55, 'App\\Models\\Admin', 2),
(55, 'App\\Models\\Admin', 15),
(56, 'App\\Models\\Admin', 2),
(56, 'App\\Models\\Admin', 15),
(57, 'App\\Models\\Admin', 2),
(57, 'App\\Models\\Admin', 15),
(58, 'App\\Models\\Admin', 2),
(58, 'App\\Models\\Admin', 15),
(59, 'App\\Models\\Admin', 2),
(59, 'App\\Models\\Admin', 15),
(60, 'App\\Models\\Admin', 2),
(60, 'App\\Models\\Admin', 15),
(61, 'App\\Models\\Admin', 2),
(61, 'App\\Models\\Admin', 15),
(62, 'App\\Models\\Admin', 2),
(62, 'App\\Models\\Admin', 15),
(63, 'App\\Models\\Admin', 2),
(63, 'App\\Models\\Admin', 15),
(64, 'App\\Models\\Admin', 2),
(65, 'App\\Models\\Admin', 2),
(66, 'App\\Models\\Admin', 2),
(67, 'App\\Models\\Admin', 2),
(67, 'App\\Models\\Admin', 15),
(68, 'App\\Models\\Admin', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `otp_verifications`
--

CREATE TABLE `otp_verifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mobile_no` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group_name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `group_name`, `created_at`, `updated_at`) VALUES
(1, 'view dashboard', 'admin', 'dashboard', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(20, 'manage accounts', 'admin', 'Account', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(21, 'manage credit', 'admin', 'Credit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(22, 'create credit', 'admin', 'Credit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(23, 'edit credit', 'admin', 'Credit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(24, 'delete credit', 'admin', 'Credit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(25, 'manage debit', 'admin', 'Debit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(26, 'create debit', 'admin', 'Debit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(27, 'edit debit', 'admin', 'Debit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(28, 'delete debit', 'admin', 'Debit', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(29, 'manage Fund Transfer', 'admin', 'Fund Transfer', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(30, 'manage Project', 'admin', 'Project', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(31, 'create Project', 'admin', 'Project', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(32, 'edit Project', 'admin', 'Project', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(41, 'manage slider', 'admin', 'Slider', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(42, 'create create', 'admin', 'Slider', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(44, 'create supplier', 'admin', 'Supplier', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(45, 'manage admin', 'admin', 'Admin', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(46, 'create admin', 'admin', 'Admin', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(47, 'manage team', 'admin', 'Team', '2021-02-15 06:22:56', '2021-02-15 06:22:56'),
(48, 'create team', 'admin', 'Team', '2021-02-15 06:22:57', '2021-02-15 06:22:57'),
(51, 'manage user', 'admin', 'User', '2021-02-15 06:22:57', '2021-02-15 06:22:57'),
(52, 'manage investment', 'admin', 'Investor', '2021-02-15 06:22:57', '2021-02-15 06:22:57'),
(53, 'manage eport', 'admin', 'Report', '2021-02-15 06:22:57', '2021-02-15 06:22:57'),
(54, 'manage set up', 'admin', 'Basic Setup', '2021-02-15 06:22:57', '2021-02-15 06:22:57'),
(55, 'member_and_amount', 'admin', 'dashboard', NULL, NULL),
(56, 'project_and_profit', 'admin', 'dashboard', NULL, NULL),
(57, 'investor_and_amount', 'admin', 'dashboard', NULL, NULL),
(58, 'credit_this_month', 'admin', 'dashboard', NULL, NULL),
(59, 'debit_this_month', 'admin', 'dashboard', NULL, NULL),
(60, 'credit_total', 'admin', 'dashboard', NULL, NULL),
(61, 'debit_total', 'admin', 'dashboard', NULL, NULL),
(62, 'company_assets', 'admin', 'dashboard', NULL, NULL),
(63, 'share_value', 'admin', 'dashboard', NULL, NULL),
(64, 'member_create', 'admin', 'member', NULL, NULL),
(65, 'member_edit', 'admin', 'member', NULL, NULL),
(66, 'member_manage', 'admin', 'member', NULL, NULL),
(67, 'project_and_cost', 'admin', 'dashboard', '2021-06-22 18:00:00', NULL),
(68, 'member_dashboard_show', 'admin', 'dashboard', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `manager_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `manager_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `present_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permanent_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_nid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_nid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_present_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_permanent_address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `proposed_budget` int(11) NOT NULL,
  `total_cost` int(11) NOT NULL,
  `emabaded_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comments` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manager_image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `aggreement_details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `slug`, `place`, `project_type`, `manager_name`, `manager_phone`, `present_address`, `permanent_address`, `father_name`, `mother_name`, `nid`, `father_nid`, `mother_nid`, `father_phone`, `mother_phone`, `parent_present_address`, `parent_permanent_address`, `proposed_budget`, `total_cost`, `emabaded_url`, `description`, `comments`, `manager_image`, `agreement_image`, `aggreement_details`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Abdullah', '-dhaka', 'dhaka', 'implemented project', 'Shibbir Ahmad', '', 'Chhatak', 'Mirpur', 'f of test', 'm of test', 'images/manager_nid/3i34zc4VN2JQ4YNlkq0L5CwlnbqjeEYAUDX0wcHy.png', 'images/manager_parent_nid/sSBruGNq46EejphXMfQwUXFzY7LCb8Bfz1I64maJ.png', 'images/manager_parent_nid/kVrxS88SxF7CcxdIwplZrfDQEIPUg06uN8RQkclK.png', '01635529841', '01635529841', 'lakshmipur', '111', 0, 0, 'youtube.com', 'write project description', 'write comments about this project', 'images/manager_image/0cdb1vKp7CN5nucTGMrNktN3QMo5fgSEpw7Qszno.jpg', 'images/project_aggreement/ZvPEJNw36xAunCqGXEjz3V0I7dax7FCPLTPhoK7e.jpg', 'write details here ...', 1, '2021-06-23 09:23:08', '2021-06-28 05:47:25');

-- --------------------------------------------------------

--
-- Table structure for table `project_costs`
--

CREATE TABLE `project_costs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` date NOT NULL,
  `paid_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_costs`
--

INSERT INTO `project_costs` (`id`, `project_id`, `admin_id`, `amount`, `date`, `paid_by`, `comment`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1000, '2021-06-23', 'Cash', NULL, '2021-06-23 09:25:24', '2021-06-23 09:25:24');

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_images`
--

INSERT INTO `project_images` (`id`, `project_id`, `image`, `created_at`, `updated_at`) VALUES
(2, 1, 'images/project_images/PNeO6GOUzjOzVg2U9Y26kSeIDbqq8f6hgQqbNMIE.jpg', '2021-06-21 14:04:14', '2021-06-21 14:04:14'),
(3, 1, 'images/project_images/YlcRxV6LLvNHplRK1EE4u6KPQlxzMHEdoqmKD042.png', '2021-06-23 09:23:08', '2021-06-23 09:23:08');

-- --------------------------------------------------------

--
-- Table structure for table `project_profits`
--

CREATE TABLE `project_profits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` date NOT NULL,
  `credit_in` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_profits`
--

INSERT INTO `project_profits` (`id`, `project_id`, `admin_id`, `amount`, `date`, `credit_in`, `comment`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1000, '2021-06-23', 'Cash', NULL, '2021-06-23 09:26:00', '2021-06-23 09:26:00');

-- --------------------------------------------------------

--
-- Table structure for table `prop_up_banner`
--

CREATE TABLE `prop_up_banner` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prop_up_banner`
--

INSERT INTO `prop_up_banner` (`id`, `url`, `banner`, `status`, `created_at`, `updated_at`) VALUES
(1, '1082', 'images/buy_one_get_one/L9XP4LjBqb2R6Pby2SpWFVK80KFamHtk8F4lexP6.jpg', 1, NULL, '2021-01-28 10:19:45');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'assalamu alaikum', 'admin', '2021-06-21 09:56:16', '2021-06-21 09:56:16');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `salary_per_months`
--

CREATE TABLE `salary_per_months` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `amount` double(8,2) NOT NULL,
  `month` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `image`, `url`, `status`, `created_at`, `updated_at`) VALUES
(26, 'images/slider/NR36GzdBEsciDBis4XNYijFVb4Rtk3fSaryiS2aU.jpg', 'https://bondhonsociety.com', 1, '2020-11-11 11:43:31', '2021-06-21 08:13:21'),
(27, 'images/slider/8sCdc0HYRn7bmGW4td1RFGXfvNZHxdYeOFcNsCX9.jpg', '#test', 1, '2021-05-29 13:06:24', '2021-06-21 08:11:20'),
(28, 'images/slider/pf43KZ37VztzIAaoDgto6pHzXBTr4dX6N20nBTjd.jpg', '#', 1, '2021-05-29 13:10:43', '2021-06-21 08:11:12');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_and_contacts`
--
ALTER TABLE `about_and_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `account_purposes`
--
ALTER TABLE `account_purposes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_accounts`
--
ALTER TABLE `admin_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_profits`
--
ALTER TABLE `admin_profits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aggreements`
--
ALTER TABLE `aggreements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill_paid_statements`
--
ALTER TABLE `bill_paid_statements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill_per_months`
--
ALTER TABLE `bill_per_months`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill_statements`
--
ALTER TABLE `bill_statements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carriers`
--
ALTER TABLE `carriers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `credits`
--
ALTER TABLE `credits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `credit_dues`
--
ALTER TABLE `credit_dues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `debits`
--
ALTER TABLE `debits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_salaries`
--
ALTER TABLE `employee_salaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fond_transfers`
--
ALTER TABLE `fond_transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_settings`
--
ALTER TABLE `footer_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `found_transfers`
--
ALTER TABLE `found_transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investments`
--
ALTER TABLE `investments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investment_returns`
--
ALTER TABLE `investment_returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investors`
--
ALTER TABLE `investors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investor_profit_paids`
--
ALTER TABLE `investor_profit_paids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_applies`
--
ALTER TABLE `job_applies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `otp_verifications`
--
ALTER TABLE `otp_verifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_costs`
--
ALTER TABLE `project_costs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_profits`
--
ALTER TABLE `project_profits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prop_up_banner`
--
ALTER TABLE `prop_up_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `salary_per_months`
--
ALTER TABLE `salary_per_months`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_and_contacts`
--
ALTER TABLE `about_and_contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `account_purposes`
--
ALTER TABLE `account_purposes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `admin_accounts`
--
ALTER TABLE `admin_accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admin_profits`
--
ALTER TABLE `admin_profits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `aggreements`
--
ALTER TABLE `aggreements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bill_paid_statements`
--
ALTER TABLE `bill_paid_statements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bill_per_months`
--
ALTER TABLE `bill_per_months`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bill_statements`
--
ALTER TABLE `bill_statements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `carriers`
--
ALTER TABLE `carriers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `credits`
--
ALTER TABLE `credits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `credit_dues`
--
ALTER TABLE `credit_dues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `debits`
--
ALTER TABLE `debits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee_salaries`
--
ALTER TABLE `employee_salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fond_transfers`
--
ALTER TABLE `fond_transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `footer_settings`
--
ALTER TABLE `footer_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `found_transfers`
--
ALTER TABLE `found_transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `investments`
--
ALTER TABLE `investments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `investment_returns`
--
ALTER TABLE `investment_returns`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `investors`
--
ALTER TABLE `investors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `investor_profit_paids`
--
ALTER TABLE `investor_profit_paids`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_applies`
--
ALTER TABLE `job_applies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `otp_verifications`
--
ALTER TABLE `otp_verifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_costs`
--
ALTER TABLE `project_costs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project_profits`
--
ALTER TABLE `project_profits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prop_up_banner`
--
ALTER TABLE `prop_up_banner`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `salary_per_months`
--
ALTER TABLE `salary_per_months`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
