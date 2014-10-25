/*
$(function(){
    var blue = document.getElementById("blue");
    
    Hammer(blue).on("swipeleft", function() {
		
		
		
          $(blue).animate({left: "-=100"}, 500)  
    });
    
    Hammer(document.getElementById("blue")).on("swiperight", function() {
		
          $(blue).animate({left: "+=100"}, 500)  
    });
})

*/




// JavaScript Document
 $(function() {

    function prevent_default(e) {
        e.preventDefault();
    }

    function disable_scroll() {
        $(document).on('touchmove', prevent_default);
    }

    function enable_scroll() {
        $(document).unbind('touchmove', prevent_default)
    }



   
    var x;
    $('.swipe-delete li > a')
        .on('touchstart', function(e) {
            $('.swipe-delete li > a').css('left', '0px') // close em all
            x = e.originalEvent.pageX // anchor point
			
        })
        .on('touchmove', function(e) {
            var change = e.originalEvent.pageX - x
		    change = Math.min(Math.max(-250, change), 0 ) // restrict to -100px left, 0px right
            e.currentTarget.style.left = change + 'px'
            if (change < -40) disable_scroll() // disable scroll once we hit 10px horizontal slide
        })
        .on('touchend', function(e) {
			
            var left = parseInt(e.currentTarget.style.left)
            var new_left = (left > -50 ? '0px' : '-250px') // snap back, or leave open, 50px threshold
            e.currentTarget.style.left = new_left
            enable_scroll()
			
        });

    $('li .delete-btn').on('touchend', function(e) {
        e.preventDefault()
		
		
     //   $(this).parents('li').slideUp('fast', function() {.
      	
			//$(this).remove()
			
			
      //  })
    })
	

});