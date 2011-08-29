[strTruncator] - jQuery plugin for truncate strings
===================================================

What is it?
-----------
Is a plugin for jQuery that truncates strings to a determinate number of characters, appending an ending string like "...". When the user hovers the string, the original shown with an animation, overlaping the truncated. Is possible to offset this tooltip via options.
If the original string length is minor than maxLength, the script do nothing.


Options
-------
 * maxLength 	: Max characters to show in final truncated string. Minus endString length (default = 20)
 * background	: Color for text background. CSS style (default = 'transparent')
 * opacity		: Opacity of tooltip (default = 1)
 * offsetY		: Top offset for tooltip from original text position (default = 0)
 * offsetX		: Top offset for tooltip from original text position (default = 0)
 * endString	: When string is truncated, this string is appended (default = '...')
      
Use
---
1. Need the jQuery library (http://jquery.com/)
2. Fire it! Example: 
	`$(document).ready( function() {
		$('h2.truncate').strTruncator({'background':'white', 'maxLength':50});
	})`
	
Questions, feedback, proposals...
---------------------------------
e-mail: leal.ra@gmail.com
twitter: [@raullealm](http://twitter.com/RaulLealM)

