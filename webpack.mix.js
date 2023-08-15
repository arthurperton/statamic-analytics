const mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    // .css('resources/css/app.css', 'dist/css')
    .js('resources/js/app.js', 'dist/js')
    //.vue({ version: 2 });
