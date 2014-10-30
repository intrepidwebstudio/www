<?php 

include('../include/configure.php');
include('../include/function.php');


try{

	
	$id=$_REQUEST['id'];
	
	$user_id=$_REQUEST['user_id'];
	
	
	
	
	
	mysql_query("update eboo_feeds set clickcount = clickcount + 1 where id='".$id."' ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
	mysql_query("insert into eboo_user_clicked_data (`u_id`,`feeds_id`,`session_date`,`status`) values('".$user_id."','".$id."','".date('Y-m-d H:i:s')."','1')  ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
	
	if(isset($_REQUEST['feed_conducted']) && isset($_REQUEST['search_query_id']))
	{
		$search_query_id=$_REQUEST['search_query_id'];
		$feed_conducted=$_REQUEST['feed_conducted'];
		
		if($feed_conducted==1 && $search_query_id!='')
		{
			
			mysql_query("update eboo_user_search set articles_clicked = articles_clicked + 1 where u_id='".$user_id."' and id='".$search_query_id."' ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
			
			}	
	
		
		}
	
	
	
	
}catch(Exception $e){
	
	echo $e->getMessage();
	
		insertErrorLogException('application',basename(__FILE__),$e->getMessage());
	}
?>
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
   