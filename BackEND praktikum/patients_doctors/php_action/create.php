<?php

require_once 'db_connect.php';

if($_POST) {
  $id_doct = $_POST['id_doct'];
  $id_pat = $_POST['id_pat'];

  $sql = "INSERT INTO patients_doctors (id_doct,id_pat,active) VALUES ('$id_doct','$id_pat',1)";
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
