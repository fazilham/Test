
var audio = document.getElementById("audio");
jQuery(function () {

    
    $('ul.colors li:nth-child(7)').on('click', function(){
		$('.bike-color .wega .title h1').html('Dual tone \<br\> Red');
		$('ul.colors li a').attr('class', 'triangle-up');
		$(this).children().attr('class', 'triangle-active triangle-up');
    $('#bike-img').fadeIn('swing', function() {
        $('#bike-img').attr("src","images/colors/dualtone-red.png");
        
    });
    });
    $('ul.colors li:nth-child(6)').on('click', function(){
		$('.bike-color .wega .title h1').html('Dual tone \<br\> White');
		$('ul.colors li a').attr('class', 'triangle-up');
        $(this).children().attr('class', 'triangle-active triangle-up');
    $('#bike-img').fadeIn('swing', function() {
        $('#bike-img').attr("src","images/colors/dualtone-white.png");
    });
    });
    
jQuery('.puzzle-block img.puzzleparts').draggable({
stop: function (event, ui) {
	jQuery(this).fadeOut('slow');
	jQuery(".unpuzzle-text").fadeOut('slow');
	jQuery(this).parents('.puzzle-block').find('div').fadeIn('slow');
	jQuery(this).parents('.puzzle-block').addClass("puzzles");
	setTimeout(function(){
		if(jQuery(".puzzlesec .puzzles").length == 5){
			// jQuery("section").animate({ top: "-100%" }, 0, 'easeOutExpo');
			jQuery(".unpuzzle-text").fadeOut('slow');
			
			}
		}, 800);
}
});
 jQuery(".remove-puzzle").on("click", function () {
        jQuery(".puzzle-block img.puzzleparts").fadeOut('slow');
	jQuery(".unpuzzle-text").fadeOut('slow');
	jQuery(".puzzle-block img.puzzleparts").parents('.puzzle-block').find('div').fadeIn('slow');
	jQuery('.puzzle-block img.puzzleparts').parents('.puzzle-block').addClass("puzzles");
	setTimeout(function(){
		if(jQuery(".puzzlesec .puzzles").length == 5){
			// jQuery("section").animate({ top: "-100%" }, 0, 'easeOutExpo');
			jQuery(".unpuzzle-text").fadeOut('slow');
			
			}
		}, 800);
    });
	if($(".bike-list")[0]){
		 $('.bike-list').bxSlider();
		}
jQuery('.nav-trigger').on('click', function(){
		jQuery(this).toggleClass('active');
		jQuery("body").toggleClass('is-visible-menu');
	});	
 jQuery(".volumeCon").on("click", ".collapse", function () {
        jQuery(".volumeConIn").fadeOut(500);
        jQuery(this).addClass("expend");
        jQuery(this).removeClass("collapse");
    });
jQuery(".volumeCon").on("click", ".expend", function () {
        jQuery(".volumeConIn").fadeIn(500);
        jQuery(this).removeClass("expend");
        jQuery(this).addClass("collapse");
    });
	jQuery(document).click(function(e){
	if (!$(e.target).is('.nav-trigger,.nav-trigger *.nav-main,.nav-main *')) {
		jQuery(".nav-trigger").removeClass('active');
		jQuery("body").removeClass('is-visible-menu');
	}
});
});

jQuery(function () {
	var frames = [
	"images/wega/360/01.png",
	"images/wega/360/02.png",
	"images/wega/360/03.png",
	"images/wega/360/04.png",
	"images/wega/360/05.png",
	"images/wega/360/06.png",
	
	];
if(jQuery(".frames360")[0]){
	jQuery(".frames360").spritespin({
		width: 621,
		height: 471,
		frames: frames.length,
		frame: 0,
		behavior: "drag", // "hold"
		module: "360",
		sense: -1,
		source: frames,
		animate: true,
		loop: true,
		frameWrap: true,
		frameStep: 1,
		frameTime: 1000,
		enableCanvas: false
	});
}
});

jQuery(function () {
	var slider = jQuery('#slider'),
	tooltip = jQuery('.tooltip');
	//Hide the Tooltip at first
	tooltip.hide();

	//Call the Slider
	slider.slider({
		//Config
		range: false,
		animate: true,
		/*dragAnimate: true,*/
		min: 0,
		max: 100,
		value: 35,
		orientation: "vertical",
		start: function (event, ui) {
			tooltip.fadeIn('fast');
		},
		//Slider Event
		slide: function (event, ui) { //When the slider is sliding
			var value = slider.slider('value'),
			volume = jQuery('.volume');
			document.getElementById("audio").volume = (value / 100);

			tooltip.css('bottom', value).text(ui.value);  //Adjust the tooltip accordingly

			if (value <= 5) {
				volume.css('background-position', '5px 3px');
			}
			else if (value <= 25) {
				volume.css('background-position', '5px -22px');
			}
			else if (value <= 75) {
				volume.css('background-position', '5px -47px');
			}
			else {
				volume.css('background-position', '5px -72px');
			};

		},

		stop: function (event, ui) {
			tooltip.fadeOut('fast');
		}
	});


	/*$(window).resize(function() {
		var getfooterheight = $('.footer').innerHeight();
		var wegaheight =  $('.wega').innerHeight();
		alert(getfooterheight)
		alert(wegaheight)
		alert(wegaheight - getfooterheight)
		$('.wega').height(wegaheight - getfooterheight)
	});
	$(window).resize();*/
/*
	$(window).resize(function(){
		var height = $(this).height() - $(".header").height() + $(".footer").height()
		$('.wega').height(height);
	})

	$(window).resize(); //on page load*/


	$('#fabclick1').click(function() {
		$('.fab_contentPageslide').css('display','none');
		$('.fab_contentPage').css('display','block');
	$('.fabtitlechange').html('Design');
		$('#fabclick1').attr('class', 'active');
		$('#fabclick1 img').attr('src', 'images/feature-design.png');
		$('#fabclick1 span').attr('class', 'triangle-right-active');
		$('#fabclick4').attr('class', '');
		$('#fabclick4 img').attr('src', 'images/feature-tech-specs.png');
		$('#fabclick4 span').attr('class', '');
	});

	$('#fabclick4').click(function() {
		$('.fab_contentPageslide').css('display','block');
		$('.fab_contentPage').css('display','none');
		$('.fabtitlechange').html('e-Brochure');
		$('#fabclick1').attr('class', '');
		$('#fabclick1 img').attr('src', 'images/feature-design1.png');
		$('#fabclick1 span').attr('class', '');
		$('#fabclick4').attr('class', 'active');
		$('#fabclick4 img').attr('src', 'images/feature-tech-specs1.png');
		$('#fabclick4 span').attr('class', 'triangle-right-active');

	});
});