<?php 

include('../include/configure.php');
include('../include/function.php');


try{

	
	$user_time=$_REQUEST['seconds'];
	
	$user_id=$_REQUEST['user_id'];
	
	
	$user_time = $user_time / 1000 ;
	
	
	mysql_query("update eboo_user_usage set total_usage = total_usage + '".$user_time."' , session_date='".date('Y-m-d H:i:s')."'  where u_id='".$user_id."'  ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
	
	
	
}catch(Exception $e){
	
	echo $e->getMessage();
	
		insertErrorLogException('application',basename(__FILE__),$e->getMessage());
	}
?>
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
   