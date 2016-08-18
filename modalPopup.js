(function($){

	// Defining our Modal

	$.fn.vz_modalPopup = function(prop){

		/*------------  Default parameters -------------*/

		var options = $.extend({
			width : "830",
			title:"Vz Modal Box",
			description: "Example of how to create Vz modal.",
			vz_template:"define your template here",
			top: "20%",
			left: "22%",
		},prop);
				
		/*------------ Click event on element ---------------*/
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			$('.vz_modalPopup').fadeIn();
		});
		
		 function add_styles(){	
			$('.vz_modalPopup').css({ 
				'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'z-index':'50',
			});
			$('.closePopup').css({
				'position': 'relative',
			    'top': '45px',
			    'left': '35px',
			    'float': 'right',
			    'display': 'block',
			    'height': '50px',
			    'width': '50px',
			    'text-decoration': 'none',
			    'color': '#b5b5b5',
			    'font-size': '21px',
			    'font-family': 'Arial',
			    'font-weight': 'bold',
			    'background': 'url("images/close.png") no-repeat'
			});
			
			/*----------- Block page overlay ------------*/

			var pageHeight = $(window).height();
			var pageWidth = $(window).width();

			$('.vz_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':'100%',
				'position':'fixed',
				'width':pageWidth,
				'z-index':'1000'
			});
			$('.innerModal').css({
				'background-color':'#fff',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'25px 20px 20px 50px',
				'margin':'15px',
				
			});
			$('.innerModal .headerPopup').css({
				'font-size':'24px',
			});
			$('.reasonToReturn').css({
				'height':'140px',
				'width':'360px'
			});
			$('.innerModal .contentsHolder .buttonList').css({
				'margin':'15px 0 0 0',
			});

			$('.innerModal .contentsHolder .subHead').css({
				    'font-weight': 'bold',
				    'font-size': '12px',
				    'margin-top': '25px',
			});

			$('.innerModal .descriptions p').css({
				    'margin': '0',
			});
			
		}
		
		 /*------ Create the block page div -------*/

		 function add_block_page()
		 {
			var block_page = $('<div class="vz_block_page"></div>');
							 $(block_page).appendTo('body');
		 }

		 /*------------ Creates the modal box ---------*/

		function add_popup_box()
		{
			 var pop_up = $('<div class="vz_modalPopup"><a href="javascript:void(0);" class="closePopup"></a><div class="innerModal"><h2 class="headerPopup">' + options.title + '</h2><div class="descriptions">' + options.description + '</div><div class="contentsHolder">'+ options.vz_template +'</div></div></div>');
			 $(pop_up).appendTo('.vz_block_page');
			 			 
			 $('.closePopup').click(function(){
				$(this).parent().fadeOut().delay(200).remove();
				$('.vz_block_page').fadeOut().delay(200).remove();				 
			 });
		}
		return this;
	};
	
})(jQuery);
