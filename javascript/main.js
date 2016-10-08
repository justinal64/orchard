"use strict";
// Top level function
function Plant() {
    this.height = null;
}

// Inherits from Plant
function Tree() {
    this.tree = null;
}
Tree.prototype = new Plant();

// Inherits from Tree
function IncreaseHeight() {
    this.increaseHeight = null;
}
IncreaseHeight.prototype = new Tree();

// Inherits from Tree
function DecreaseHeight() {
    this.decreaseHeight = null;
}
DecreaseHeight.prototype = new Tree();

function Grow() {
    this.grow = null;
}
Grow.prototype = new Tree();

function Trim() {
    this.trim = null;
}
Trim.prototype = new Tree();


