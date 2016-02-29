/**
 * Created by bradmcevilly on 2/22/16.
 */

// code coverage

;(function () {

  'use strict';

  describe('robotFactory', function () {


    var World,
        world,
        RobotFactory,
        robotFactory,
        elonMuskBot;



    beforeEach(function () {

      World = require('../../core/World');
      world = new World({
        // set world quadrant in constructor
        min: { x: 0,  y: 0  },
        max: { x: 50, y: 25 }
      });
      RobotFactory = require('../../RobotFactory');
      robotFactory = new RobotFactory();

      elonMuskBot = robotFactory.createRobot({
        vector:{
          x: 1,
          y: 2,
          directionIndex:0
        }
      });
    });

    // direction str test
    it('should return N', function () {
      expect(elonMuskBot.getDirectionStr(elonMuskBot.vector.directionIndex)).toBe('N');
    });

    // direction index test (should fail)
    it('should return no when not 0', function () {
      expect(elonMuskBot.vector.directionIndex).toBe(1);
    });

    // direction index test
    it('should return 0', function () {
      expect(elonMuskBot.vector.directionIndex).toBe(0);
    });


    // lost robot tests
    describe('robot lost', function () {

      var spaceBot;
      beforeEach(function () {

        // edge case - robot initialized out of quadrant bounds
        spaceBot = robotFactory.createRobot({
          vector: {
            x: 100,
            y: 200,
            directionIndex: 0
          }
        });
      });

      it('should return 100 201 N LOST', function () {
        expect(spaceBot.processInstruction('f')).toBe('100 201 N LOST');
      });

    });



    describe('robot positioning', function () {

      beforeEach(function () {
        elonMuskBot = robotFactory.createRobot({
          vector:{
            x: 0,
            y: 0,
            directionIndex:0
          }
        });
      });

      it('should return 0 1 N when moving forward', function () {
        expect(elonMuskBot.processInstruction('f')).toBe('0 1 N');
      });

      it('should return 0 0 E when turning right', function () {
        console.log('processInstruction(r) ' + elonMuskBot.processInstruction('r'));
        expect(elonMuskBot.processInstruction('r')).toBe('0 1 E');
      });
    });

    describe('rotation integer for string', function () {
      beforeEach(function () {
        //elonMuskBot = robotFactory.createRobot();
      });

      it('should return 0 1 N when moving forward', function () {
        expect(elonMuskBot.processInstruction('f')).toBe('0 1 N');
      });

      it('should return 0 0 E when turning right', function () {
        expect(elonMuskBot.processInstruction('r')).toBe('0 0 E');
      });
    });

    describe('robot ', function () {
      beforeEach(function () {
        elonMuskBot = robotFactory.createRobot({x: 26, y: 12, directionsIndex: 3});
      });

      it('should return when given lflflflflrlrlrlflflrlrlflrlf', function () {
        expect(elonMuskBot.parseInstructions('lflflflflrlrlrlflflrlrlflrlf')).toBe('26 12 W');
      });
    });
  });


} ());
