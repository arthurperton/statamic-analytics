const mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    .postCss('resources/css/cp.css', 'dist/css/cp.css', [
        require('tailwindcss'),
    ])
    .js('resources/js/cp/main.js', 'dist/js/cp.js')
    .js('resources/js/web/main.js', 'dist/js/web.js')
    .vue({ version: 2 });
