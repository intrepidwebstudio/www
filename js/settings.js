// JavaScript Document
  



	var feedData;

   var imagepath = 'http://www.safelearners.com/eboo/';
   var ajax_path = 'http://www.safelearners.com/eboo/app/';
   
   var security_token = '123456789geteboo987654321';
   
   
   var SearchQueryId;
   
   var EbooUSER_ID;
   
   var feed_conducted=0; 
	
   var user_time = 0;

   var user_active = 0;

   var global_article_title='';	
	var global_article_link='';
	
	var pageCount = 0;
var contentCount = 3;

var last_search;


var search_pageCount = 0;
var search_contentCount = 3;
		
		
		
		
		
		
		
		
		
		

	
	//*************************************** settings complete here ***************************************
	
	
		var	eboo_twitter;
		var	eboo_tumblr;
		var	eboo_linkedin;
		var	eboo_facebook;		
	
	
	
	
	
	 var iabUrl = null;
        // Global InAppBrowser reference
        var iabRef = null;
		
		
		
        function iabLoadStart(event) {
            //alert(event.type + ' – ' + event.url);
        }
        function iabLoadStop(event) {
            if ( iabUrl != event.url ){
                iabUrl = event.url;
          //      alert(event.type + ' – URL CHANGED – ' + event.url);
		    }
			
			
			// iabRef.executeScript({file: "myscript.js"});
		//	alert('script dun over');
			
		
   // iabRef.executeSript( alert('12') );
			
        }
        function iabClose(event) {
          //  alert(event.type);
            iabRef.removeEventListener('loadstart', iabLoadStart);
            iabRef.removeEventListener('loadstop', iabLoadStop);
            iabRef.removeEventListener('exit', iabClose);
            iabRef.removeEventListener('share', iabClose);
        }
        function iabShare(event){
          //  alert('SHARE:'+event.type);
            iabRef.removeEventListener('loadstart', iabLoadStart);
            iabRef.removeEventListener('loadstop', iabLoadStop);
            iabRef.removeEventListener('exit', iabClose);
            iabRef.removeEventListener('share', iabClose);
        }
        function navigateTo(url,click_id,this_id,article_share_title){
			
		//	alert('trueee'+url);
	
//	$(this_id).css("background-color","none", "important");
	
//	$(this_id).css("background-color","none");
//	$(this_id).css("background-color","#ccc !important");
	
	      iabRef = window.open(url, '_blank', 'toolbarposition=top,location=no,presentationstyle=pagesheet');//presentationstyle: Set to pagesheet, formsheet or fullscreen
		 
			
			
			
		$.support.cors = true;
			
			
			//alert('id='+click_id + 'user_id='+EbooUSER_ID+'search_query_id='+SearchQueryId+'feed_conducted='+feed_conducted);
			
			$.post(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbooUSER_ID+'&search_query_id='+SearchQueryId+'&feed_conducted='+feed_conducted);
			
			this_id.style.setProperty( 'background-color', '#DFE3E7', 'important' );
			
//	        iabRef.addEventListener('exit', iabClose);
  //          iabRef.addEventListener('share', iabShare);
   //         iabRef.addEventListener('loadstart', iabLoadStart);
    //        iabRef.addEventListener('loadstop', iabLoadStop);
			
        }
		
		
function browser_setting()
	{	
        $(document).bind( 'mobileinit', function(){
                         $.mobile.loader.prototype.options.text ="loading";
                         $.mobile.loader.prototype.options.textVisible = false;
                         $.mobile.loader.prototype.options.theme ="d";
                         $.mobile.loader.prototype.options.textonly = false;
                        // $.mobile.loader.prototype.options.html ="<img src='icons/settings.png'/>";
                         $.mobile.allowCrossDomainPages = true;
                         });
						 
	}
	


