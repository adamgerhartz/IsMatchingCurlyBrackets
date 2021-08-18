const programmingTest = require("./isMatchingCurlyBrackets.js");
const assert = require('assert');


describe('Unit Tests — isMatchingBrackets(str) function', () => {
       
       runUnitTest("{}", true);
       runUnitTest("}{", false);
       runUnitTest("{{}", false);
       runUnitTest("", true);
       runUnitTest("{abc...xyz}", true);
       runUnitTest("{{}}{}{{{}{{}}{}}}", true);
       runUnitTest("{{{{{{{{", false);
       runUnitTest("}}}}}}}", false);
       runUnitTest("{asdc{asdcsd}}{asdcasdcadsc}{{{asdcasdc}{{}}.!@#@#@!!@#{}}}", true);
       runUnitTest("this is my unit test", true);

});


function runUnitTest(argument, expected) {
       it(`should return ${expected} when passing — "${argument}" — as an argument`, () => {
              assert.equal(programmingTest.isMatchingBrackets(argument), expected);       
       });
}