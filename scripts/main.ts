/// <reference path="typings/require.d.ts" />

/// <reference path="./typings/require.d.ts" />
/// <reference path="./typings/jquery.d.ts" />

requirejs.config({
    baseUrl: 'scripts',

    paths: {
        jquery: 'libs/jquery-1.11.2'
    }
});

requirejs(['jquery', 'app']);
