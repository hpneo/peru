// Background colors
var colors = new Array();
colors['home'] = '#EE2E24';
colors['brand'] = '#ffcd34'; // yellow //'#EE2E24';
colors['what'] = '#80c242';
colors['why'] = '#7f1069'; //'#72175e';
colors['how'] = '#0079c2'; //'#116fab';



$(document).ready(function(){
	
	// Cufon tags
	Cufon.replace('#home_events ul.events h3');
	Cufon.replace('.banner .banner-links a'); 
	Cufon.replace(".content h2");
	Cufon.replace("#header #follow-us li.title");
	Cufon.replace("#menu li a");
	Cufon.replace(".content ul.section-content li h3");
	
	// Remove no-js from html tag
	$('html').removeClass('no-js');
	
	/*
	 * Background color change

	 */
	$("a.anchorLink").click(function(){
		
		if ($('body').is(':animated')) {
			//console.log('click por aca esta animado');
			return false;
		}
		
		$("a.anchorLink").removeClass('active');
		$(this).addClass('active');
		
		
		$('body').animate({ backgroundColor: colors[$(this).attr('href').replace('#', '')] }, 1100);
		//location.hash = "#" + name ;
	
		return false;
	});	
	
	/*
	 * Scroll to
	 */
	$("a.anchorLink").anchorAnimate({speed:1100});
	
	/*
	 * Banner's slider
	 */
	$('.banner-content, .banner-dif').cycle({
		timeout:4000,
		speed:500,
		sync: 1
	});
	/*
	 * Colores de fondo
	 */	
	/*
	$(window).bind("scroll", function(event) {

		if ($('body').is(':animated')) {
			//console.log('scroll aca se esta animado');
			return false;
		}
		
		 $(".section:in-viewport").each(function(){
			 menu_top = $("#menu").offset().top;
			 section_top = $(this).offset().top;
			 
			 
			 if (menu_top + 50 > section_top){
				 var name = $(this).find('a.link-anchor').attr("name");
				 //console.log(name);
				 if (name != "home"){
				 if ( $('#menu a.'+name).hasClass('active') != true ){
						$("a.anchorLink").removeClass('active');
						$('#menu a.'+name).addClass('active');
						
		
						$('body').animate({ backgroundColor: colors[$('#menu a.'+name).attr('href').replace('#', '')] }, 1100);					 				 
				 }
				}
				else {
					
						$('body').animate({ backgroundColor: colors["home"] }, 1100);					 				 
				}
				
			}			 
		 });
		
	});
	*/
});