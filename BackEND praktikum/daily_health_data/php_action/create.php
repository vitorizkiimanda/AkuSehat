<?php

require_once 'db_connect.php';

if($_POST) {
  $id_pat = $_POST['id_pat'];
    $date_daily = $_POST['date_daily'];
  $tension_sistol = $_POST['tension_sistol'];
  $tension_diastol = $_POST['tension_diastol'];
  $sleep_duration =$_POST['sleep_duration'];
  $daily_description = $_POST['daily_description'];


  $sql = "INSERT INTO daily_health_data (id_pat,date_daily, tension_sistol,tension_diastol,sleep_duration,daily_description,active) VALUES ('$id_pat','$date_daily','$tension_sistol','$tension_diastol','$sleep_duration','$daily_description',1)";
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
