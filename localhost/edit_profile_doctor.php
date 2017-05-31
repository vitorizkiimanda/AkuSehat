<?php

  include 'db_connect.php';

    $id=$_GET['doctor'];
    $query_user = mysqli_query($connect, "SELECT * FROM doctors JOIN doctors_spesification WHERE id_doctor=id_doct AND id_doctor='$id'");    
    if(mysqli_num_rows($query_user)){
        
        $postdata = file_get_contents("php://input");
        $name_doctor = "";
        $bank_doctor = "";
        $no_account_doctor = "";
        $specialization = "";
        $sum_patient ="";
        $no_tel_doctor="";
        $hospital ="";
        $domicile = "";
        $educational_background = "";
        $experience = "";
        if (isset($postdata)) {
            $request = json_decode($postdata);
            $name_doctor = $request->name;
            $bank_doctor = $request->bank_doctor;
            $no_account_doctor = $request->no_account_doctor;
            $specialization = $request->specialization;
            $sum_patient =$request->sum_patient;
            $no_tel_doctor=$request->no_tel_doctor;
            $hospital =$request->hospital;
            $domicile = $request->domicile;
            $educational_background = $request->educational_background;
            $experience = $request->experience;
        }
        $query_register = mysqli_query($connect, "UPDATE doctors JOIN doctors_spesification SET name_doctor='$name_doctor', bank_doctor='$bank_doctor', no_account_doctor='$no_account_doctor',  sum_patient='$sum_patient',  specialization='$specialization', no_tel_doctor='$no_tel_doctor', hospital='$hospital', domicile='$domicile', educational_background='$educational_background', experience='$experience' WHERE id_doctor='$id' AND id_doctor=id_doct  ");
        
        $query_select = mysqli_query($connect, "SELECT * FROM doctors JOIN doctors_spesification WHERE id_doctor=id_doct AND id_doctor='$id'");    
        $row=mysqli_fetch_assoc($query_select);
            $data =array(
                'message' => "Wah datanya lengkap",
                'data' => $row,
                'status' => "200"
            );
    }
        
    else{
        $query_user = mysqli_query($connect, "SELECT * FROM doctors WHERE id_doctor='$id'");    
        if(mysqli_num_rows($query_user)){
            
            $postdata = file_get_contents("php://input");
            $name_doctor = "";
            $bank_doctor = "";
            $no_account_doctor = "";
            $specialization = "";
            $sum_patient ="";
            $no_tel_doctor="";
            $hospital ="";
            $domicile = "";
            $educational_background = "";
            $experience = "";
            if (isset($postdata)) {
                $request = json_decode($postdata);
                $name_doctor = $request->name;
                $bank_doctor = $request->bank_doctor;
                $no_account_doctor = $request->no_account_doctor;
                $specialization = $request->specialization;
                $sum_patient =$request->sum_patient;
                $no_tel_doctor=$request->no_tel_doctor;
                $hospital =$request->hospital;
                $domicile = $request->domicile;
                $educational_background = $request->educational_background;
                $experience = $request->experience;
            }
            $query_register = mysqli_query($connect, "UPDATE doctors SET name_doctor='$name_doctor', bank_doctor='$bank_doctor', no_account_doctor='$no_account_doctor', sum_patient='$sum_patient',  specialization='$specialization', no_tel_doctor='$no_tel_doctor' WHERE id_doctor='$id'");
            
            $query_register = mysqli_query($connect, "INSERT INTO doctors_spesification (id_doct, hospital, domicile, educational_background, experience, active) VALUES ('$id','$hospital', '$domicile', '$educational_background', '$experience','1')");
            
            $query_select = mysqli_query($connect, "SELECT * FROM doctors JOIN doctors_spesification WHERE id_doctor=id_doct AND id_doctor='$id'");    
            $row=mysqli_fetch_assoc($query_select);
            $data =array(
                'message' => "Wah datanya kurang lengkap",
                'data' => $row,
                'status' => "200"
            );
        }
        
        else{
            $data =array(
                'message' => "Update Failed",
                'status' => "404"
            );
        }
    }
    
        
    
    echo json_encode($data);
?>