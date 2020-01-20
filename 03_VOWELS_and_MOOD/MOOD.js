function randomDiap(n,m) {
	return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
	var colors = [ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
	var usedArr = {};

    console.log( 'цветов: ' + colorsCount );
    for ( var i = 1; i <= colorsCount; i++ ) {
    	var n = randomDiap(1,7);
        var color = colors[n];
          
        if ( color in usedArr ) {
        	i--;
            continue;
        }
              
        usedArr[color] = true;
        console.log(color);
    }
}

mood(3);