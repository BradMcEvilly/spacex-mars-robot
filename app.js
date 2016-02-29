/**
 * Created by bradmcevilly on 2/22/16.
 */

/**
 * Architecture Design Overview
 *
 * Architecturally, NodeJS might be optimal here as it's single-threaded (technically
 * multi-threaded beneath the hood) and requirements specify a synchronous solution
 * so we can take advantage of the event loop & call stack.
 *
 * Multi-tier client/server and server/server architecture is proposed as described below:
 *  1. Central command center app is running on a Node.js instance on earth.
 *  2. The Node.js server can communicate with Node.js
 *
 * -------------------------------------------------------------------------
 * Assumptions:
 * -------------------------------------------------------------------------
 * The requirements spec has classic physics-related key words written all
 * over it (velocity, matter, etc) given we're looking in a change in position with
 * direction per unit time. However, an actual 2D or 3D physics layer may
 * be overkill at this point. That being said, I kept it simple and operated under
 * the following assumptions:
 *
 * I. Physics
 *      1. Worst case Time Complexity is acceptable O(n^2) or O(n).
 *      2. Quadrant topography is flat (no need for gravity calculations)
 *      3. Constant matter (robot body attributes are equal for all robots)
 *      4. Acceleration, Velocity, Time, etc are irrelevant (all of this would need to be
 *          considered in the real world - perhaps use promises to await signals from each
 *          robot indicating a rotation or displacement/movement has completed).
 * II. Other
 *      1. Wi-fi Network communication layer is given and readily accessible
 *      2. Standard TCP network communication protocols available (HTTP, HTTPS)
 *      3. Node.js server is running on each robot / machine and can communicate to
 *          with a central service
 * -------------------------------------------------------------------------
 * RC Time Estimate:
 * -------------------------------------------------------------------------
 *
 * There are multiple teams required to be aligned and working in sync effectively
 * to deliver a project of this complexity. Hardware teams, networking engineering
 * team, etc. There are countless contingencies involved.
 *
 * However, assuming the hardware and robots are provided, the software might take between
 * 6 to 12 months of iterative, agile development if only 1 or 2 developers are working on
 * it and have access to test robots for prototyping, debugging, etc. What existing assets
 * can we use to speed development time, and so forth.
 *
 * There are numerous requirements that would need to be gathered before providing an
 * initial feasibility analysis (cost vs. benefit, budget, etc), let alone a solid time
 * frame.
 *
 * */


;(function () {
    'use strict';



    var Directions = require('./models/directions');
        //robot1     = robotFactory({x: 23, y: 14});

    var RobotFactory = require('./RobotFactory');
    var robotFactory = new RobotFactory();

    var elonMuskBot = robotFactory.createRobot({
        vector:{
            x:2,
            y:3,
            directionIndex:0
        }
    });
    console.log(astroBoy.instruct('flrlrrlflflfllrlrrlfllflrlf'));

    var World = require('./core/World');

    var world = new World();
    if(!world.checkBounds())
        elonMuskBot.logLost();


} ());
