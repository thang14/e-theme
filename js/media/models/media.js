'use strict';

/**
 * @name            OnhanhMedia
 * @description     mediaModule
 */
mediaModule.provider('Media', [ 'Model', 'mediaResource',
    function(Model, categoryResource) {
    
        Model.prototype.$upload = function($file, callback) {
            return this.resource.$upload($file, function(res) {
                this.current = res;
            }.bind(this));
        }
        return new Model(mediaResource);
    }
]);
