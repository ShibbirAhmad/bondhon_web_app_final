<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Bondhon Society.This is a group of company </title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="bondhon society" name="keywords">
        <meta content="bondhon society" name="description">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title> @yield('title')   </title>

        @include('frontend.partials.css')

    </head>

<body>
        @yield('content')
        @include('frontend.partials.js')

</body>

</html>
