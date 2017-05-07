<?php

require_once 'db_connect.php';

if($_POST) {
  $id_doct = $_POST['id_doct'];
  $specializ = $_POST['specializ'];
  $hospital = $_POST['hospital'];
  $domicile =$_POST['domicile'];
  $educational_background = $_POST['educational_background'];
  $experience = $_POST['experience'];

  $sql = "INSERT INTO doctors_spesification (id_doct,specializ,hospital,domicile,educational_background,experience,active) VALUES ('$id_doct','$specializ','$hospital','$domicile','$educational_background','$experience',1)";
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
