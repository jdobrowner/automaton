function setA(a = 0, b = 0, c = 0, d = 0) {
	if ((b + c) > 2) return 0;
		else {
			let z = (a + d) % 4;
			return z;	
		}
}

function setB(a = 0, b = 0, c = 0, d = 0) {
	// if ((a === 1) && (c < 2)) {
	// 	return 3;
	// }
	if ((d <= 1) && (c > 2)) {
		return 3;
	}
	if ((b < 3) && (a > 1)) {
		return 3;
	}
	else return Math.floor(Math.random() * 2);
}

function setC(a = 0, b = 0, c = 0, d = 0) {
	if ((b + c) > 2) return 0;
		else {
			let z = (a + d);
			if (z > 3) return 3;
			else return z;	
		}
}

// looks good as triforce, intresting colorful stampede
function setD(a = 0, b = 0, c = 0, d = 0) {
	if ((a + b - c) > 2) return 3;
	else {
		let z = (b + c) % 3;
		return z;
	}
}


module.exports = { setA, setB, setC, setD };