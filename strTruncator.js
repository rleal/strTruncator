/*!
 * strTruncator plugin 
 * for jQuery http://jquery.com/
 *
 * Copyright 2011, Raúl Leal Membrilla 
 * http://rleal.com
 *
 * Licensed under the MIT license
 */

(function ($) {
	$.fn.strTruncator = function(options) {
		var defaults = {  
			maxLength : 20,
			background	: 'transparent',
			opacity: 1,
			offsetY: 0,
			offsetX: 0,
			endString: '...',
        };

        var options = $.extend(defaults, options);

		return this.each(function() {  

			var text = $(this).text();
			
			if ((text.length - options.endString.length) > options.maxLength ) {
				$(this).text(text.substr(0, options.maxLength) + options.endString);
				$(this).hover ( 
					function() {
						var offset = $(this).offset();
						var height = $(this).height();
						var tooltip = $('<div class="strTruncator">'+text+'</div>').css({
							display: 'none',
							'background-color'	: options.background,
							opacity	: "1", 
							position	: 'absolute',
							top		: offset.top + options.offsetY +'px',
							left	: offset.left + options.offsetX +'px',
							'line-height'	: height+'px', 
						});
						$(this).append(tooltip);
						tooltip.show('fast');
					},
					function() {
						$(this).find('div:last').remove();
					}					
				);
			}
		});
	}
})(jQuery);
