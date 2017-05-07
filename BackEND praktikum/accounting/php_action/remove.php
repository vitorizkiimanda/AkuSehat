<?php
require_once 'db_connect.php';

if($_POST) {
  $id_pat = $_POST['id_pat'];

  $sql = "UPDATE accounting SET active = 2 where id_accounting = {$id_accounting}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully removed!</p>";
    echo "<a href='../index.php'><button type='button'>Back</button></a>";
  } else {
    echo "Error updating record : ".$connect->error;
  }
  $connect->close();
}
 ?>
