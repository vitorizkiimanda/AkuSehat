<?php

  include 'db_connect.php';

    $id=$_GET['patient'];
    $postdata = file_get_contents("php://input");

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $theme= $request->theme;
    }
        $query=mysqli_query($connect, "UPDATE patients SET theme='$theme' WHERE id_patient='$id'");
        $query_select = mysqli_query($connect, "SELECT id_patient,name_patient,email_patient,address_patient,sex_patient,no_tel_patient,id_doctor,name_doctor,no_tel_doctor, P.theme FROM patients P  JOIN patients_doctors A JOIN doctors D WHERE id_patient=id_pat AND id_doct=id_doctor AND id_patient='$id'");
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
