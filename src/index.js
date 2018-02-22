/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 	var count=0;
	var k,n,c;
	for(n=0; n<=preferences.length;n++){
		for(k=n+1; k<=preferences.length;k++){
			for(c=k+1; c<=preferences.length;c++){

				if (
					(preferences[n]===k)
					&&(preferences[k]===c)
					&&(preferences[c]===n)) 
					{
						count++;
					}

			}
		}

	}
	return count;
};
