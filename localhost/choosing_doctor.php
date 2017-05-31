<?php

  include 'db_connect.php';

    $id=$_GET['patient'];
    $postdata = file_get_contents("php://input");
    $choose_doctor="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $choose_doctor= $request->choose_doctor;
    }
        $query=mysqli_query($connect, "SELECT id_doctor,sum FROM doctors WHERE specialization='$choose_doctor' && sum_patient>sum ORDER BY sum ASC ");
        $query=mysqli_fetch_assoc($query);
        $id_doct=$query['id_doctor'];
        $sum=$query['sum']+1;

        $cek=mysqli_query($connect, "INSERT INTO patients_doctors (id_doct, id_pat, active) VALUES ('$id_doct','$id','1')");
        if($cek){
              mysqli_query($connect, "UPDATE doctors SET sum='$sum'");

              $query_select = mysqli_query($connect, "SELECT id_patient,name_patient,email_patient,address_patient,sex_patient,no_tel_patient,id_doctor,name_doctor,no_tel_doctor FROM patients JOIN patients_doctors JOIN doctors WHERE id_patient=id_pat AND id_patient='$id' AND id_doct=id_doctor");
              $row=mysqli_fetch_assoc($query_select);

              $data =array(
                  'message' => "Choose Doctor Success",
                  'data' => $row,
                  'status' => "200"
              );
        }
        else{
              $data =array(
                  'message' => "Choose Doctor Failed",
                    'status' => "404"
            );
    }
    echo json_encode($data);
?>
