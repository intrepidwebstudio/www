// JavaScript Document
  



	var feedData;

   var imagepath = 'http://www.safelearners.com/eboo/';
   var ajax_path = 'http://www.safelearners.com/eboo/app/';
   
   var security_token =543219588865478555;
   
   
   var SearchQueryId;
   
   var EbooUSER_ID;
   
   var feed_conducted=0; 
	
   var user_time = 0;

   var user_active = 0;

   var global_article_title='';	
	var global_article_link='';
	
	var pageCount = 0;
var contentCount = 10;

var last_search;


var search_pageCount = 0;
var search_contentCount = 10;
		
		
		
		
		
		
		
		
		
		

	
	//*************************************** settings complete here ***************************************
	
	
		var	eboo_twitter;
		var	eboo_tumblr;
		var	eboo_linkedin;
		var	eboo_facebook;		
	
	
	
	
	
	
        // Global InAppBrowser reference
        var iabRef = null;
		
        function iabLoadStart(event) {
            	
				alert(event.type + ' – ' + event.url);
				
				
				
				localStorage.urlvalue = event.url;
				
						iabRef.addEventListener('exit', iabClose);

        }
		
		
	
		
        function iabLoadStop(event) {

			//localStorage.setItem( "name", this.name.value );
				iabRef.addEventListener('loadstop', function(event) {        
    if (event.url.match("mobile/close")) {
		
		alert('URL MATHCES = '+ event.url );
		
        iabRef.close();
    }
});
			
			
//		 iabRef.executeScript({file: "myscript.js"});
		//	alert('script dun over');
	   // iabRef.executeSript( alert('12') );
	    }
        function iabClose(event) {
            alert(event.type);
		  
		  	iabRef.close();
           // iabRef.removeEventListener('loadstart', iabLoadStart);
          //  iabRef.removeEventListener('loadstop', iabLoadStop);
         //   iabRef.removeEventListener('exit', iabClose);
           // iabRef.removeEventListener('share', iabClose);
        }
        function iabShare(event){
          //  alert('SHARE:'+event.type);
         //   iabRef.removeEventListener('loadstart', iabLoadStart);
          //  iabRef.removeEventListener('loadstop', iabLoadStop);
           // iabRef.removeEventListener('exit', iabClose);
           // iabRef.removeEventListener('share', iabClose);
        }
        function navigateTo(url,click_id,this_id,article_share_title){
			
		  if(article_share_title ==!'')
		  {
		 
		  iabRef = window.open(url, '_blank', 'toolbarposition=top,location=no,presentationstyle=pagesheet');//presentationstyle: Set to pagesheet, formsheet or fullscreen 
	      $.support.cors = true;
	  	  $.post(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbooUSER_ID+'&search_query_id='+SearchQueryId+'&feed_conducted='+feed_conducted+'&security_token = '+ security_token);
    	  this_id.style.setProperty( 'background-color', '#DFE3E7', 'important' );
		  
		  }else{
			  
			   iabRef = window.open(url+'?eboo_user='+EbooUSER_ID , '_blank', 'toolbarposition=top,location=yes,presentationstyle=pagesheet');//presentationstyle: Set to pagesheet, formsheet or fullscreen
			  
			  }
		  
		  			
			iabRef.addEventListener('exit', iabClose);
            iabRef.addEventListener('share', iabShare);
            iabRef.addEventListener('loadstart', iabLoadStart);
            iabRef.addEventListener('loadstop', iabLoadStop);

			
	        
			
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
	


