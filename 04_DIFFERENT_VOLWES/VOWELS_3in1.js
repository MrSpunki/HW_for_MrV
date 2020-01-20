function sumVowelsFor (string) {
	var sum = 0;
 	  
 	for (var i = 0; i < string.length; i++) { 
		for (var j = 0; j < vowelsArr.length; j++) { 
			if (string[i] == vowelsArr[j]) {
				sum++;
			}
		}
	}
	return sum;
}

function sumVowelsFilter (string) {
	var arrString = stringUser.split('');
	return arrString.filter(vowelsFind).length;

	function vowelsFind(v,i,a) {
		return vowelsArr.indexOf(v) >= 0;
	}
}

function sumVowelsForEach (string) {
	var arrString = stringUser.split('');
	var sumVowels = 0;
	arrString.forEach(vowelsFind);
	return sumVowels;

	function vowelsFind(v,i,a) {
		return (vowelsArr.indexOf(v) >= 0) ? sumVowels+=1 : sumVowels;
	}
}

function sumVowelsReduce (string) {
	var arrString = stringUser.split('');
	return arrString.reduce(vowelsFind,0);

	function vowelsFind(r,v,i,a) {
		return (vowelsArr.indexOf(v) >= 0) ? r+=1 : r;
	}
}

//логика запроса строки
do {
	var stringUser = prompt('Введите вашу строку (предложение):\n На русском языке, пожалуйста!');
	var stringUserTest = parseInt(stringUser);
} while (stringUser === null || stringUser.trim() == '' || isFinite(stringUserTest));

//вывод в консоль результатов
var vowelsArr = ["а", "о", "э", "е", "и", "ы", "у", "ё", "ю", "я", "А", "О", "Э", "Е", "И", "Ы", "У", "Ё", "Ю", "Я"];

console.log('Количество гласных букв в предложении методом for: ' + sumVowelsFor(stringUser));
console.log('Количество гласных букв в предложении методом filter: ' + sumVowelsFilter(stringUser));
console.log('Количество гласных букв в предложении методом forEach: ' + sumVowelsForEach(stringUser));
console.log('Количество гласных букв в предложении методом reduce: ' + sumVowelsReduce(stringUser));