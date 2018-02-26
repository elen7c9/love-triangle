/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 	var count=0;
	var a,b,c;
	for(a=1; a<=preferences.length;a++){
		for(b=a; b<=preferences.length;b++){
			for(c=b; c<=preferences.length;c++){

				if (
					(preferences[a]===b)
					&&(preferences[b]===c)
					&&(preferences[c]===a)) 
					{
						count++;
					}

			}
		}

	}
	return count;
};
