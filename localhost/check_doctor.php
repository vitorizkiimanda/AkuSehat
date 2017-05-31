<?php
    include 'db_connect.php';
    $id = $_GET['patient'];

    $query_check = mysqli_query($connect, "SELECT * FROM patients_doctors WHERE id_pat='$id'");

    if(mysqli_num_rows($query_check)){
      $data =array(
          'message' => "Patient have a Doctor",
          'status' => "200"
      );
    }
    else{
      $data =array(
          'message' => "Patient don't have a Doctor",
          'status' => "503"
      );
    }

    echo json_encode($data);

?>
