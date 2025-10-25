// Define inlets and outlets.
inlets = 2;
outlets = 2;

// Variable to store the list of numbers for single triggers.
var numbersToCheck = [];
// Object to track which numbers have already triggered the first outlet.
var bangedNumbers = {};

// Variable to store the list of numbers for multi-triggers.
var multiTriggerNumbers = [];

// Helper function to check if a value exists in an array.
function arrayContains(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}

// The first inlet handles incoming integers.
function msg_int(a) {
    // Single-trigger logic for outlet 0.
    // Checks if the number is in numbersToCheck and hasn't been triggered yet.
    if (arrayContains(numbersToCheck, a) && !bangedNumbers[a]) {
        outlet(0, "bang");
        bangedNumbers[a] = true;
    }

    // Multi-trigger logic for outlet 1.
    // Checks if the number is in the multiTriggerNumbers list.
    if (arrayContains(multiTriggerNumbers, a)) {
        outlet(1, "bang");
    }
}

// The second inlet handles incoming lists.
function list() {
    var incomingArgs = arrayfromargs(arguments);
    numbersToCheck = incomingArgs.map(function(arg) {
        return parseInt(arg);
    });
    multiTriggerNumbers = incomingArgs.map(function(arg) {
        return parseInt(arg);
    });
}

// A custom function to reset the single-trigger state.
function reset() {
    bangedNumbers = {};
}