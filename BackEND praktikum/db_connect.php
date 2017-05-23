<?php

$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "akusehat";

// creating the connection
$connect = new mysqli($servername, $username, $password, $dbname);

// checking the connection
if(!$connect->connect_error) {
    // echo "Successfully connected";
}
else {
    die("Connection Failed : " . $connect->connect_error);
}

?>
