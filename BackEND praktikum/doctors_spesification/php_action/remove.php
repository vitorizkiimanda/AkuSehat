<?php
require_once 'db_connect.php';

if($_POST) {
  $id_doct = $_POST['id_doct'];

  $sql = "UPDATE doctors_spesification SET active = 2 where id_doct = {$id_doct}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully removed!</p>";
    echo "<a href='../index.php'><button type='button'>Back</button></a>";
  } else {
    echo "Error updating record : ".$connect->error;
  }
  $connect->close();
}
 ?>
