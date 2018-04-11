/**
 * Default = d6
 * Note that [0] element in labelArr should be empty, as there is no 0 roll result 
 */
function Dice(max = 6, labelArr = []) {
	this.max = max;
	this.labelArr = labelArr;

	this.roll = function roll() {
		var score = Math.floor(Math.random() * this.max) + 1;
		return labelArr.length ? labelArr[score] : score;
	};
}

function Setback() {	
	var max = 6;
	var labelArr = ['', 'setback1', 'setback2', 'setback3', 'setback4', 'setback5', 'setback6'];
	var dice = new Dice(max, labelArr);
	return dice;
}
