
var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]
  

//***************************************************************
  
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}


//***************************************************************

function descructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}


//***************************************************************
function addElementToEndOfArray (array, element) {
  array.push(element)
  return array
}


//***************************************************************
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


//***************************************************************
function addElementToEndOfArray(array, element)  {
  return [...array, element];
}


//***************************************************************
function accessElementInArray(array, index) {
  return array[index];
}


//***************************************************************
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}


//***************************************************************
function removeElementFromBeginningOfArray (array) {
  array.slice();
  return array;
}


//***************************************************************
function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}


//***************************************************************
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}


//***************************************************************
function removeElementFromEndOfArray (array) {
  array.pop();
  return array;
}


//***************************************************************
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1);
}
=======
>>>>>>> 30c8f5f99437133e35f9d945486b986c8cd601c6
