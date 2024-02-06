// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it as a regular function.

export function arrayFilter(array, callback) {
  // TODO: Implement the functionality of Array.filter here
  const result = [];
  for (let i = 0; i < array.length; i++) {
    // callback function evaluates some condition based on the current element ` array[i] `, its index, and the original array, and if that condition is satisfied, the callback function returns true.
    if (callback(array[i], i, array)) {
      
      result.push(array[i]);
    }
  }
  return result;
}
