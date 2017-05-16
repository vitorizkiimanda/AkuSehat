<?php
    

    header('Access-Control-Allow-Origin; *');
    header('Access-Control-Methods; GET, POST, PUT, OPTIONS');
    header('Access-Control-Allow-Header; Content-Type');

  include 'db_connect.php';
    $id_doct=$_GET['doctor'];
    $id_pat=$_GET['patient'];
    $query_user = mysqli_query($connect, "INSERT INTO patients_doctors (id_doct, id_pat, active) VALUES ('$id_doct', '$id_pat', '1')");
        
    if($query_user){
        $data =array(
            'message' => "Choosing Success",
            'status' => "200"
        );
    }
    else{
        $data =array(
            'message' => "Choosing Failed",
            'status' => "404"
        );
    }

echo json_encode($data);

?>