<?php

  include 'db_connect.php';

    $postdata = file_get_contents("php://input");
    $username="";
    $password="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $username = $request->email;
        $password = $request->password;
    }
    $encrypt_password = md5($password);

    $query_login = mysqli_query($connect,   "SELECT * FROM patients P, daily_health_data D, health_history H, accounting A, patients_disease S WHERE   P.email_patient='$username' AND P.password_patient='$encrypt_password' AND P.id_patient=D.id_pat AND P.id_patient=H.id_pat AND P.id_patient=A.id_pat AND H.id_history=S.id_history ");

    if(mysqli_num_rows($query_login)){
        
        $row=mysqli_fetch_assoc($query_login);
        $data =array(
            'message' => "Login Success",
            'data' => $row,
            'status' => "200"
        );
    }
    else{
        $data =array(
            'message' => "Login Failed, Email or Password Wrong",
            'status' => "404"
        );
    }
    echo json_encode($data);
?>