<?php
require_once 'db_connect.php';

if($_POST) {
  $id_doctor = $_POST['id_doctor'];

  $sql = "UPDATE doctors SET active = 2 where id_doctor = {$id_doctor}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully removed!</p>";
    echo "<a href='../index.php'><button type='button'>Back</button></a>";
  } else {
    echo "Error updating record : ".$connect->error;
  }
  $connect->close();
}
 ?>
