// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (input){
        if(input > base){ //returning a function to test an value to be input vs a base value
            return true; //if the value that was input is higher return true
        } else {
            return false; //if not return false
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (input){
        if(input < base){ //returning a function to test an value to be input vs a base value
            return true; //if the value that was input is lower return true
        } else {
            return false; //if not return false
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return a function that determines if a string starts with a character
     return function (string){
        if(startsWith.toLowerCase() === string[0].toLowerCase()){ //compares first character of argument against first character of value
            return true; //returns true if the string starts with the correct character
        } else {
            return false; //if not returns false
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
      return function (string) {
        if(endsWith.toLowerCase() === string.charAt(string.length -1).toLowerCase()){ //compares last character of argument against last character of value
            return true; //returns true if the string ends with the correct character
        } else {
            return false; //if not returns false
        }
      };   
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
var modified = [];
    for (var i = 0; i < strings.length; i++) {
        modified.push(modify(strings[i]));
}   //modifies an input string base ob modify action, pushes it to a new created array then returns it as a whole
return modified;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    var flag = true;
    //created a variable to equal true than ran code to see if the strings will fail test
    for(var i = 0; i <= strings.length - 1; i++){
        if(!test(strings[i])){
            flag = false;
        }
    }
    return flag //if the strings that have been inputted do not fail return true
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}