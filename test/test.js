'use strict';

var expect = require('chai').expect;
var msToTimecode = require('../index');

describe('#numFormatter', function() {
    it('timecode conversion', function() {
        var result = msToTimecode(90000, 30);
        expect(result).to.equal('00:01:30:00');
    });

    it('frame conversion', function() {
        var result = msToTimecode(100, 10);
        expect(result).to.equal('00:00:00:01');
    });

    it('hour conversion', function() {
        var result = msToTimecode(3600000, 10);
        expect(result).to.equal('01:00:00:00');
    });
});