<?php
try {
$mysqlconnection = mysql_connect("eboo1.db.11167393.hostedresource.com","eboo1","Ebos@123");
mysql_select_db("eboo1");
//date_default_timezone_set("Asia/Kolkata"); 
}catch(Exception $e){
	echo $e->getMessage();
	insertErrorLogException(basename(__FILE__),$e->getMessage());
}
?>