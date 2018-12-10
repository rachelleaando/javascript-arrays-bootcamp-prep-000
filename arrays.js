var chocolateBars = [
  'sneakers', 'hundred grand', 'kitkat', 'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
  }
  
  // Is it possible to put only "array" or "element" to the parameter???
  function addElementToEndOfArray(array, element) {
    return [array, ...element]
  }
  