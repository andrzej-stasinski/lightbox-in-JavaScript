console.log('lightbox sam1');

(function(){

	var szerImg = 200;
	var wysoImg = 200;

	function ustawOkno() {
		// Okno małe div - ustaw na środku
		var okienko = document.querySelector('#okno');
		console.log('offsetParent');
		console.log(okienko.offsetParent);
		var szerokosc = (window.innerWidth  - szerImg)/2;
		var wysokosc  = (window.innerHeight - wysoImg)/2;
		okienko.style.width   = szerImg+'px';
		okienko.style.height  = wysoImg+'px';
		okienko.style.left = szerokosc + 'px';
		okienko.style.top  = wysokosc  + 'px';

	}

	function duzyDIV(img) {
		console.log('duzyDIV' + img);

		// DUŻY DIV
		var div = document.createElement('div');
		div.id = 'div';
		div.style.cursor = 'pointer';
		div.style.animation = 'animacja 1s linear';
		div.onclick = function() {
			div.style.animation = 'animacja2 1s linear';
			setTimeout(function() {
				console.log(div.parentNode);
				div.parentNode.removeChild(div);
				document.body.removeChild(document.body.lastChild);				
			}, 900);

		}
		document.body.appendChild(div);

		// Okno małe div do DUŻEGO DIV
		var okno =document.createElement('div');
		okno.id = 'okno';
		okno.style.cursor = 'default';
		okno.style.border = '1px solid blue';
		okno.style.backgroundColor = '#fff';
		okno.style.padding = '5px';
		okno.textContent = img.alt;
		setTimeout(function() {
			document.body.appendChild(okno);
			// img do okna div co ma być na środku
			var fotka = document.createElement('img');
			fotka.src = img.src;
			fotka.style.width   = szerImg+'px';
			okno.appendChild(fotka);

			ustawOkno();			
		}, 1000);
	}

	function lightBox() {
		console.log('lightBox');

		var img = document.querySelectorAll('#fotki img');

		img = Array.prototype.slice.call(img, 0);
		img.forEach(function(im, i){
			console.log(im);
			im.onclick = function() {
			duzyDIV(this);	
			}		
		});
	}
	window.addEventListener('load', lightBox, false);
	window.onresize = ustawOkno;	
})();