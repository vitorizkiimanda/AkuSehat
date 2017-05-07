<?php

require_once 'db_connect.php';

if($_POST) {
  $id_pat = $_POST['id_pat'];
  $age = $_POST['age'];
  $weight = $_POST['weight'];
  $height = $_POST['height'];
  $allergy =$_POST['allergy'];
  $disability = $_POST['disability'];
  $operation = $_POST['operation'];
  $description = $_POST['description'];


  $sql = "INSERT INTO health_history (id_history, id_pat, age, weight, height, allergy, disability, operation, description, active) VALUES ('','$id_pat','$age', '$weight', '$height', '$allergy', '$disability', '$operation', '$description', '1')";
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
