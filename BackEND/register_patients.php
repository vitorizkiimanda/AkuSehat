<?php

  include 'db_connect.php';
    $query_select=mysqli_query($connect, "SELECT id_patient FROM patients ORDER BY id_patient DESC");

    $id=mysqli_fetch_assoc($query_select);
    $id= $id['id_patient']+1;

    $postdata = file_get_contents("php://input");
    $name_patient = "";
    $email_patient = "";
    $password_patient = "";
    $address ="";
    $sex_patient = "";
    $no_tel_patient = "";
    $age = "";
    $weight = "";
    $height="";
    $allergy="";
    $disability= "";
    $operation= "";
    $description= "";
    $choose_doctor="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name_patient = $request->name;
        $email_patient = $request->email;
        $password_patient = $request->password;
        $sex_patient = $request->sex;
        $no_tel_patient = $request->telephone;
        $address =$request->address;
        $age= $request->age;
        $weight = $request->weight;
        $height= $request->height;
        $allergy= $request->allergy;
        $operation= $request->operation;
        $disability= $request->disability;
        $description= $request->description;
        $choose_doctor= $request->choose_doctor;
    }
    $encrypt_password = md5($password_patient);

    $query_patient=mysqli_query($connect, "INSERT INTO patients (id_patient,name_patient,email_patient, password_patient, address_patient, sex_patient, no_tel_patient,active) VALUES ('$id','$name_patient','$email_patient','$encrypt_password', '$address', '$sex_patient', '$no_tel_patient','1')");
    if($query_patient){
        $query_history = mysqli_query($connect, "INSERT INTO health_history (id_history,id_pat, age, weight, height, allergy, disability, operation, description, active) VALUES ('$id','$id','$age','$weight', '$height', '$allergy', '$disability','$operation','$description','1')");

        if($query_history){
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
    else{
        $data =array(
            'message' => "Database Patients Failed",
            'status' => "404"
        );
    }


    //choosing Doctors
    $id_doct=mysqli_query($connect, "SELECT id_doctor FROM doctors WHERE specialization='$choose_doctor' ORDER BY  rand()");
    $id_doct=mysqli_fetch_assoc($id_doct);
    //$id_doct['id_doct'];
    $id_doct=$id_doct['id_doctor'];

    mysqli_query($connect, "INSERT INTO patients_doctors (id_doct, id_pat, active) VALUES ('$id_doct','$id','1')");

    echo json_encode($data);
?>
