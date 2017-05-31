<?php

  include 'db_connect.php';
    $id=$_GET['patient'];
    $query_user = mysqli_query($connect, "SELECT theme FROM patients WHERE id_patient='$id'");

    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
    $data =array(
        'message' => "Get Data Daily Health Succses",
        'data' => $result_set,
        'status' => "200"
      );

      echo json_encode($data);
?>
