<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">

        <link rel="stylesheet" href="/css/app.css"/>
        <link rel="stylesheet" href="/css/all.css"/>

        <title>Laravel 5.3 with Vue</title>

    </head>
    <body>
        <navbar app-name="{!! config('app.name') !!}"></navbar>
        <carousel></carousel>
        <app></app>

        <script src="/js/app.js"></script>
    </body>
</html>
