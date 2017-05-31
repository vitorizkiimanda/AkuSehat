<?php

  include 'db_connect.php';
    $id=$_GET['id_daily_h'];

    $query_user = mysqli_query($connect, "SELECT * FROM comments WHERE id_daily_h='$id' ORDER BY date ASC");

    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
    $data =array(
        'message' => "Get Data COMMENT Succses",
        'data' => $result_set,
        'status' => "200"
      );

      echo json_encode($data);
?>
