<?php

  include 'db_connect.php';

    $postdata = file_get_contents("php://input");
    $name_patient = "";
    $email_patient = "";
    $password_patient = "";
    $address ="";
    $sex_patient = "";
    $no_tel_patient = ""; 
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name_patient = $request->name;
        $email_patient = $request->email;
        $password_patient = $request->password;
        $address =$request->address;
        $sex_patient = $request->sex;
        $no_tel_patient = $request->telephone;
    }
    $encrypt_password = md5($password_patient);
    if($name_patient=="" or $email_patient=="" or $password_patient=="" or $address=="" or $sex_patient=="" or $no_tel_patient==""){
        $data=array(
        'message'=>"isinya kurang lengkap",
        'status'=>"404"
            );
        echo json_encode($data);
        return 0;
    }
        
    $query_register = mysqli_query($connect, "INSERT INTO patients (id_patient,name_patient,email_patient, password_patient, address_patient, sex_patient, no_tel_patient,active) VALUES ('','$name_patient','$email_patient','$encrypt_password', '$address', '$sex_patient', '$no_tel_patient','1')");

    if($query_register){
        $data =array(
            'message' => "Register Success",
            'status' => "200"
        );
    }
    else{
        $data =array(
            'message' => "Register Failed",
            'status' => "404"
        );
    }
    echo json_encode($data);
?>