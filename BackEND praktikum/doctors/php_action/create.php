<?php

require_once 'db_connect.php';

if($_POST) {
  $name_doctor = $_POST['name_doctor'];
  $email_doctor = $_POST['email_doctor'];
  $hash_password_doctor = $_POST['password_doctor'];
  $password_doctor = hash('sha256',$hash_password_doctor);
  $no_account_doctor =$_POST['no_account_doctor'];
  $bank_doctor =$_POST['bank_doctor'];
  $sex_doctor = $_POST['sex_doctor'];
  $specialization = $_POST['specialization'];
  $sum_patient = $_POST['sum_patient'];
  $no_tel_doctor = $_POST['no_tel_doctor'];


  $sql = "INSERT INTO doctors (id_doctor,name_doctor,email_doctor, password_doctor, no_account_doctor, bank_doctor, sex_doctor, specialization,sum_patient, no_tel_doctor,active) VALUES ('','$name_doctor','$email_doctor','$password_doctor', '$no_account_doctor', '$bank_doctor', '$sex_doctor', '$specialization','$sum_patient', '$no_tel_doctor',1)";
  if($connect->query($sql) === TRUE) {
    echo "<p>New Record Successfully Created!</p>";
    echo "<a href='../create.php'><button type='button'>Back</button></a>";
    echo "<a href='../index.php'><button type='button'>Home</button></a>";
  } else {
    echo "Error" .$sql.' '.$connect->connect_error;
  }
  $connect->close();
}
 ?>
