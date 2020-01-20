do {
	var stringUser = prompt('Введите вашу строку (предложение):\n На русском языке, пожалуйста!');
	var stringUserTest = parseInt(stringUser);
} while (stringUser === null || stringUser.trim() == '' || isFinite(stringUserTest));

function sumVowels (string) {
	var sum = 0;
 	var vowelsArr = ["а", "о", "э", "е", "и", "ы", "у", "ё", "ю", "я", "А", "О", "Э", "Е", "И", "Ы", "У", "Ё", "Ю", "Я"];
  
 	for (var i = 0; i < string.length; i++) { 
		for (var j = 0; j < vowelsArr.length; j++) { 
			if (string[i] == vowelsArr[j]) {
				sum++;
			}
		}
	}
	return ("Количество гласных букв в вашей строке: " + sum);
}

console.log(sumVowels(stringUser));