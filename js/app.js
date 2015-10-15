'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            Aisel
 * @description     App Kernel
 */

define([
        'angular',
        'jQuery',
    ],
    function(angular) {
        'use strict';

        var app = angular.module('app', [
            'environment'
        ]);
        
        return app;
    });
