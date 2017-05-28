<?php
    
  include 'db_connect.php';
    $id=$_GET['patient'];
    $query_user = mysqli_query($connect, "SELECT * FROM patients_disease WHERE id_history='$id' ORDER BY hospitalized_date DESC");
    
        
        
    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
$data =array(
    'message' => "Get Data Patient Disease Succses",
    'data2' => $result_set,
    'status' => "200"
);

echo json_encode($data2);




?>