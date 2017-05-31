<?php

  include 'db_connect.php';
    $id=$_GET['patient'];

    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $date_daily=$request->date_daily;
    }

    $date=date_create($date_daily);
    $year  = date_format($date, "Y");
    $month = date_format($date, "m");

    $query_user = mysqli_query($connect, "SELECT * FROM daily_health_data JOIN patients WHERE id_pat=id_patient && id_pat='$id' && date_daily LIKE '$year-$month-%' ORDER BY  date_daily DESC");
    if(mysqli_num_rows($query_user)){
      $result_set = array();
      while($result =mysqli_fetch_assoc($query_user)){
        $id_daily = $result['id_daily_h'];
        $query_comment = mysqli_query($connect, "SELECT COUNT(comments) AS comment_counter FROM comments WHERE id_daily_h='$id_daily'");
        if(mysqli_num_rows($query_comment)){
          $counter = mysqli_fetch_assoc($query_comment);
          $result['comment_counter'] = $counter['comment_counter'];
        }
        else{
          $result['comment_counter']  = "0";
        }

        $result_set[]=$result;
    }
      $data =array(
          'message' => "Get Data Daily Health Succses",
          'data' => $result_set,
          'status' => "200"
        );

    }
    else{
        $result_set[]=null;

      $data =array(
          'message' => "Get Data Daily Health Failed",
          'data' => $result_set,
          'status' => "404"
        );
    }

      echo json_encode($data);
?>
