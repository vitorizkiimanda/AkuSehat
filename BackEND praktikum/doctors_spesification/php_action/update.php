<?php
require_once 'db_connect.php';

if($_POST){
  $id_doct = $_POST['id_doct'];
  $specializ = $_POST['specializ'];
  $hospital = $_POST['hospital'];
  $domicile =$_POST['domicile'];
  $educational_background = $_POST['educational_background'];
  $experience = $_POST['experience'];

  $sql = "UPDATE doctors_spesification SET specializ = '$specializ', hospital = '$hospital', domicile = '$domicile', educational_background = '$educational_background', experience = '$experience' WHERE id_doct = {$id_doct}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully Updated! </p>";
    echo "<a href='../edit.php?id_doctor=".$id_doct."'><button type='button'>Back</button></a>";
    echo "<a href='../index.php'><button type='button'>Home</button></a>";
  } else {
    echo "Error while updating record :".$connect->connect_error;
  }
  $connect->close();
}
 ?>
