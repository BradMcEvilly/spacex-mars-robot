/**
 * Created by bradmcevilly on 2/22/16.
 */


    /**
     * Body
     * @param vector
     * provide initial coordinates & direction
     * @constructor
     * sets initial
     */
    function Body(vector) {
        if(typeof vector !== 'undefined')
            this.vector = vector;
        else
            this.vector = null;
    }
    Body.prototype.vector = {
        x:0,
        y:0,
        directionIndex:0
    };
    Body.prototype.keyName = 'body';

    module.exports = Body;