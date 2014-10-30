<?php 

include('../include/configure.php');
include('../include/function.php');


try{

	
	$id=$_REQUEST['id'];
	
	$user_id=$_REQUEST['user_id'];
	
	
	mysql_query("insert into eboo_user_search (`u_id`,`search_query`,``,`session_date`,`status`) values('".$user_id."','".$id."','".date('Y-m-d H:i:s')."','1')  ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
	
}catch(Exception $e){
	
	echo $e->getMessage();
	
		insertErrorLogException('application',basename(__FILE__),$e->getMessage());
	}
?>
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
   