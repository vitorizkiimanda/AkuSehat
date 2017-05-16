<?php

  include 'db_connect.php';
    $id=$_GET['patient'];
    $query_user = mysqli_query($connect, "SELECT * FROM daily_health_data JOIN patients WHERE id_pat=id_patient && id_pat='$id' ORDER BY  date_daily DESC");
    
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