<?php

  include 'db_connect.php';
  $query_select=mysqli_query($connect, "SELECT id_doctor FROM doctors ORDER BY id_doctor DESC");

  $id=mysqli_fetch_assoc($query_select);
  $id= $id['id_doctor']+1;

    $postdata = file_get_contents("php://input");
    $name_doctor = "";
    $email_doctor = "";
    $password_doctor = "";
    $no_tel_doctor = "";
  //  $bank="";
  //  $no_account="";
    $specialization = "";
    $sum_patient ="";
    $hospital ="";
   // $domicile = "";
    $educational_background = "";
    $experience = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name_doctor = $request->name;
        $email_doctor = $request->email;
        $password_doctor = $request->password;
        $no_tel_doctor = $request->telephone;
        $sex_doctor = $request->sex;
      //  $bank=$request->bank;
      //  $no_account=$request->bank_number;
        $specialization = $request->specialization;
        $sum_patient =$request->patients_max;
        $hospital =$request->hospital;
        //$domicile = $request->domicile;
        $educational_background = $request->educational_background;
        $experience = $request->experience;
    }
    $encrypt_password = md5($password_doctor);

    $query_regis = mysqli_query($connect, "SELECT * FROM doctors WHERE email_doctor='$email_doctor' AND password_doctor='$encrypt_password'");



    if(mysqli_num_rows($query_regis)){
      $data =array(
          'message' => "Email Already Taken!",
          'status' => "409"
      );
    }
    else{
        $query_register = mysqli_query($connect, "INSERT INTO doctors (id_doctor,name_doctor,email_doctor, password_doctor, sex_doctor, specialization, sum_patient, no_tel_doctor, sum, theme, active) VALUES ('$id','$name_doctor','$email_doctor','$encrypt_password', '$sex_doctor','$specialization', '$sum_patient', '$no_tel_doctor', '0', 'primary', '1')");


        $query_regis = mysqli_query($connect, "INSERT INTO doctors_spesification (id_doct, hospital, domicile, educational_background, experience, active) VALUES ('$id','$hospital', '', '$educational_background', '$experience','1')");

        if($query_regis){
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

    }
    echo json_encode($data);
?>
