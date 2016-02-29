/**
 * Created by bradmcevilly on 2/22/16.
 */
//;(function (_, undefined) {
    // Constructor


    function World(bounds) {
        // always initialize all instance properties
        this.quadrant = bounds;
    }
    World.prototype.quadrant= null;
    // class methods
    World.prototype.bounds = function() {
        return this.quadrant;
    };
    // checks given coordinates against
    World.prototype.checkBounds = function(x, y) {
        return ((x >= this.quadrant.min.x && x <= this.quadrant.max.x) &&
        (y >= this.quadrant.min.y && y <= this.quadrant.max.y));
    };
    World.prototype.lostObjectsHash = [];
// export the class
    module.exports = World;


//} ());