<?php
require_once 'db_connect.php';

if($_POST) {
  $id_patient = $_POST['id_history'];

  $sql = "UPDATE id_history SET active = 2 where id_history = {$id_history}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully removed!</p>";
    echo "<a href='../index.php'><button type='button'>Back</button></a>";
  } else {
    echo "Error updating record : ".$connect->error;
  }
  $connect->close();
}
 ?>
