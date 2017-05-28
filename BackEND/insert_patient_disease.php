<?php

  include 'db_connect.php';
    
    $id=$_GET['patient'];
    $postdata = file_get_contents("php://input");
    $disease_type = "";
    $hospitalized_date = "";
    $hospitalized_long = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $disease_type = $request->disease_type;
        $hospitalized_date = $request->hospitalized_date;
        $hospitalized_long = $request->hospitalized_long;
    
    }
    $query_register = mysqli_query($connect, "INSERT INTO patients_disease (id_history,disease_type,hospitalized_date, hospitalized_long, active) VALUES ('$id','$disease_type','$hospitalized_date','$hospitalized_long','1')");

    if($query_register){
        $data =array(
            'message' => "Insert Patient Disease Success",
            'status' => "200"
        );
    }
    else{
        $data =array(
            'message' => "Insert Patient Disease Failed",
            'status' => "404"
        );
    }
    echo json_encode($data);
?>