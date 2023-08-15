const mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    // .css('resources/css/app.css', 'dist/css')
    .js('resources/js/cp.js', 'dist/js')
    .js('resources/js/web.js', 'dist/js')
    //.vue({ version: 2 });
