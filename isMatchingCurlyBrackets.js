function isMatchingBrackets(str) {

	// length 0
	if (str.length == 0) {
		return true;
	} 

	// length 1
	if (str.length == 1) { 
		if (isBracket(str)) {
			return false;
		}
		return true;
	}

	// get rid of anything that is not a bracket
	const regex = /[^\{\}]+/g;
	str = str.replace(regex, "");
	
	// can't have an open bracket before a closing bracket
	let pFirst = str[0];
	if (pFirst == "}") {
		return false;
	}

	// find and exclude bracket-pairs — "{}"
	let i = 0;
	while (pFirst == "{") {
		// move pointer until bracket-pair is found
		pFirst = str[++i];
	}
	// 1) exclude bracket-pair,
	// 2) concat remaining right into remaining left, 
	// 3) and run recursion
	const remainingLeft  = str.slice(0, i - 1);  // left of opening bracket — "{""
	const remainingRight = str.slice(i + 1);     // right of closing bracket — "}"
	return isMatchingBrackets(remainingLeft + remainingRight);

}

// simple helper function
function isBracket(str) {
	return str == "{" || str == "}"; 
}

module.exports = { isMatchingBrackets: isMatchingBrackets }
