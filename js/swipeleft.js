

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
			
			
			if(new_rect.left > -30)
			{
			
		    var change = e.originalEvent.pageX - x
		    change = Math.min(Math.max(-250, change), 0 ) // restrict to -100px left, 0px right
            e.currentTarget.style.left = change + 'px'
            if (change < -50) disable_scroll() // disable scroll once we hit 10px horizontal slide
			}
        })
        .on('touchend', function(e) {
			
			var left = "0";
			
             left = parseInt(e.currentTarget.style.left)
			
			
            var new_left = (left > -80 ? '0px' : '-250px') // snap back, or leave open, 50px threshold
            e.currentTarget.style.left = new_left
            enable_scroll()
			
			//e.currentTarget.addClass('tocuhedd');

			
        });

   
	

});


         
	function settings_page()
	{		
				
			OAuth.initialize("x4SuUm1iHBNilIhqxeB3sg60JGY");
					
			
			
					
				 $('#twitterautho').on('touchstart', function() {	
				 
				 if($('#twitterlogged').css('display') == 'none')
				{
				 
                    OAuth.popup('twitter')
                        .done(function (result) {
						
						
						
						console.log( JSON.parse( result ) );
						
							console.log('Access token  = '+ result.oauth_token + ' secret key = '+ result.oauth_token_secret  )
                        // the access_token is available via r.access_token
                       // but the http functions automagically wrap the jquery calls
                            result.get('/1.1/account/verify_credentials.json')
                                .done(function(data) {
									
//                                    $('#result').html("twitter: Hello, " + data.name + " !");
									
									
									
									console.log( JSON.parse( data ) );
									
									
									
									console.log("twitter: Hello, " + data.name + " ! ");
									
									
									
								$('#twitterlogout').css('display','none');
								$('#twitterlogged').css('display','block');

									
                                })
                                .fail(function( jqXHR, textStatus, errorThrown) {
                                    console.log("req error: " + textStatus);
                                });
                        })
                        .fail(function (e) {
                            console.log('error: ' + e.message);
                        });
						
						
						}else{
				
				
				
				
				}
						
						
				 });
				 
				 
				 
				 
			
			
			
			
				 
				  
					
				 $('#linkedinautho').on('touchstart', function() {	
                    OAuth.popup('linkedin')
                        .done(function (r) {
							alert('success');
                            // the access_token is available via r.access_token
                            // but the http functions automagically wrap the jquery calls
                            r.get('/1.1/account/verify_credentials.json')
                                .done(function(data) {
									
																
									
                                  //  $('#result').html("twitter: Hello, " + data.name + " !");
									
									
									console.log("twitter: Hello, " + data.name + " ! ");
									
									
									
								$('#linkedinlogout').css('display','none');
								$('#linkedinlogged').css('display','block');

									
                                })
                                .fail(function( jqXHR, textStatus, errorThrown) {
                                    console.log("req error: " + textStatus);
                                });
                        })
                        .fail(function (e) {
                         console.log('error: ' + e.message);
                        });
						
				 });
				 
				 
				 
				 
				 
				 
				 
					
				 $('#tumblrautho').on('touchstart', function() {	
                    OAuth.popup('tumblr')
                        .done(function (r) {
							alert('success');
                            // the access_token is available via r.access_token
                            // but the http functions automagically wrap the jquery calls
                            r.get('/1.1/account/verify_credentials.json')
                                .done(function(data) {
//                                    $('#result').html("twitter: Hello, " + data.name + " !");
									
									
									console.log("twitter: Hello, " + data.name + " ! ");
									
									
									
								$('#tumblrlogout').css('display','none');
								$('#tumblrlogged').css('display','block');

									
                                })
                                .fail(function( jqXHR, textStatus, errorThrown) {
                                   console.log("req error: " + textStatus);
                                });
                        })
                        .fail(function (e) {
                           console.log('error: ' + e.message);
                        });
						
				 });
				 
                
				
	}





var callback = function(buttonIndex) {
    setTimeout(function() {
      // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
//      alert('button index clicked: ' + buttonIndex);
	  
	 
		  
		  $.getScript("js/SocialSharing.js");
		  SocialSharing();
		  
		//  alert('title = ' + global_article_title + ' link  =  '+ global_article_link );
	  
	  
	  if(buttonIndex == 1)
	  {
	//	  alert('ss');
		//  window.plugins.socialsharing.shareViaFacebook(  article_title, null, null, function(){alert("ok")}, function(e){alert("error: " + e)});
		  window.plugins.socialsharing.shareViaEmail(global_article_title , null /* img */,global_article_link );
		  
		  }
		 else if(buttonIndex == 2)
		 {
			 window.plugins.socialsharing.shareViaFacebook(global_article_title, null /* img */,global_article_link);
			 }
		 else if(buttonIndex == 3)
		 {
			 window.plugins.socialsharing.share(global_article_title, null /* img */,global_article_link);
			 }
		 else if(buttonIndex == 4)
		 {
			 window.plugins.socialsharing.shareViaEmail(global_article_title , null /* img */,global_article_link );
			 }
		 else if(buttonIndex == 5)
		 {
			 
			 
			 }
		else if(buttonIndex == 6)
		 {
			 
			 }	 
		 
	  
	  
    });
  };

  function share_article() {
	  
	  
	  
	  
    var options = {
       // 'title': 'What do you want with this image?',
        'buttonLabels': ['Twitter' ,'Facebook', 'LinkedIn','Email','Send to Reading List','Open in Safari'],
        'androidEnableCancelButton' : false, // default false
        'winphoneEnableCancelButton' : false, // default false
        'addCancelButtonWithLabel': 'Cancel',
//        'addDestructiveButtonWithLabel' : 'Delete it'
    };
    // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
    // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
    window.plugins.actionsheet.show(options, callback);
  };
  
  $('#dragimg').on('dragstart', function(event) {
	  
	  
    event.preventDefault();
});



