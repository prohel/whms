<?php
//DB details and connection
$mysql_host="localhost:3306";
$mysql_user="clickerDB1";
$mysql_pass="Whms001";
$mysql_db="hellopenn";
global $mysql_link;
$mysql_link = mysqli_connect($mysql_host, $mysql_user, $mysql_pass, $mysql_db);
?>
