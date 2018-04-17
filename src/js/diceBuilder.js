export const diceBuilder = {
	setback: Setback,
	boost: Boost,
	ab: Ab,
	dif: Dif,
	prof: Prof,
	ch: Ch,
	force: Force,
	d10: D10
};

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

/**
 * note that the Triumph symbol also genereates separate success to the pool
 * in the form of: 'success,triumph' result
 * and Despair also generates failure as well
 */

function Setback() {
	var max = 6;
	var labelArr = ['',
		'blank',
		'blank',
		'failure',
		'failure',
		'threat',
		'threat'
	];
	var dice = new Dice(max, labelArr);
	return dice;
}

function Boost() {
	var max = 6;
	var labelArr = ['',
		'blank',
		'blank',
		'success',
		'success,advantage',
		'advantage,advantage',
		'advantage'
	];
	var dice = new Dice(max, labelArr);
	return dice;
}

function Ab() {
	var max = 8;
	var labelArr = ['',
		'blank',
		'success',
		'success',
		'success,success',
		'advantage',
		'advantage',
		'success,advantage',
		'advantage,advantage'
	];
	var dice = new Dice(max, labelArr);
	return dice;
}

function Dif() {
	var max = 8;
	var labelArr = ['',
		'blank',
		'failure',
		'failure,failure',
		'threat',
		'threat',
		'threat',
		'threat,threat',
		'failure,threat'
	];
	var dice = new Dice(max, labelArr);
	return dice;
}

function Prof() {
	var max = 12;
	var labelArr = ['',
		'blank',
		'success',
		'success',
		'success,success',
		'success,success',
		'advantage',
		'success,advantage',
		'success,advantage',
		'success,advantage',
		'advantage,advantage',
		'advantage,advantage',
		'success,triumph'
	];
	var dice = new Dice(max, labelArr);
	return dice;
}

function Ch() {
	var max = 12;
	var labelArr = ['',
		'blank',
		'failure',
		'failure',
		'failure,failure',
		'failure,failure',
		'threat',
		'threat',
		'failure,threat',
		'failure,threat',
		'threat,threat',
		'threat,threat',
		'failure,despair'
	];
	var dice = new Dice(max, labelArr);
	return dice;
}

function Force() {
	var max = 12;
	var labelArr = ['',
		'blank',
		'blank',
		'blank',
		'blank',
		'blank',
		'dark',
		'dark,dark',
		'light',
		'light',
		'light,light',
		'light,light',
		'light,light'
	];
	var dice = new Dice(max, labelArr);
	return dice;
}

function D10() {
	var max = 10;
	var dice = new Dice(max);
	return dice;
}