function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }
  
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Additional functionalities
  function clearRepeated(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  function average(arr) {
    return sum(arr) / arr.length;
  }
  
  function reverse(arr) {
    return arr.reverse();
  }
  
  function flatten(arr) {
    return arr.flat();
  }
  
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  function getFirstElement(arr) {
    return arr[0];
  }
  
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  module.exports = {
    sum,
    removeDuplicates,
    clearRepeated,
    findMax,
    findMin,
    average,
    reverse,
    flatten,
    isArrayEmpty,
    getFirstElement,
    getLastElement
  };