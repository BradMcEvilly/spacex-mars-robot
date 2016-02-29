/**
 * Created by bradmcevilly on 2/22/16.
 */

function RFactory(bounds) {
    // always initialize all instance properties
    this.quadrant = bounds;
}

RFactory.prototype.createRobot = function (defaults) {

    var Body = require('./core/Body');
    var body;
    if(typeof defaults.vector !== undefined)
        body = new Body(defaults.vector);
    else
        body = new Body();

    body.keyName = 'robot';

    // Trigonometric arithmetic is overkill and will tax performance - which is
    // not required given our assumptions. Otherwise can use rotate with angle, radians, etc
    body.simulateRotation = function (direction) {

    };

    // moves robot body one coordinate in current direction -> body.vector.directionIndex
    body.simulateStep = function () {

    };

    // converts instruction string into executable commands array
    body.parseInstruction = function(instruction){

    };

    body.executeCommand = function(command){

        console.log('executeCommand command = ' + command);

    };


    return body;
};

// export the class
module.exports = RFactory;
