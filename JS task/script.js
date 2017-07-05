'use strict'

function isArray (arr) {
	if (!arr.length) {
		console.log ("This argument is not an array. Please try again.");	
	}
	else {
		return arr;
	}
}

function sortArray (arr) {
	var temp = new Array;
	for (var i = 0; i < arr.length; i++) {
			temp[i] = arr[i].toString().toLowerCase().split("").sort().join("").trim();		
		}
	return temp;
}

function unique(arr) {
  var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      for (var j = 0; j < result.length; j++) {
        if (result[j] == str) continue nextInput;
      }
      result.push(str);
    }

  return result;
}

function findUniq (arr) {
	var i = 0;
	var uniqueArr = unique (sortArray (isArray (arr)));
	var sampleArr = sortArray (isArray (arr));
	var result;
	while (i < uniqueArr.length) {
		if (sampleArr.indexOf(uniqueArr[i]) != sampleArr.lastIndexOf(uniqueArr[i])) {
			i++;
		}
		else {
			result = sampleArr.indexOf(uniqueArr[i]);
			break;
			}
	}
	return arr[result];
}
