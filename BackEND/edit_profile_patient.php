<?php

  include 'db_connect.php';

    $id=$_GET['patient'];
    
    $query_user = mysqli_query($connect, "SELECT * FROM patients P JOIN health_history H WHERE id_patient=id_pat AND id_pat='$id'");        
    if(mysqli_num_rows($query_user)){
        $row=mysqli_fetch_assoc($query_user);
            $data =array(
                'message' => "Wah datanya lengkap",
                'status' => "200"
            );
        $postdata = file_get_contents("php://input");
    $name_patient = "";
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
    $disease_type= "";
    $hospitalized_type= "";
    $hospitalized_long= "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name_patient = $request->name;
        $address =$request->address_patient;
        // $sex_patient = $request->sex;
        $no_tel_patient = $request->no_tel_patient;
        $age= $request->age;
        $weight = $request->weight;
        $height= $request->height;
        $allergy= $request->allergy;
        $disability= $request->disability;
        $operation= $request->operation;
        $description= $request->description; 
    }
    $query_register = mysqli_query($connect, "UPDATE patients SET name_patient='$name_patient', address_patient='$address',  no_tel_patient='$no_tel_patient' WHERE id_patient='$id'");
                                
    $query_register = mysqli_query($connect, "UPDATE health_history SET age='$age', weight='$weight', height='$height', disability='$disability', allergy='$allergy', operation='$operation', description='$description' WHERE id_pat='$id' ");
            
    $query_select = mysqli_query($connect, "SELECT * FROM patients P JOIN health_history H WHERE id_patient=id_pat AND id_pat='$id'");      
        $row=mysqli_fetch_assoc($query_select);
            $data =array(
                'message' => "Wah datanya lengkap",
                'data' => $row,
                'status' => "200"
            );
        
    }
    else {
        $query_user = mysqli_query($connect, "SELECT * FROM patients WHERE id_patient='$id'");        
        if(mysqli_num_rows($query_user)){
           
            
            //update database patient
            $postdata = file_get_contents("php://input");
            $name_patient = "";
            $address ="";
            $sex_patient = "";
            $no_tel_patient = "";
            $age = "";
            $weight = "";
            if (isset($postdata)) {
                $request = json_decode($postdata);
                $name_patient = $request->name;
                $address =$request->address_patient;
                // $sex_patient = $request->sex;
                $no_tel_patient = $request->no_tel_patient;
                $age= $request->age;
                $weight = $request->weight;
                $height= $request->height;
                $disability= $request->disability;
                $operation= $request->operation;
                $description= $request->description;
                
            }
            mysqli_query($connect, "UPDATE patients SET name_patient='$name_patient', address_patient='$address',  no_tel_patient='$no_tel_patient' WHERE id_patient='$id' ");
            
            mysqli_query($connect, "INSERT INTO health_history (id_history,id_pat, age, weight, height, allergy, disability, operation, description ,active) VALUES ('$id','$id','$age','$weight', '$height', '$allergy', '$disability','$operation','$description','1'");
            
           $query_select = mysqli_query($connect, "SELECT * FROM patients P JOIN health_history H WHERE id_patient=id_pat AND id_pat='$id'");      
        $row=mysqli_fetch_assoc($query_select);
            $data =array(
                'message' => "Wah datanya lengkap",
                'data' => $row,
                'status' => "200"
            ); 
        }
        else {
            $data =array(
                'message' => "Failed!",
                'status' => "404"
            ); 
        }
    }
    echo json_encode($data);
    

    
    
?>