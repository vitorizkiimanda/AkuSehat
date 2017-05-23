<?php
require_once 'db_connect.php';

if($_POST) {
  $id_pat = $_POST['id_pat'];
  $date_daily = $_POST['date_daily'];

  $sql = "UPDATE daily_health_data SET active = 2 where id_pat = {$id_pat} && date_daily = {$date_daily}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully removed!</p>";
    echo "<a href='../index.php'><button type='button'>Back</button></a>";
  } else {
    echo "Error updating record : ".$connect->error;
  }
  $connect->close();
}
 ?>
