<?php

  include 'db_connect.php';

    $id=$_GET['doctor'];
    $postdata = file_get_contents("php://input");

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $theme= $request->theme;
    }
        $query=mysqli_query($connect, "UPDATE doctors SET theme='$theme' WHERE id_doctor='$id'");
        $query_select = mysqli_query($connect, "SELECT * FROM doctors JOIN doctors_spesification WHERE id_doctor='$id' AND id_doctor=id_doct ");

        if(mysqli_num_rows($query_select)){
          $row=mysqli_fetch_assoc($query_select);

          $data =array(
              'message' => "Choose Theme Success",
              'data' => $row,
              'status' => "200"
          );
        }
        else{
              $data =array(
                  'message' => "Choose Theme Failed",
                  'status' => "404"
            );
        }
    echo json_encode($data);
?>
