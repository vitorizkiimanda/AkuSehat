<?php

  include 'db_connect.php';

    $id=$_GET['doctor']; //get id
    $id_daily_h=$_GET['id_daily_h']; //get id

    $query_name = mysqli_query($connect, "SELECT name_doctor FROM doctors WHERE id_doctor='$id'");
    $query_name = mysqli_fetch_assoc($query_name);
    $name = $query_name['name_doctor'];
    $name = 'dr. '.$name;

    $postdata = file_get_contents("php://input");
    $comments = "";
    $date="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $comments=$request->comment_doctor;
        $date=$request->date;
    }
  //  $date=date_format($date_daily, "Y-m-d");
    $query_comments = mysqli_query($connect, "INSERT INTO comments (id_daily_h, comments, date, sender, type, active) VALUES ('$id_daily_h','$comments','$date','$name','1','1')");


        if($query_comments){
            $data =array(
                'message' => "COMMENT Daily Health Success",
                //'data' => $row,
                'status' => "200"
            );
        }
        else{
            $data =array(
                'message' => "COMMENT Daily Health Failed",
                'status' => "404"
            );
        }

    echo json_encode($data);

?>
