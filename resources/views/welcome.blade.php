<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Laravel</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        @vite('resources/js/app.js')
        <div id="app"></div>
    </body>
</html>
