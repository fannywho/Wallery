 /*smooth scroll */

  smoothScroll.init();

/* menu burger et recherche */

var burgerClique = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var rechercheClique = document.querySelector('.search');
var recherche = document.querySelector('.recherche');
var annulation = document.querySelector('.annuler');
var boutonAnnulation = document.querySelector('.boutonAnnule');

burgerClique.addEventListener('click', function() {
		menu.classList.toggle('cache');

});

annulation.addEventListener('click', function() {
		menu.classList.toggle('cache');

});


rechercheClique.addEventListener('click', function() {		
		recherche.classList.toggle('cache');
		
});


boutonAnnulation.addEventListener('click', function() {
		recherche.classList.toggle('cache');

});

/*navigation artistes */
var liHover = document.querySelector('.artistes-nav');
var navHover = document.querySelector('.hover-artistes');
var categories = document.querySelectorAll('.hover-artistes li');
var navCollage = document.querySelector('.collages-images');
var navPeinture = document.querySelector('.peintures-images');
var navGraffiti = document.querySelector('.graffiti-images');
var navMarqueur = document.querySelector('.marqueur-images');

liHover.addEventListener('mouseover', function() {
	navHover.classList.toggle('cache');

	for (var i = 0; i < categories.length; i++) {
		categories[0].addEventListener('mouseover', function() {
			navPeinture.classList.remove('cache');
			navCollage.classList.add('cache');
			navGraffiti.classList.add('cache');
			navMarqueur.classList.add('cache');
		});

		categories[1].addEventListener('mouseover', function() {
			navPeinture.classList.add('cache');
			navCollage.classList.remove('cache');
			navGraffiti.classList.add('cache');
			navMarqueur.classList.add('cache');
		});

		categories[2].addEventListener('mouseover', function() {
			navPeinture.classList.add('cache');
			navCollage.classList.add('cache');
			navGraffiti.classList.remove('cache');
			navMarqueur.classList.add('cache');

		});
		
		categories[3].addEventListener('mouseover', function() {
			navPeinture.classList.add('cache');
			navCollage.classList.add('cache');
			navGraffiti.classList.add('cache');
			navMarqueur.classList.remove('cache');
		});
	}
});


/*page artiste */

var lis = document.querySelectorAll('.filtres li');
var classes = document.querySelectorAll('.artistes .col-33');

for (var i = 0; i < lis.length; i++) {

	lis[0].addEventListener('click', function() {
			for (var i = 0; i < classes.length; i++) {
			classes[i].classList.remove('cache');
			}
	});
	 	
	lis[1].addEventListener('click', function() {
			for (var i = 0; i < classes.length; i++) {
				if (classes[i].classList.contains('collage')) {
					classes[i].classList.add('cache');	
				}
				else if (classes[i].classList.contains('graffiti')) {
					classes[i].classList.add('cache');
				}
				else if (classes[i].classList.contains('marqueur')) {
					classes[i].classList.add('cache');
				}
				else if (classes[i].classList.contains('peinture')) {
					classes[i].classList.remove('cache');
				}
			}
	});

	lis[2].addEventListener('click', function() {
			for (var i = 0; i < classes.length; i++) {
				if (classes[i].classList.contains('peinture')) {
					classes[i].classList.add('cache');	
				}
				else if (classes[i].classList.contains('graffiti')) {
					classes[i].classList.add('cache');
				}

				else if (classes[i].classList.contains('marqueur')) {
					classes[i].classList.add('cache');
				}

				else if (classes[i].classList.contains('collage')) {
					classes[i].classList.remove('cache');
				}
			}
	});

	lis[3].addEventListener('click', function() {
			for (var i = 0; i < classes.length; i++) {
				if (classes[i].classList.contains('peinture')) {
					classes[i].classList.add('cache');	
				}
				else if (classes[i].classList.contains('collage')) {
					classes[i].classList.add('cache');
				}

				else if (classes[i].classList.contains('marqueur')) {
					classes[i].classList.add('cache');
				}
				else if (classes[i].classList.contains('graffiti')) {
					classes[i].classList.remove('cache');
				}

			}
	});

	lis[4].addEventListener('click', function() {
			for (var i = 0; i < classes.length; i++) {
				if (classes[i].classList.contains('peinture')) {
					classes[i].classList.add('cache');	
				}
				else if (classes[i].classList.contains('collage')) {
					classes[i].classList.add('cache');
				}

				else if (classes[i].classList.contains('graffiti')) {
					classes[i].classList.add('cache');
				}
				else if (classes[i].classList.contains('marqueur')) {
					classes[i].classList.remove('cache');
				}
			}
	});
}

/*page détail */

var plus = document.querySelector('.plus');
var moins = document.querySelector('.moins');
var paragraphe = document.querySelector('.paragraphe');
var border = document.querySelector('.border');
var icon = document.querySelector('.icon');

plus.addEventListener('click', function() {
	paragraphe.style.display = 'block';
	paragraphe.style.borderBottom = '1px solid #000';
	plus.style.display = 'none';
	moins.style.display = 'block';
	border.style.border = '0';
	icon.style.top = '97.5%';

});

moins.addEventListener('click', function() {
	paragraphe.style.display = 'none';
	border.style.borderBottom = '1px solid #000';
	plus.style.display = 'block';	
	moins.style.display = 'none';
	icon.style.top = '88%';

});



