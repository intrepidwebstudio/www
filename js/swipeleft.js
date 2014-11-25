
var linkedin_data;




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
		 var new_left = -230 + 'px';
			e.currentTarget.style.left = new_left;	
			
			var click_id = $(this).attr('data-value3');
			
		e.currentTarget.style.setProperty('background-color', '#DFE3E7', 'important' );	
		
		console.log(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbooUSER_ID+'&search_query_id='+SearchQueryId+'&feed_conducted='+feed_conducted+'&security_token = '+ security_token);
		
		$.post(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbooUSER_ID+'&search_query_id='+SearchQueryId+'&feed_conducted='+feed_conducted+'&security_token = '+ security_token);
		
		
				}
			else{
		 var new_left = '0px';
			e.currentTarget.style.left = new_left;		
		
				}			
            enable_scroll()
		//	console.log('new keft  ='+ new_left);
		//e.currentTarget.addClass('tocuhedd');
	    });
		
 });
 
 
 
