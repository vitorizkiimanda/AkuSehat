<?php
$localhost = "localhost";
$username = "root";
$password = "root";
$db_name = "akusehat";

//create connection
$conn = new mysqli($localhost, $username, $password, $db_name);

//check connection
if($conn->connect_error) {
  die("connection failed : ". $conn->connect_error);
} else {
//  echo "Successfully Connected";
}

session_start();
if(!(isset($_SESSION['id']))){
  $_SESSION['status'] = "noadmin";
}
 ?>
