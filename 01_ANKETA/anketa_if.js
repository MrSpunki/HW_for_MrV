do {
	var surnameStr = prompt('Введите ваше фамилию');
	var surname = parseInt(surnameStr);
} while (surnameStr === null || surnameStr.trim() == '' || isFinite(surname));

do {
	var nameStr = prompt('Введите ваше имя');
	var name = parseInt(nameStr);
} while (nameStr === null || nameStr.trim() == '' || isFinite(name));

do {
	var patronymicStr = prompt('Введите ваше отчество');
	var patronymic = parseInt(patronymicStr);
} while (patronymicStr === null || patronymicStr.trim() == '' || isFinite(patronymic));

do {
	var ageStr = prompt('Введите ваш возраст:');
	var age = parseInt(ageStr);
} while (age <= 0  || age > 120 || !isFinite(age));

var ageInDays = age * 365;
var ageAfterFive = age + 5;

var yourSexBool = confirm('Вы мужчина?');

if (yourSexBool) {
	var yourSexStr = 'мужской';
}else {
	yourSexStr = 'женский';
}

var porog = 60;
if (!yourSexBool) {
  porog = 55;
}

var pension = 'нет';
if (age >= porog) {
  pension = 'да';
}

alert('ваше ФИО: ' + surnameStr.trim() + ' ' + nameStr.trim() + ' ' + patronymicStr.trim() + '\n' + 
      'ваш возраст в годах: ' + age + '\n' + 
      'ваш возраст в днях: ' + ageInDays + '\n' + 
      'через 5 лет вам будет: ' + ageAfterFive + '\n' +
      'ваш пол: ' + yourSexStr + '\n' + 
      'вы на пенсии: ' + pension);