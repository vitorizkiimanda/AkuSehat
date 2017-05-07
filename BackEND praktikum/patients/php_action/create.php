<?php

require_once 'db_connect.php';

if($_POST) {
  $name_patient = $_POST['name_patient'];
  $email_patient = $_POST['email_patient'];
  $password_patient = $_POST['password_patient'];
  $no_account_patient =$_POST['no_account_patient'];
  $sex_patient = $_POST['sex_patient'];
  $bank_patient = $_POST['bank_patient'];
  $no_tel_patient = $_POST['no_tel_patient'];


  $sql = "INSERT INTO patients (id_patient,name_patient,email_patient, password_patient, no_account_patient, sex_patient, bank_patient, no_tel_patient,active) VALUES ('','$name_patient','$email_patient','$password_patient', '$no_account_patient', '$sex_patient', '$bank_patient', '$no_tel_patient','1')";
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
