<?php 

include('../include/configure.php');
include('../include/function.php');


try{

	
	
	$useremail=$_REQUEST['useremail'];
	
	$select_user=mysql_query("select * from eboo_users  where user_id='".$useremail."' and status='1' ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
	if(mysql_num_rows($select_user)>0)
	{
		
		$responseInsert = array(
								"status"=>'101' ,
								"messgae" => 'Email Already eixsts',
						);	
	}
	
	else{
		
	$select_insert=mysql_query("insert into eboo_users (`user_id`,`session_date`,`status`)  values ('".mysql_real_escape_string($useremail)."','".date('Y-m-d H:i:s')."','1')   ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	

	
	$select_id=mysql_query("select id from eboo_users where user_id='".$useremail."' and status='1'  ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
	$fetch_id=mysql_fetch_array($select_id);
	
	$user_id = $fetch_id['id'];
	
	
		mysql_query("insert into eboo_user_usage (`u_id`,`session_date`,`status`) values ('".$user_id."','".date('Y-m-d H:i:s')."','1') ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
	$responseInsert= array(
							
						"status"=>'100',
						"message"=>'success',
						"user_id"=>$user_id	
							
						);
	}
	
	
	 $data=array("LoginResponse"=>$responseInsert );
	 
	 echo json_encode($data);
	
	
	
	
	
	
	
	
	
}catch(Exception $e){
	
	echo $e->getMessage();
	
		insertErrorLogException('application',basename(__FILE__),$e->getMessage());
	}
?>
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
   