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
}
