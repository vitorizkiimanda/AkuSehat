<?php

  include 'db_connect.php';
    $id=$_GET['patient'];
    $query_user = mysqli_query($connect, "SELECT * FROM patients JOIN health_history WHERE id_patient=id_pat AND id_pat='$id'");

    if(mysqli_num_rows($query_user)){
      $result_set = array();
      while($result =mysqli_fetch_assoc($query_user)){
          $result_set[]=$result;
      }
      $data =array(
          'message' => "Get Data Health History Succses",
          'data' => $result_set,
          'status' => "200"
      );
    }
    else{
      $data =array(
          'message' => "Get Data Health History Failed",
          //'data' => $result_set,
          'status' => "404"
      );
    }


echo json_encode($data);

?>
