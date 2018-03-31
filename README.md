Milliseconds to Timecode
=========

A small library to change millisecond to hh:mm:ss:ff time code

## Installation

  `npm install ms-to-timecode`

## Usage

    var msToTimecode = require('ms-to-timecode');

    var timecodeString = msToTimecode(90000, 30);
  
  
  Output should be `00:01:30:00`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.