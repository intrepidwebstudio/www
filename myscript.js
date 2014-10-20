// JavaScript Document
alert('truee');

var div_app='';	
	 		div_app+='<div data-role="header" data-position="fixed" data-theme="b" data-fullscreen="false" style=" border:none !important;   "  class="headonstart" >';
			div_app+='<img  src="img/ebooheader.png" class="ebooheader"  style="margin-bottom:-5px !important;" >';
			div_app+='<div class="topmenucontainer" >';
			div_app+='<div class="searchsettings">';
			div_app+='<div  class="lefticon" ><img  src="icons/search.png" onClick="show_search()" ></div>';
			div_app+='<div class="righticon"><a href="#settings" ><img src="icons/settings.png" ></a></div></div></div>';
			div_app+='<div class="title_bac" style="alignment-baseline:baseline;  height:45px; width:100% ; padding:-1px !important; text-align:center;"  >';
			div_app+='<p style="vertical-align:middle !important;">Eboo Testing</p></div></div>';
			
			
			
			$('body').append(div_app);
			
			