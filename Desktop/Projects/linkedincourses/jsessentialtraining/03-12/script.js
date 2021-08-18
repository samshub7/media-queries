/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

const pinkBag = new Backpack (
    'pinkBag',
    343,
    'pink',
    10,
    32,
    31,
    true
    );

console.log('The best kind of backpack is a', pinkBag.name);
console.log('This backpack has so many pockets! It has', pinkBag.numPockets, '!!');

   
 