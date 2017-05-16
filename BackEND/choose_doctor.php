<?php
    
    header('Access-Control-Allow-Origin; *');
    header('Access-Control-Methods; GET, POST, PUT, OPTIONS');
    header('Access-Control-Allow-Header; Content-Type');

  include 'db_connect.php';
    $query_user = mysqli_query($connect, "SELECT id_doctor, name_doctor, specialization FROM doctors WHERE sum_patient>0");
    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
    $data =array(
        'message' => "Get Data Doctors Succses",
        'data' => $result_set,
        'status' => "200"
    );

    echo json_encode($data);

?>