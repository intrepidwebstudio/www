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
	
	
	
	
	
	 var iabUrl = null;
        // Global InAppBrowser reference
        var iabRef = null;
		
        function iabLoadStart(event) {
            //alert(event.type + ' – ' + event.url);
        }
        function iabLoadStop(event) {

			localStorage.setItem( "name", this.name.value );
			
                    iabRef.executeScript({ code: "localStorage.setItem( 'name', '' );" });
                    var loop = setInterval(function() {
                        iabRef.executeScript(
                            {
                                code: "localStorage.getItem( 'name' )"
                            },
                            function( values ) {
                                var name = values[ 0 ];
                                if ( name ) {
                                    clearInterval( loop );
                                    iabRef.close();
									
									
                                    alert("Welcome " + name + "!" );
                                }
                            }
                        );
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
            iabRef.removeEventListener('loadstart', iabLoadStart);
            iabRef.removeEventListener('loadstop', iabLoadStop);
            iabRef.removeEventListener('exit', iabClose);
            iabRef.removeEventListener('share', iabClose);
        }
        function navigateTo(url,click_id,this_id,article_share_title){
			
			
			iabRef.addEventListener('exit', iabClose);
            iabRef.addEventListener('share', iabShare);
            iabRef.addEventListener('loadstart', iabLoadStart);
            iabRef.addEventListener('loadstop', iabLoadStop);
			
	      iabRef = window.open(url, '_blank', 'toolbarposition=top,location=no,presentationstyle=pagesheet');//presentationstyle: Set to pagesheet, formsheet or fullscreen
		  
		  if(article_share_title ==!'')
		  {
		  
	      $.support.cors = true;
	  	  $.post(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbooUSER_ID+'&search_query_id='+SearchQueryId+'&feed_conducted='+feed_conducted+'&security_token = '+ security_token);
    	  this_id.style.setProperty( 'background-color', '#DFE3E7', 'important' );
		  
		  }
			
	        
			
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
	


