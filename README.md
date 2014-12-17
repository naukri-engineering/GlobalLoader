# Global Loader

A simple JQuery based plugin to show/hide loader image and disable/enable user interaction or a specific section while performing operations like Intensive DOM manipulation, Ajax calls etc.
[View Demo](http://naukri-engineering.github.io/GlobalLoader/)

### Usage:
`$('#selector').gLoader().block();`


### Methods : 

1. **$('#selector').gLoader().block():** To show the loader image and disable user-interactions with target section.

2. **$('#selector').gLoader().unblock():** To hide the loader image and enable user-interactions with target section.

3. **$('#selector').gLoader().resize():** To resize the loader image and overlay layer if the dimensions of the target section changes dynamically.

_**Note:** '#selector' is the target section Eg: $('#someID'), $('.someClass'), $('body')._



### Example:

1.	**Simple:**
	* **Show :** `$('#selector').gLoader().block();`
	* **Hide :** `$('#selector').gLoader().unblock();`
	* **Resize :** `$('#selector').gLoader().resize();`


2.	**Ajax calls:**
	```
    $.ajax({
        type : 'POST',
        url : 'http://somedomain.com',
        beforeSend : function(){ $('#selector').gLoader().block() },
        success : function(resp){…},
        error : function(){…},
        complete : function(){ $('#selector').gLoader().unblock() }
    });
	```


### Browser Support : 
Chrome, Firefox, IE7 & above
