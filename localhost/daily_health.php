<?php

  include 'db_connect.php';

    $id=$_GET['patient']; //get id

    $postdata = file_get_contents("php://input");
    $date_daily="";
    $tension_sistol = "";
    $tension_diastol="";
    $sleep_duration="";
    $daily_description="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $date_daily=$request->date_daily;
        $tension_sistol=$request->sistol;
        $tension_diastol=$request->diastol;
        $sleep_duration=$request->duration;
        $daily_description=$request->description;
    }
    $date_daily=date_create($date_daily);
    $date=date_format($date_daily, "Y-m-d");

    $query_select = mysqli_query($connect,  "SELECT * FROM daily_health_data WHERE id_pat='$id' AND date_daily='$date'");

    if(mysqli_num_rows($query_select)){

        //$query_delete = mysqli_query($connect, "DELETE FROM daily_health_data WHERE id_pat='$id' AND date_daily='$date'");
        //$row=mysqli_fetch_assoc($query_select);
        //$query_register = mysqli_query($connect, "INSERT INTO daily_health_data (id_daily_h,id_pat,date_daily, tension_sistol,tension_diastol,sleep_duration,daily_description,active) VALUES ('','$id','$date','$tension_sistol','$tension_diastol','$sleep_duration','$daily_description','1')");
        $query_register = mysqli_query($connect, "UPDATE daily_health_data SET tension_sistol='$tension_sistol', tension_diastol='$tension_diastol', sleep_duration='$sleep_duration', daily_description='$daily_description' WHERE id_pat='$id' AND date_daily='$date' ");

        if($query_register){
            $data =array(
                'message' => "UPDATE Daily Health Success",
                //'data' => $row,
                'status' => "200"
            );
        }
        else{
            $data =array(
                'message' => "UPDATE Daily Health Failed",
                'status' => "404"
            );
        }
    }
    else{

        $query_register = mysqli_query($connect, "INSERT INTO daily_health_data (id_daily_h,id_pat,date_daily, tension_sistol,tension_diastol,sleep_duration,daily_description,active) VALUES ('','$id','$date','$tension_sistol','$tension_diastol','$sleep_duration','$daily_description','1')");


        if($query_register){
            $data =array(
                'message' => "INSERT Daily Health Success",
                'status' => "200"
            );
        }
        else{
            $data =array(
                'message' => "INSERT Daily Health Failed",
                'status' => "404"
            );
        }
    }

    echo json_encode($data);

?>
