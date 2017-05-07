<?php
require_once 'db_connect.php';

if($_POST) {
  $id_patient = $_POST['id_patient'];

  $sql = "UPDATE patients SET active = 2 where id_patient = {$id_patient}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully removed!</p>";
    echo "<a href='../index.php'><button type='button'>Back</button></a>";
  } else {
    echo "Error updating record : ".$connect->error;
  }
  $connect->close();
}
 ?>
