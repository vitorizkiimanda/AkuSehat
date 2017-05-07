<?php

  include 'db_connect.php';

    $id=$_GET['patient']; //get id

    $postdata = file_get_contents("php://input");
    $date="";
    $tension_sistol = "";
    $tension_diastol="";
    $sleep_duration="";
    $daily_description="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $date=$request->date_daily;
        $tension_sistol=$request->sistol;
        $tension_diastol=$request->diastol;
        $sleep_duration=$request->duration;
        $daily_description=$request->description;
    }
    
    $query_register = mysqli_query($connect, "INSERT INTO daily_health_data (id_pat,date_daily, tension_sistol,tension_diastol,sleep_duration,daily_description,active) VALUES ('$id','$date','$tension_sistol','$tension_diastol','$sleep_duration','$daily_description','1')");
    

    if($query_register){
        $data =array(
            'message' => "Daily Health Success",
            'status' => "200"
        );
    }
    else{
        $data =array(
            'message' => "Daily Health Failed",
            'status' => "404"
        );
    }
    echo json_encode($data);
?>