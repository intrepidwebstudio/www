

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
	
	var new_rect;
	
    $('.swipe-delete li > a')
        .on('touchstart', function(e) {
			
			
			$( ".swipe-delete li > a" ).each(function( index ) {
				
				
		var rect = this.getBoundingClientRect();
				
// console.log(rect.top, rect.right, rect.bottom, rect.left);
				
			
			if(rect.left !=0)
			{
			$(this).animate({'left':'0px'},500,'linear',function(){  
			
							 new_rect = this.getBoundingClientRect();
						
							if(new_rect.left==0)
							{
						
							//	$(this).unbind('onClick');
															
								}
			
				
			}) // close em all
			
			
			
			
			
			
			
			
			
			
			
			}
			
			
	
});
			
            x = e.originalEvent.pageX // anchor point
			
        
		
		})
        .on('touchmove', function(e) {
			
			
			if(new_rect.left==0)
			{
			
		    var change = e.originalEvent.pageX - x
		    change = Math.min(Math.max(-250, change), 0 ) // restrict to -100px left, 0px right
            e.currentTarget.style.left = change + 'px'
            if (change < -10) disable_scroll() // disable scroll once we hit 10px horizontal slide
			}
        })
        .on('touchend', function(e) {
			
			var left = "0";
			
             left = parseInt(e.currentTarget.style.left)
			
			
            var new_left = (left > -50 ? '0px' : '-250px') // snap back, or leave open, 50px threshold
            e.currentTarget.style.left = new_left
            enable_scroll()
			
			//e.currentTarget.addClass('tocuhedd');

			
        });

   
	

});


         
	function settings_page()
	{		
				
				 OAuth.initialize("x4SuUm1iHBNilIhqxeB3sg60JGY");
					
				 $('#twitterautho').on('touchstart', function() {	
					
                    OAuth.popup('twitter')
                        .done(function (r) {
							alert('success');
                            // the access_token is available via r.access_token
                            // but the http functions automagically wrap the jquery calls
                            r.get('/1.1/account/verify_credentials.json')
                                .done(function(data) {
//                                    $('#result').html("twitter: Hello, " + data.name + " !");
									
									
									console.log("twitter: Hello, " + data.name + " ! ");
									
									
									
								$('#twitterlogout').css('display','none');
								$('#twitterlogged').css('display','block');

									
                                })
                                .fail(function( jqXHR, textStatus, errorThrown) {
                                    $('#result').html("req error: " + textStatus);
                                });
                        })
                        .fail(function (e) {
                            $('#result').html('error: ' + e.message);
                        });
						
				 });
                
				
	}

