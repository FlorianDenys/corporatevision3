// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets



	
	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }


	$('div.burger').on(click, function(){

			if( !$(this).hasClass('open') ){ openMenu(); } 
			else { closeMenu(); }

	});
	

	$('div.burger.hid.open').on(click, function(e){
		e.preventDefault();
		closeMenu();
	});		


	function openMenu(){
		
		$('div.circle').addClass('expand');
					
		$('div.burger').addClass('open');	
		$('div.x, div.y, div.z').addClass('collapse');
		$('.menu li').addClass('animate');
		$('.menu').addClass('animate');
		
		setTimeout(function(){ 
			$('div.y').hide(); 
			$('div.x').addClass('rotate30'); 
			$('div.z').addClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45'); 
			$('div.z').addClass('rotate135');  
		}, 120);
		
		

	}
	
	function closeMenu(){

		$('div.burger').removeClass('open');	
		$('div.x').removeClass('rotate45').addClass('rotate30'); 
		$('div.z').removeClass('rotate135').addClass('rotate150');				
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');
		$('.menu').removeClass('animate');
		
		setTimeout(function(){ 			
			$('div.x').removeClass('rotate30'); 
			$('div.z').removeClass('rotate150'); 			
		}, 50);
		setTimeout(function(){
			$('div.y').show(); 
			$('div.x, div.y, div.z').removeClass('collapse');
		}, 70);													
		
	}