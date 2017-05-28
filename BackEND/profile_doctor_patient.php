<?php
  include 'db_connect.php';

    $id=$_GET['patient'];

    $query_user = mysqli_query($connect, "SELECT name_doctor, email_doctor, specialization, no_tel_doctor, hospital, educational_background, experience FROM patients P JOIN patients_doctors A JOIN doctors D JOIN doctors_spesification S WHERE A.id_pat=P.id_patient && A.id_doct=D.id_doctor && S.id_doct=D.id_doctor && P.id_patient='$id'");
    if(mysqli_num_rows($query_user)){
        $result_set = array();
        while($result =mysqli_fetch_assoc($query_user)){
            $result_set[]=$result;
        }
        $data =array(
            'message' => "Succses",
            'data' => $result_set,
            'status' => "200"
        );      
    }
    else {
        $query_user = mysqli_query($connect, "SELECT name_doctor, email_doctor, specialization, no_tel_doctor FROM patients P JOIN patients_doctors A JOIN doctors D WHERE A.id_pat=P.id_patient && A.id_doct=D.id_doctor && P.id_patient='$id'");    
        if(mysqli_num_rows($query_user)){
            $result_set = array();
            while($result =mysqli_fetch_assoc($query_user)){
                $result_set[]=$result;
            }
            $data =array(
                'message' => "Succsess, but doctor don't have data spesification!",
                'data' => $result_set,
                'status' => "200"
            );       
        }
        else {
            $data =array(
                'message' => "Failed!",
                'status' => "404"
            ); 
        }
    }

    echo json_encode($data);
?>