// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!String.prototype.split) {
  String.prototype.split = function(separator, limit) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it as a regular function.

export function stringSplit(str, separator,  limit) {
  // TODO: Implement the functionality of String.split here
  const splitParts = [];
  // Handle case when separator is not provided
  if (separator === "") {
    for (let i = 0; i < str.length; i++) {
      splitParts.push(str[i]);
    }
    return splitParts;
  }
  if (!separator) return [str];
  // Handle string separator
  const separatorLength = separator.length;
  let startIndex = 0;
  let matchIndex;
  // console.log("outside while start",splitParts);
 // Handle case when limit is not provided or is less than or equal to 0
  while ((matchIndex = str.indexOf(separator, startIndex)) !== -1) {
    // Break if the number of splitParts reaches the limit
    // console.log("inside while start",splitParts)
    if (splitParts.length === limit) break;
    splitParts.push(str.substring(startIndex, matchIndex));
    startIndex = matchIndex + separatorLength;
    // console.log("inside while end",splitParts)
  }
  if (splitParts.length === limit) return splitParts;
  splitParts.push(str.substring(startIndex));
  // console.log("Out side while end",splitParts)
  return splitParts;
}
