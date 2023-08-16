const mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    // .css('resources/css/app.css', 'dist/css')
    .js('resources/js/cp/main.js', 'dist/js/cp.js')
    .js('resources/js/web/main.js', 'dist/js/web.js')
    .vue({ version: 2 });
