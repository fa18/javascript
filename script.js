var couleur = ['blue','red','green','yelow'];

function rand(min, max, integer) {

    if (!integer) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

let i = 0;
const interId = window.setInterval(function() {
	const buttons = document.getElementsByTagName('button')
	console.log(buttons)
	for (const i in buttons) {
		const b = buttons[i]
		if(b.nodeType === 1){
			b.style.backgroundColor = couleur[rand(0,3,1)];
		}
	}
	if(i>5){
		window.clearInterval(interId)
	}
},0.000001);




