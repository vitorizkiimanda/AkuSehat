<?php
require_once 'db_connect.php';

if($_POST){
  $year = $_POST['year'];
  $month = $_POST['month'];

  $sql = "UPDATE accounting SET year = '$year', month = '$month' WHERE id_accounting = {$id_accounting}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully Updated! </p>";
    echo "<a href='../edit.php?id_accounting=".$id_accounting."'><button type='button'>Back</button></a>";
    echo "<a href='../index.php'><button type='button'>Home</button></a>";
  } else {
    echo "Error while updating record :".$connect->connect_error;
  }
  $connect->close();
}
 ?>
