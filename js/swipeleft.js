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
		    change = Math.min(Math.max(-400, change), 0 ) // restrict to -100px left, 0px right
			if(change < -50)
			{
			  e.currentTarget.style.left = change + 'px';	
				
				}
			
          
			if(change < -50 )
			{
             disable_scroll() 
			}// disable scroll once we hit 10px horizontal slide
        })
        .on('touchend', function(e) {
			
            var left = parseInt(e.currentTarget.style.left)
			
			if(left > -50)
			{
			e.currentTarget.addclass = '0px';	
				}
			else{
				
			e.currentTarget.style.left = '-250px';		
				
				}
            enable_scroll()
			
        });

    $('li .delete-btn').on('touchend', function(e) {
        e.preventDefault()
		
		
     //   $(this).parents('li').slideUp('fast', function() {.
      	
			//$(this).remove()
			
			
      //  })
    })
	

});