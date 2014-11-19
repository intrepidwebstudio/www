

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 



//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
 
 
 //console.log("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]));
}


function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }

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
	
	var bgcolor;
	
    $('.swipe-delete li > a')
        .on('touchstart', function(e) {
			$( ".swipe-delete li > a" ).each(function( index ) {
		var rect = this.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
			if(rect.left !=0 )
			{
			$(this).animate({'left':'0px'},200,'linear',function(){  
							 new_rect = this.getBoundingClientRect();
					}) // close em all
			}
	
});
	        x = e.originalEvent.pageX // anchor point
		})
        .on('touchmove',  function(e) {
												var change = e.originalEvent.pageX - x;
												//console.log(change);
												change = Math.min(Math.max(-300, change), 0 ) // restrict to -100px left, 0px right
												//console.log("change = "+change);
												if(change < -50)
												{
											//	e.currentTarget.style.setProperty( 'background-color', '#DFE3E7', 'important' );	
												disable_scroll(); // disable scroll once we hit 10px horizontal slide
												e.currentTarget.style.left = change + 'px';
												}else{
											//	e.currentTarget.style.left = 0 + 'px';
											//	enable_scroll();	
													}
		})
        .on('touchend', function(e) {
			var left = "0";
	         left = parseInt(e.currentTarget.style.left)
		//	console.log(" LEFTTTT  =" + left );
			if(left < -90)
			{
		 var new_left = -240 + 'px';
			e.currentTarget.style.left = new_left;	
			
		e.currentTarget.style.setProperty('background-color', '#DFE3E7', 'important' );	
				}
			else{
		 var new_left = '0px';
			e.currentTarget.style.left = new_left;		
		
				}			
            enable_scroll()
		//	console.log('new keft  ='+ new_left);
		//e.currentTarget.addClass('tocuhedd');
	    });
		
		
		
		
		
		$('.socialicon').on('touchstart', function(e) {
		//console.log('touch started');	
		$(this).children('.image_icon').css("opacity",".6");
	//	console.log("staart Poistion = "+ y);
			}).on('touchmove',  function(e) {
		})
        .on('touchend', function(e) {
				//console.log('touch_end');
				$(this).children('.image_icon').css("opacity","1.0");
				
				
				 $.getScript("js/SocialSharing.js");
		  SocialSharing();
				
			var title_aaa =	$(this).attr('data-value');
			var title_linkkk = $(this).attr('data-value1');
			var media_link = $(this).attr('data-value2');
			
		//	console.log("media LINK ="+ media_link);
			
			//com.apple.social.[facebook | twitter | sinaweibo | tencentweibo
			
			if( media_link == "twitter" )
			{
				if( eboo_twitter == "1" ){
			window.plugins.socialsharing.shareViaTwitter(title_aaa, null /* img */,title_linkkk);	
				}else{
					
							$('#alert').trigger('click');
							$('#alertmessage').html('Please check the twitter from settings page');
					
					}
				}
			else if( media_link == "facebook"  )
			{
				
				if( eboo_facebook == "1" ){
			window.plugins.socialsharing.shareViaFacebook(title_aaa, null /* img */,title_linkkk);
				}else{
	
							$('#alert').trigger('click');
							$('#alertmessage').html('Please check the facebook from settings page');
					
					
					}
				
				
				
				}
			else if( media_link == "email"  )
			{
				
			window.plugins.socialsharing.shareViaEmail(title_aaa , null /* img */,title_linkkk );
				}
				
			else if( media_link == "tumblr") 
			{
				
				if( eboo_tumblr == "1" ){
					
			window.plugins.socialsharing.shareVia(title_aaa, null /* img */,title_linkkk);	
			
				}else{

							$('#alert').trigger('click');
							$('#alertmessage').html('Please check the tumblr from settings page');

					
					
					}
				
					
				}
			else if( media_link == "linkedin")
			  { 
			  
			  
			  if( eboo_linkedin == "1" ){
				  
				  
				  
			<!-- NOTE: be sure to set onLoad = onLinkedInLoad -->
			
			
			
			
				}else{
					
							$('#alert').trigger('click');
							$('#alertmessage').html('Please check the linkedin from settings page');
					}
			
			
				}	
						
						
//							window.plugins.socialsharing.shareVia(title_aaa, null /* img */,title_linkkk, function(){console.log('share ok')}, function(msg) {alert('error: ' + msg)});					
					
			
		//	console.log('TITLEE = '+ title_aaa);
		//	console.log('LINKKK = '+ title_linkkk);
				

		});

	

});


var y;
var new_position;



$("#search_show_bar").on('click', function() {
   
	  show_search()
	
});


$('#showsearch').on('click', function(e) {
	show_search();
});



$('#showsearch').on('touchstart', function(e) {
	$(this).children('.searchimg').css("opacity",".6");
})
.on('touchmove',function(){
})
.on('touchend',function(){
	$(this).children('.searchimg').css("opacity","1");
	});
	
	
	
	

$('#settingspage').on('touchstart', function(e) {
	$(this).children('.settingsimg').css("opacity",".6");
})
.on('touchmove',function(){
})
.on('touchend',function(){
	$(this).children('.settingsimg').css("opacity","1");
	settings_page();
	});
	
	
	
$('.backbutton').on('touchstart', function(e) {
$(this).children('.backimg').css("opacity",".6");
})
.on('touchmove',function(){
})
.on('touchend',function(){
$(this).children('.backimg').css("opacity","1");
});
	



//db.transaction(updatesettings, errorCB_settings);



	
	
	function successSettings(){
		
		
	//	alert("successsssss");
		}
	function errorSettings(err)
	{
		
	//	alert("ERRORR = "+err.message);
		
		}
		
		
			 function updatevalues(tx, change_value,socialName)
			 {
				 
				 
				 
				if(socialName == "twitter") 
				{ 
				 eboo_twitter = change_value;
				 console.log("my values = "+eboo_twitter);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET twitter = ? ' ,[myvalue] , successSettings , errorSettings);
				}
				else if(socialName == "tumblr")
				{
	
				 eboo_tumblr = change_value;
				 console.log("my values = "+eboo_tumblr);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET tumblr = ? ' ,[myvalue] , successSettings , errorSettings);
									
					}
				else if(socialName == "linkedin")
				{
				 eboo_linkedin = change_value;
				 console.log("my values = "+eboo_linkedin);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET linkedin = ? ' ,[myvalue] , successSettings , errorSettings);
				
					}
				else if(socialName == "facebook")
				{
					
				 eboo_facebook = change_value;
				 console.log("my values = "+eboo_facebook);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET facebook = ? ' ,[myvalue] , successSettings , errorSettings);
	
					
					}		
				
				
				
				
				
			 }
		
		
		
      var change_value;   
	function settings_page()
	{		
				
			 $('#twitterautho').on('touchstart', function() {	
				  }).on('touchmove',function(){
					  })
				  .on('touchend',function(){
					  if( eboo_twitter == '1' )
					  {
						  change_value = '0';
						$('#twitterlogout').css('display','block');
						$('#twitterlogged').css('display','none');
						  }
					 else{
						 change_value = '1';
						$('#twitterlogout').css('display','none');
						$('#twitterlogged').css('display','block');
						 } 
	//					 console.log("Change Twitter = "+ change_value);
	
				var socialName = 'twitter';
	
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
			 });
			 
			 

		 $('#linkedinautho').on('touchstart', function() {	
				  
				  }).on('touchmove',function(){
					  })
				  .on('touchend',function(){
				 
					OAuth.initialize('x4SuUm1iHBNilIhqxeB3sg60JGY')
							OAuth.popup('linkedin', {
								state: stateFromServer
							}).done(function(result) {
								console.log(result)
							})			

 
				
				
				
					/*  if( eboo_linkedin == '1' )
					  {
						  change_value = '0';
						$('#linkedinlogout').css('display','block');
						$('#linkedinlogged').css('display','none');
						  }
					 else{
						 change_value = '1';
						$('#linkedinlogout').css('display','none');
						$('#linkedinlogged').css('display','block');
						 } 
						 
				*/		 
	//					 console.log("Change Twitter = "+ change_value);
	
				var socialName = 'linkedin';
	
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
				 
				 			
					    });
					
					
				 $('#tumblrautho').on('touchstart', function() {	
				  
				  
				  }).on('touchmove',function(){})
				  .on('touchend',function(){

					  if( eboo_tumblr == '1' )
					  {
						  change_value = '0';
						$('#tumblrlogout').css('display','block');
						$('#tumblrlogged').css('display','none');
						  }
					 else{
						 change_value = '1';
						$('#tumblrlogout').css('display','none');
						$('#tumblrlogged').css('display','block');
						 } 
	//					 console.log("Change Twitter = "+ change_value);
	
				var socialName = 'tumblr';
	
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	

						
				 });
				
				
			 $('#facebookautho').on('touchstart', function() {	
				  
				  
				  }).on('touchmove',function(){})
				  .on('touchend',function(){

					  if( eboo_facebook == '1' )
					  {
						  change_value = '0';
						$('#facebooklogout').css('display','block');
						$('#facebooklogged').css('display','none');
						  }
					 else{
						 change_value = '1';
						$('#facebooklogout').css('display','none');
						$('#facebooklogged').css('display','block');
						 } 
	//					 console.log("Change Twitter = "+ change_value);
	
				var socialName = 'facebook';
	
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	

						
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
			 window.plugins.socialsharing.shareViaTwitter(global_article_title , null /* img */,global_article_link );
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
  
 


$("#search_show_bar").live("tap", function(event){
	
	show_search();
  
});

