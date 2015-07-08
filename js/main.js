/**
 * Created by Hunter on 3/9/2015.
 */

require.config(
    {
        /*
         * Relative path other part can use
         */
        baseUrl: './js', // if there is not baseUrl, it will be the dir where require.js is

        /*
         * paths defines
         *  module -> relative path to baseUrl
         */
        paths: {
            jquery: 'vendor/jquery-1.11.1',
            underscore: 'vendor/underscore'
        },

        /**
         * Some of the other module,
         *   - doesn't follow require js
         *   - jQuery plugin will also follow this way
         * - For my Own new class, use this way is good enough.
         * - But I must resolve the issue of dependencies of the plugins.
         */
        shim: {
            underscore: {
                exports: '_'
            }
        }
    }
);

require(
    ['jquery', // defined by path.
        'dog', // not defined by path, relative to baseUrl.
        'underscore'
    ],
    function($, dog, _) {
        $(function(){
            console.info("Every thing is ready.");

            dog.animal.sound();
            dog.cat.sound();
            dog.sound();

            console.info(_.map([1, 2, 3], function(item, i){
                return item * item;
            }));
        });
    }
);

/*
animal.js
- define(object)
cat.js
- define(function return object)
dog.js
- define([dependent module list], function return object)
 */

/*
You can debug with following call in console
 require('dog').sound();
 */