-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2021 at 05:55 AM
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
-- Database: `madina_fashion_spa_final`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_shipment_and_return_policies`
--

CREATE TABLE `order_shipment_and_return_policies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipment_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `return_policy` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_shipment_and_return_policies`
--

INSERT INTO `order_shipment_and_return_policies` (`id`, `order_info`, `shipment_info`, `return_policy`, `created_at`, `updated_at`) VALUES
(1, '<p>১। আপনি যদি আমাদের নতুন ক্রেতা হয়ে থাকেন তাহলে যেকোন পণ্য কিনতে এখনই সাইন-আপ/রেজিস্ট্রেশন করুন।</p><p>২। আপনার পছন্দের পন্যটি কেনার জন্য পণ্যের ছবির উপরে ক্লিক করুন এবং পরবর্তী পাতায় পণ্যের বিস্তারিত দেখে ছবির পাশে Order Now (এখনি অর্ডার করুন) এই বাটনে ক্লিক করুন।</p><p>৩। আপনি যদি একাধিক পন্য কিনতে চান তাহলে ‘কার্ট এ যোগ করুন’ এই বাটনে ক্লিক করে আপনার নির্বাচিত সকল পন্য একবারে অর্ডার করুন।</p><p>৪। যদি ইতোমধ্যেই mohasagor.com এ আপনার একাউন্ট থেকে থাকে,তাহলে আপনার ইউজার নেম ও পাসওয়ার্ড দিয়ে সাইন ইন / লগইন করুন অথবা নতুন ক্রেতা হিসেবে সাইন-আপ/রেজিস্ট্রেশন করে আপনার নতুন একাউন্টের জন্য ইউজার নেম ও পাসওয়ার্ড তৈরি করুন।</p><p>৫। ডেলিভারী ঠিকানায় আপনি যেখানে ডেলিভারী নিতে ইচ্ছুক সেখানকার বিস্তারিত ঠিকানাসহ শহরটি সেলেক্ট করুন। আপনার প্রদানকৃত সঠিক তথ্য আপনার পন্যের ডেলিভারী প্রক্রিয়াকে দ্রততর করবে।</p><p>৬। এরপরে আপনি পরবর্তী ধাপে যেতে ‘কার্ট তথ্য সংরক্ষণ’ বাটনে ক্লিক করুন।</p><p>৭। অর্ডার সফল হলে আপনার ই-মেইলে বুকিং কোড সহ একটি মেইল যাবে ।</p><p>৮। অর্ডার সাবমিটের পর 12 ঘন্টার মধ্যে আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করে পণ্য ডেলিভারী প্রক্রিয়া শুরু করবে।</p><p>৯। সাধারণত ঢাকার মধ্যে 24 ঘন্টা (প্রায়) এবং ঢাকার বাহিরে যে কোন জেলায় 72 ঘন্টার (প্রায়) মধ্যে আপনার পণ্য হাতে পাবেন।</p><p>১০। অর্ডার সংক্রান্ত যে কোন তথ্য বা সরাসরি অর্ডার দিতে ফোন করুন 09-636-203040 বা 01627-444999 (সকাল ৯টা থেকে রাত ১১ টার মধ্যে)।</p>', '<p>How will the delivery be done? We process all deliveries through:</p><p>• Reputed couriers</p><p>• Our in house delivery team</p><p>How much are the delivery charges?</p><p>With in Dhaka city, delivery charge is BDT 45 and outside Dhaka city it is BDT 90. Note: If there is any modification in delivery charge for a particular item, it will be mentioned in Product details. What is the estimated delivery time? If your shipping address is within Dhaka city, products will be delivered by next business day or within 24 hours. If it is outside Dhaka then it will take 2-3 business days.</p><p><strong>Note:</strong></p><p>• Any order placed after 6 pm will be considered as order of next business day, not as same day.</p><p>• Business Day: Saturday to Thursday</p><p>Does eShoppingBD.com deliver internationally?</p><p>mohasagor.com doesn\'t deliver items internationally. You are more than welcome to make your purchases on our site from anywhere in the world, but you\'ll have to ensure the Delivery Address is within Bangladesh.</p><p><br>&nbsp;</p>', '<p>পণ্য গ্রহনের পরে আপনি পণ্যের যে কোন সমস্যায় (যেমন : পণ্য ভাঙ্গা , ছেঁড়া, পণ্য কাজ না করা, ছবির সাথে পণ্যের মিল না থাকা ইত্যাদি) ক্ষেত্রে আপনি পরিবর্তিত পণ্য গ্রহণ করতে পারবেন। সেক্ষেত্রে পণ্য গ্রহনের পর সর্বোচ্চ ৪৮ ঘণ্টার মধ্যে আপনি complain@mohasagor.com এ ই মেইল করতে হবে অথবা আমাদের হটলাইন নাম্বার 09-636-203040 এ আমাদের অবহিত করতে হবে। উল্লেখ্য যে, আপনার মনের পরিবর্তনের ফলে কোন পণ্য রিপ্লেস করলে হলে কুরিয়ার খরচ আপনাকে বহন করতে হবে এবং mohasagor.com কর্তৃক কোন পণ্যে সমস্যা থাকলে সেটা mohasagor.com বহন করবে। আপনার - প্রশ্ন - মতামত – অভিযোগ আমাদের জানান- ফোন: 01627-444999, ই-মেইল: complain@mohasagor.com</p>', '2021-01-17 10:52:27', '2021-01-17 10:52:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order_shipment_and_return_policies`
--
ALTER TABLE `order_shipment_and_return_policies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order_shipment_and_return_policies`
--
ALTER TABLE `order_shipment_and_return_policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
