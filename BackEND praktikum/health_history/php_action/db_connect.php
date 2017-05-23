<?php
$localhost = "localhost";
$username = "root";
$password = "root";
$db_name = "akusehat";

//create connection
$connect = new mysqli($localhost, $username, $password, $db_name);

//check connection
if($connect->connect_error) {
  die("connection failed : ". $connect->connect_error);
} else {
//  echo "Successfully Connected";
}
 ?>
