<?php
require_once 'db_connect.php';

if($_POST){
  $name_doctor = $_POST['name_doctor'];
  $email_doctor = $_POST['email_doctor'];
  $password_doctor = $_POST['password_doctor'];
  $no_account_doctor =$_POST['no_account_doctor'];
  $bank_doctor =$_POST['bank_doctor'];
  $sex_doctor = $_POST['sex_doctor'];
  $specialization = $_POST['specialization'];
  $sum_patient = $_POST['sum_patient'];
  $no_tel_doctor = $_POST['no_tel_doctor'];

  $id_doctor = $_POST['id_doctor'];

  $sql = "UPDATE doctors SET name_doctor = '$name_doctor', email_doctor = '$email_doctor', password_doctor = '$password_doctor', no_account_doctor = '$no_account_doctor', bank_doctor = '$bank_doctor', sex_doctor = '$sex_doctor', specialization = '$specialization',sum_patient = '$sum_patient', no_tel_doctor = '$no_tel_doctor' WHERE id_doctor = {$id_doctor}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully Updated! </p>";
    echo "<a href='../edit.php?id_doctor=".$id_doctor."'><button type='button'>Back</button></a>";
    echo "<a href='../index.php'><button type='button'>Home</button></a>";
  } else {
    echo "Error while updating record :".$connect->connect_error;
  }
  $connect->close();
}
 ?>
