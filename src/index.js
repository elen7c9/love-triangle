/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  var count = 0;
  var a, b, c;

  for (i = 1; i <= preferences.length; i++) {
    a = preferences[i];
    if (a !== 0 && a !== i + 1) {
      b = preferences[a - 1];
      if (b !== 0) {
        c = preferences[b - 1];
        if (i + 1 == c) {
          count++;
          preferences[i] = 0;
          preferences[a - 1] = 0;
          preferences[c - 1] = 0;
        }
      }
    }
  }
	return count;
};
