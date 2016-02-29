;(function () {

  'use strict';

  describe('body', function () {
    var body = require('../../core/Body');
    var elonRobot;
    beforeEach(function () {
      elonRobot = new body({
        x: 0,
        y: 0,
        directionIndex:0
      });
    });
    it('should return no when not 0', function () {
      expect(elonRobot.vector.x).toBe(0);
    });



  });
/*
  describe('robotFactory', function () {
    var robotFactory = require('../../src/robot');

    describe('instruct', function () {
      var dave;

      beforeEach(function () {
        dave = robotFactory();

        spyOn(dave, 'instruct');
        dave.instruct('f');
      });

      it('should have called instruct', function () {
        expect(dave.instruct).toHaveBeenCalled();
      });
    });

    describe('robot with good sensors', function () {
      var optimus;

      describe('robot in default position', function () {
        beforeEach(function () {
          optimus = robotFactory();
        });

        it('should return 0 1 N when moving forward', function () {
          expect(optimus.instruct('f')).toBe('0 1 N');
        });

        it('should return 0 0 E when turning right', function () {
          expect(optimus.instruct('r')).toBe('0 0 E');
        });
      });

      describe('robot in non-default position', function () {
        beforeEach(function () {
          optimus = robotFactory({x: 26, y: 12, heading: 'W'});
        });

        it('should return when given lflflflflrlrlrlflflrlrlflrlf', function () {
          expect(optimus.instruct('lflflflflrlrlrlflflrlrlflrlf'))
            .toBe('26 12 W');
        });
      });
    });

    describe('robot with bad sensors', function () {
      var ultron;

      describe('robot in a default position', function () {
        beforeEach(function () {
          ultron = robotFactory();
        });

        it('should be -1 0 W LOST', function () {
          expect(ultron.instruct('lf')).toBe('-1 0 W LOST');
        });

        it('should be 0 -1 S LOST', function () {
          expect(ultron.instruct('rrf')).toBe('0 -1 S LOST');
        });
      });

      describe('robot in non-defauly position', function () {
        beforeEach(function () {
          ultron = robotFactory({x: 50, y: 25});
        });

        it('should be 50 26 N LOST', function () {
          expect(ultron.instruct('f')).toBe('50 26 N LOST');
        });

        it('should be 51 25 E LOST', function () {
          expect(ultron.instruct('rf')).toBe('51 25 E LOST');
        });
      });

      describe('robot won\'t follow lost robot', function () {
        var c3po, r2d2;

        beforeEach(function () {
          c3po = robotFactory();
          r2d2 = robotFactory();

          c3po.instruct('lf');
        });

        it('shouldn\'t get lost given the same coordinates as lost robot', function () {
          expect(r2d2.instruct('lf')).toBe('0 0 W');
        });
      });
    });

    describe('robots given bad instructions', function () {
      var megaman;

      beforeEach(function () {
        megaman = robotFactory();
      });

      describe('given non string instruction', function () {
        it('should throw a type error', function () {
          expect(function () { megaman.instruct(12345) }).toThrowError(TypeError);
        });
      });

      describe('given incorrect characters in instruction', function () {
        it('should throw an error', function () {
          expect(function () { megaman.instruct('lfrflfrlflrz') })
            .toThrowError('Instructions can only include a combination of L, R and F');
        });
      });

      describe('given instruction length of more than 100 characters', function () {
        var instructions = 'l'.times(100);

        it('should throw and error', function () {
          expect(function () { megaman.instruct(instructions) })
            .toThrowError('Instruction string must be less than 100 characters');
        });
      })
    });

    describe('Red Badger tests', function () {
      var roboBadger;

      it('should be 1 1 E', function () {
        roboBadger = robotFactory({x: 1, y: 1, heading: 'E'});
        expect(roboBadger.instruct('RFRFRFRF')).toBe('1 1 E');
      });

      it('should be 3 3 N LOST', function () {
        roboBadger = robotFactory({x: 3, y: 2, heading: 'N'});
        expect(roboBadger.instruct('FRRFLLFFRRFLL')).toBe('3 3 N LOST');
      });

      it('should be 2 3 S', function () {
        roboBadger = robotFactory({y: 3, heading: 'W'});
        expect(roboBadger.instruct('LLFFFLFLFL')).toBe('2 3 S');
      });
    });
  });
*/
} ());
