var chocolateBars = [
  'sneakers', 'hundred grand', 'kitkat', 'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
  }
  
  function destructiveToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
  }
  
  