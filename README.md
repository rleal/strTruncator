strTruncator - jQuery plugin for truncate strings
===================================================

What is it?
-----------
It is a plugin for jQuery that truncates strings to a given number of characters, appending an ending string like "...". When the user hovers over the string, the original text is shown with an animation, overlaping the truncated one. 

If the original string length is minor than maxLength, the script does nothing.


[Demo here](http://test.rleal.com/strTruncator/)


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

