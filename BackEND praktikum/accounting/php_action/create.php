<?php

require_once 'db_connect.php';

if($_POST) {
  $id_pat = $_POST['id_pat'];
  $year = $_POST['year'];
  $month =$_POST['month'];

  $sql = "INSERT INTO accounting (id_pat,id_accounting,year,month,verified,active) VALUES ('$id_pat','','$year','$month','',1)";
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
