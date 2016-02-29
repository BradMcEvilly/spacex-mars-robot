/**
 * Created by bradmcevilly on 2/22/16.
 */

/**
 * RobotFactory
 * NOTE:    We're using a factory because we know commands will change in the future.
 *          Factory is ideal for this as multiple robot objects won't need modification
 *          under this approach. We can modify behavior of multiple robots right here.
 *          Thus, this is optimal.
 *
 * @constructor
 */

function RobotFactory() {
    // always initialize all instance properties
}

RobotFactory.prototype.createRobot = function (defaults) {

    var Body,
        World,
        world,
        Directions,
        directions,
        body,
        v;

    Body = require('./core/Body');
    World = require('./core/World');
    world = new World({
        min: { x: 0,  y: 0  },
        max: { x: 50, y: 25 }
    });
    Directions = require('./models/Directions');
    v = defaults.vector;

    if(typeof v !== 'undefined')
        body = new Body(v);
    else
        body = new Body();

    body.directions = new Directions();
    body.keyName = 'robot';
    body.isLost = !world.checkBounds(body.vector.x, body.vector.y);

    // Simplified arithmetic rotation simulation methods - avoids using expensive trigonometric
    // arithmetic (angle, radians, etc) - overkill for our purposes.

    // simulates clockwise rotation
    body.incrementDirection = function (amt) {
        var curIndex = body.vector.directionIndex;
        if(curIndex==body.directions.length-1)
            body.vector.directionIndex = 0;
        else
            body.vector.directionIndex++;

        return body.vector;
    };

    // simulates counter-clockwise rotation
    body.decrementDirection = function (amt) {
        var newIndex;
        var curIndex = v.directionIndex;
        if(curIndex==0)
            newIndex = body.directions.length-amt;
        else
            newIndex = v.directionIndex-amt;
        return {
            x:body.vector.x,
            y:body.vector.y,
            directionIndex: newIndex
        }
    };

    body.getPositionStr = function(vector){
        var str = '' + vector.x + ' ' + vector.y
                    + ' ' + this.directions[vector.directionIndex];
        return (this.isLost) ? str + ' LOST' : str;
    };

    body.getRotateInt = function (rotateStr) {
        if (rotateStr === 'R')
            return 1;
        else if (rotateStr === 'L')
            return -1;
        return 0;
    };

    // processes command and returns new position vector
    // placeholder for future promise functionality
    body.command = function (instruction) {

    };

    body.parseInstructions = function (instructions) {

        console.log('parseInstructions');
        if ((this.isLost) || (instructions.length > 100))
            return null;

        // Iterate through each command - O(n) linear time complexity
        // NOTE:    For larger instruction sets, may need to separate into event loop
        //          to prevent stack overflow. But for now, we can assume it won't
        //          exceed 100 in length.
        for (var i = 0; i < instructions.length; i++) {
            // process command
            console.log('charAt ' + i + ' = ' + instructions.charAt(i));
            if(!this.isLost)
                this.processInstruction(instructions.charAt(i));
        }

    };

    body.processInstruction = function (instruction) {
        return this[instruction]();
    };

    body.checkLost = function (vector){

    }

    body.getDirectionStr = function(index){
        return this.directions[index];
    }
    // Dynamic Commands

    /**
     * rotates right and returns new vector
     * @returns {{x, y, directionIndex}|*}
     */
    body.r = function () {
        body.vector = this.incrementDirection(1);
        return this.getPositionStr(body.vector);
    };

    /**
     * rotates left and returns new vector
     * @returns {{x, y, directionIndex}|*}
     */
    body.l = function () {
        body.vector = this.decrementDirection(1);
        return body.vector;
    };

    /**
     * moves forward and returns new vector
     * @returns {{x, y, directionIndex}|*}
     */
    body.f = function () {

        // match directions index
        var nextPos;
        var vectorNext;
        var quantChangeMap = [

        ];

        // get next position
        nextPos = this.getNextPosition();
        vectorNext = {
            x:nextPos.x,
            y:nextPos.y,
            directionIndex:body.vector.directionIndex
        };

        // check against lost coords
        var lostVal = world.lostObjectsHash[this.getPositionStr(vectorNext)];

        // set as current position
        if(typeof lostVal === 'undefined')
            body.vector = vectorNext;
        else
            return this.getPositionStr(body.vector);
        // check bounds & report lost if appropriate

        this.isLost = !world.checkBounds(body.vector.x, body.vector.y);

        // put value in hash
        if(this.isLost)
            world.lostObjectsHash[body.getPositionStr(body.vector)]=true;

        // return new vector
        return this.getPositionStr(body.vector);
    };

    body.getNextPosition = function(){
        var directionIndex = body.vector.directionIndex;
        var self = this;

        return this[self.getDirectionStr(directionIndex)]();
    };

    body.setCurrentPosition = function(x, y){

        // check bounds

        // if lost, push to lost arr


    };

    // y = f(x)
    body.N = function () {
        console.log('calling North function');
        return {x:body.vector.x, y:body.vector.y+1};
    };
    body.S = function () {
        console.log('calling South function');
        return {x:body.vector.x, y:body.vector.y-1};
    };
    body.E = function () {
        console.log('calling East function');
        return {x:body.vector.x+1, y:body.vector.y};
    };
    body.W = function () {
        console.log('calling West function');
        return {x:body.vector.x-1, y:body.vector.y};
    };



    return body;
};

// export the class
module.exports = RobotFactory;
