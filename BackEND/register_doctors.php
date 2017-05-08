<?php

  include 'db_connect.php';

    $postdata = file_get_contents("php://input");
    $name_doctor = "";
    $email_doctor = "";
    $password_doctor = "";
    $sex = "";
    $no_tel_doctor = ""; 
    $bank="";
    $no_account="";
    $specialization = "";
    $sum_patient ="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name_doctor = $request->name;
        $email_doctor = $request->email;
        $password_doctor = $request->password;
        $sex = $request->sex;
        $no_tel_doctor = $request->telephone;
        $bank=$request->bank;
        $no_account=$request->bank_number;
        $specialization = $request->specialization;
        $sum_patient =$request->patients_max;
    }
    $encrypt_password = md5($password_doctor);

    $query_register = mysqli_query($connect, "INSERT INTO doctors (id_doctor,name_doctor,email_doctor, password_doctor, bank_doctor,  no_account_doctor, sex_doctor,  specialization, sum_patient, no_tel_doctor,  active) VALUES ('','$name_doctor','$email_doctor','$encrypt_password', '$bank', '$no_account', '$sex', '$specialization', '$sum_patient', '$no_tel_doctor',  '1')");

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