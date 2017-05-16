<?php
include 'db_connect.php';

$q = mysqli_query($connect, "SELECT * FROM patients");

 while($result =mysqli_fetch_assoc($q)){
        $result_set[]=$result;
    }
$data =array(
    'message' => "Get Data Health History Succses",
    'data' => $result_set,
    'status' => "200"
);
echo json_encode($data);