<?php
    

    header('Access-Control-Allow-Origin; *');
    header('Access-Control-Methods; GET, POST, PUT, OPTIONS');
    header('Access-Control-Allow-Header; Content-Type');

  include 'db_connect.php';
    $id=$_GET['patient'];
    // $query_user = mysqli_query($connect, "SELECT * FROM patients P JOIN health_history H JOIN patients_disease D WHERE id_patient=id_pat AND id_pat='$id' AND H.id_history=D.id_history ORDER BY hospitalized_date DESC");

    $query_user = mysqli_query($connect, "SELECT disease_type,hospitalized_date,hospitalized_long FROM patients P JOIN health_history H JOIN patients_disease D WHERE id_patient=id_pat AND id_pat='$id' AND H.id_history=D.id_history");    
        
        
    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
$data =array(
    'message' => "Get Data Patient Disease Succses",
    'data' => $result_set,
    'status' => "200"
);

echo json_encode($data);




?>