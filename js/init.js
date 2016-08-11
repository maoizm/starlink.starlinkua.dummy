/*
	Aerial 1.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Skel.
	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: 'css/style.css', lockViewport: true, viewport: 'minimal-ui' },
			'wide': { range: '-1680', href: 'css/style-wide.css' },
			'normal': { range: '-1280', href: 'css/style-normal.css' },
			'mobile': { range: '-640', href: 'css/style-mobile.css' },
			'mobilep': { range: '-360', href: 'css/style-mobilep.css' }
		}
	});
	
// Events (JS).
/*	
	// Remove "loading" class once the page has fully loaded.
		window.onload = function() {
			document.body.className = '';
		}

	// Prevent scrolling on touch.
		window.ontouchmove = function() {
			return false;
		}

	// Fix scroll position on orientation change.
		window.onorientationchange = function() {
			document.body.scrollTop = 0;
		}
		
		window.onresize = function() {
			document.body.scrollTop = 0;
		}
*/


// Events (jQuery).
// Aerial doesn't need jQuery, but if you're going to use it anyway remove the
// block of JS events above and use the jQuery-based ones below instead.

	$(window)

		// Remove "loading" class once the page has fully loaded.
			.on('load', function() {
				$('body').removeClass('loading');
				if ($('#header').position().top < 50) {
					$('#header > h2').hide();
					$('#header > h3 > br').hide();
					$('#header > h3').css("margin-top", "0");
					$('#header > nav').css({"margin-top": "5px", "font-size": "1em"});
					$('#header > nav li').css({"height": "3.5em", "line-height": "3.6em", "width": "3.5em"});
					$('#header > nav a:before').css({"font-size": "1em", "height": "1.5em", "line-height": "1.5em", "width": "1.5em"});
					$('#header > nav a').css({"font-size": "0.6em"});
					$('#header > p').css("font-size", "1em");
					$('#footer').css("font-size", "65%");
				}
			})

		// Prevent scrolling on touch.
			.on('touchmove', function() {
				return false;
			})

		// Fix scroll position on orientation change.
			.on('orientationchange', function() {
				$('body').scrollTop(0);
			})
			
			.on('resize', function() {
				if ($('#header').position().top < 50) {
					$('#header > h2').hide();
					$('#header > h3 > br').hide();
					$('#header > h3').css("margin-top", "0");
					$('#header > nav').css({"margin-top": "5px", "font-size": "1em"});
					$('#header > nav li').css({"height": "3.5em", "line-height": "3.6em", "width": "3.5em"});
					$('#header > nav a:before').css({"font-size": "1em", "height": "1.5em", "line-height": "1.5em", "width": "1.5em"});
					$('#header > nav a').css({"font-size": "0.6em"});
					$('#header > p').css("font-size", "1em");
					$('#footer').css("font-size", "65%");
				} else {
					$('#header > h2').show();
					$('#header > h3 > br').show();
					$('#header > h3').attr('style','');
					$('#header > nav').attr('style','');
					$('#header > nav li').attr('style','');
					$('#header > nav a:before').attr('style','');
					$('#header > nav a').attr('style','');
					$('#header > p').attr('style','');
					$('#footer').attr('style','');
				}
			});

