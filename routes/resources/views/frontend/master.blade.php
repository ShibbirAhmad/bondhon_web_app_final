<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="/public/frontend/image/favicon.png" rel="icon" />
    <title> Madina Fashion- Exclusive Fashionable Product In Bangladesh</title>
    <meta name="description" content="Responsive and clean html template design for any kind of ecommerce webshop">
    @include('frontend.partials.css')

</head>

<body>
    <div id="app">

        <router-view :key="$route.fullPath"></router-view>
        <vue-progress-bar></vue-progress-bar>


    </div>

    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>

    @include('frontend.partials.js')

</body>

</html>
