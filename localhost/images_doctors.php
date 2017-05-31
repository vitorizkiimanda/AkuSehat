<?php
    include 'db_connect.php';
    $id = $_GET['doctor'];

    $query_check = mysqli_query($connect, "SELECT profile_pict_doct FROM doctors WHERE id_doctor='$id'");

    $result_set = array();
    while($result =mysqli_fetch_assoc($query_check)){
        $result_set[]=$result;
    }

    if(mysqli_num_rows($query_check)){
      $data =array(
          'message' => "Send Profile Picture Doctors Succses",
          'data' => $result_set,
          'status' => "200"
      );
    }
    else{
      $data =array(
          'message' => "Send Profile Picture Doctors Failed",
          'status' => "404"
      );
    }

    echo json_encode($data);

?>
