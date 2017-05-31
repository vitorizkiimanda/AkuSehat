<?php

  include 'db_connect.php';
    $id=$_GET['patient'];

    $query_user = mysqli_query($connect, "SELECT * FROM daily_health_data JOIN patients WHERE id_pat=id_patient && id_pat='$id' ORDER BY  date_daily DESC");

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

      echo json_encode($data);
?>
