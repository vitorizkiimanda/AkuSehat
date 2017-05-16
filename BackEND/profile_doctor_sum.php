<?php
    
  include 'db_connect.php';

    $id=$_GET['doctor'];

    $query_user = mysqli_query($connect, "SELECT COUNT(id_pat) AS sum FROM patients_doctors P JOIN doctors D JOIN doctors_spesification S WHERE P.id_doct=D.id_doctor && S.id_doct=D.id_doctor && D.id_doctor='$id'");
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
        $query_user = mysqli_query($connect, "SELECT COUNT(id_pat) AS sum FROM patients_doctors P JOIN doctors D WHERE P.id_doct=D.id_doctor  && D.id_doctor='$id'");    
        if(mysqli_num_rows($query_user)){
            $result_set = array();
            while($result =mysqli_fetch_assoc($query_user)){
                $result_set[]=$result;
            }
            $data =array(
                'message' => "Succsess, but doctor don't have patients and data spesification!",
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