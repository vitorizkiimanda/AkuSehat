<?php

require_once 'db_connect.php';

if($_POST) {
  $disease_type = $_POST['disease_type'];
  $hospitalized_date = $_POST['hospitalized_date'];
  $hospitalized_long = $_POST['hospitalized_long'];


  $sql = "INSERT INTO patients_disease (id_history,disease_type,hospitalized_date, hospitalized_long, active) VALUES ('','$disease_type','$hospitalized_date', '$hospitalized_long','1')";
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
