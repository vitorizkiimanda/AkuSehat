<?php

  include 'db_connect.php';

    $id=$_GET['patient']; //get id
    $id_daily_h=$_GET['id_daily_h']; //get id

    $query_name = mysqli_query($connect, "SELECT name_patient FROM patients WHERE id_patient='$id'");
    $query_name = mysqli_fetch_assoc($query_name);
    $name = $query_name['name_patient'];
    $postdata = file_get_contents("php://input");
    $comments = "";
    $date="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $comments=$request->comment_patient;
        $date=$request->date;
    }
  //  $date=date_format($date_daily, "Y-m-d");
    $query_comments = mysqli_query($connect, "INSERT INTO comments (id_daily_h, comments, date, sender, type, active) VALUES ('$id_daily_h','$comments','$date','$name', '2','1')");


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
