// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Array.prototype.at) {
  Array.prototype.at = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it as a regular function.

export function arrayAt(arr, index) {
  // TODO: Implement the functionality of Array.at

  // check if the index is out of bounds of the array
  if (index < 0 && index >= arr.length) return undefined;

  // If the index is negative, calculate the positive index and return the corresponding element
  if (index < 0 && index >= -arr.length) return arr[arr.length + index]

  
  return arr[index];
}
