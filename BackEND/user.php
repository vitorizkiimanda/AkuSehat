<?php
include 'db_connect.php';
    $id=$_GET['doctor'];
    $query_user = mysqli_query($connect, "SELECT * FROM patients_doctors JOIN patients WHERE id_pat=id_patient && id_doct='$id'");
    
    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
$data =array(
    'message' => "Get Data User Succses",
    'data' => $result_set,
    'status' => "200"
);

echo json_encode($data);
?>