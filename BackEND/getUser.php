<?php
include 'db_connect.php';

$q = mysqli_query($connect, "SELECT * FROM patients");
if ($q){
	$a = array('status' => 1 );
}
json_encode($a);