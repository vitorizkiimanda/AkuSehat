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

    $query_login = mysqli_query($connect,   "SELECT * FROM doctors JOIN doctors_spesification WHERE   email_doctor='$username' AND password_doctor='$encrypt_password' AND id_doctor=id_doct ");
    if(mysqli_num_rows($query_login)){

        $row=mysqli_fetch_assoc($query_login);
        $data =array(
            'message' => "Login Success",
            'data' => $row,
            'status' => "200"
        );
    }
    else{
        $query_login = mysqli_query($connect,   "SELECT * FROM doctors WHERE email_doctor='$username' AND password_doctor='$encrypt_password'");
        if(mysqli_num_rows($query_login)){

            $row=mysqli_fetch_assoc($query_login);
            $data =array(
                'message' => "Login Success, but haven't Spesification",
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
    }

    echo json_encode($data);
?>
