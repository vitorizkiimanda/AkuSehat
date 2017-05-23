<?php
require_once 'db_connect.php';

if($_POST){
  $name_patient = $_POST['name_patient'];
  $email_patient = $_POST['email_patient'];
  $hash_password_patient = $_POST['password_patient'];
  $password_patient = hash('sha256', $hash_password_patient);
  $address_patient =$_POST['address_patient'];
  $sex_patient = $_POST['sex_patient'];
  $bank_patient = $_POST['bank_patient'];
  $no_tel_patient = $_POST['no_tel_patient'];

  $id_patient = $_POST['id_patient'];

  $sql = "UPDATE patients SET name_patient = '$name_patient', email_patient = '$email_patient', password_patient = '$password_patient', address_patient = '$address_patient', sex_patient = '$sex_patient', bank_patient = '$bank_patient', no_tel_patient = '$no_tel_patient' WHERE id_patient = {$id_patient}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully Updated! </p>";
    echo "<a href='../edit.php?id_patient=".$id_patient."'><button type='button'>Back</button></a>";
    echo "<a href='../index.php'><button type='button'>Home</button></a>";
  } else {
    echo "Error while updating record :".$connect->connect_error;
  }
  $connect->close();
}
 ?>
