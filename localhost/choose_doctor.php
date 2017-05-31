<?php
  include 'db_connect.php';
    $query_user = mysqli_query($connect, "SELECT DISTINCT specialization FROM doctors WHERE sum_patient>sum");
    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
    $data =array(
        'message' => "Get Data Doctors Succses",
        'data' => $result_set,
        'status' => "200"
    );

    echo json_encode($data);

?>
