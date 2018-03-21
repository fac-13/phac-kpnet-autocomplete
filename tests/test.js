var test = require('tape');
var logicFunctions = require('../src/logic.js');
var testJson = require('../src/dogbreeds.json');

test('Testing tape is working', function(t){
    t.equal(1,1, 'Tape is working');
    t.end();
});

test('json is the correct data type', function(t){
    t.equal(typeof testJson, 'object', 'Test json is json');
    t.end();
});

test('Test searchJson logic function', function(t){
    t.deepEqual(logicFunctions.searchJson('doberman',testJson), {'doberman': []}, 'Test doberman and empty array is returned');
    t.deepEqual(Object.keys(logicFunctions.searchJson('a',testJson)).length, 5, 'Test dogs beginning with a and empty array is returned');
    t.end();
});