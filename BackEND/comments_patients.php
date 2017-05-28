<?php

  include 'db_connect.php';

    $id_pat=$_GET['id_pat']; //get id
    $id_daily_h=$_GET['id_daily_h']; //get id

    $postdata = file_get_contents("php://input");
    $comments = "";
    $date="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $comments=$request->comments;
        $date=$request->date;
    }
  //  $date=date_format($date_daily, "Y-m-d");
    $query_comments = mysqli_query($connect, "INSERT INTO comments (id_daily_h, comments, date, id_doct, id_pat, active) VALUES ('$id_daily_h','$comments','$date','$id_pat','','1')");


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
