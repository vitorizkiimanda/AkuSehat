<?php
require_once 'db_connect.php';

if($_POST){
  $id_daily_health = $_POST['id_daily_health'];
  $id_pat = $_POST['id_pat'];
  $date_daily = $_POST['date_daily'];
  $tension_sistol = $_POST['tension_sistol'];
  $tension_diastol = $_POST['tension_diastol'];
  $sleep_duration =$_POST['sleep_duration'];
  $daily_description = $_POST['daily_description'];

  $sql = "UPDATE daily_health_data SET tension_sistol = '$tension_sistol', tension_diastol = '$tension_diastol', sleep_duration = '$sleep_duration', daily_description = '$daily_description' WHERE id_daily_health = {$id_daily_health}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully Updated! </p>";
    echo "<a href='../edit.php?id_pat=".$id_pat."'><button type='button'>Back</button></a>";
    echo "<a href='../index.php'><button type='button'>Home</button></a>";
  } else {
    echo "Error while updating record :".$connect->connect_error;
  }
  $connect->close();
}
 ?>
