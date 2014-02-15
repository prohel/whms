<?php
//DB details and connection
$mysql_host="localhost:68.178.216.184";
$mysql_user="clickerDB1";
$mysql_pass="Whms001";
$mysql_db="clickerDB1";
global $mysql_link;
$mysql_link = mysqli_connect($mysql_host, $mysql_user, $mysql_pass, $mysql_db);
?>
