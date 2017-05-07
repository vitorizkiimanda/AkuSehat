<?php
require_once 'db_connect.php';

if($_POST){
  $age = $_POST['age'];
  $weight = $_POST['weight'];
  $height = $_POST['height'];
  $allergy =$_POST['allergy'];
  $disability = $_POST['disability'];
  $operation = $_POST['operation'];
  $description = $_POST['description'];

  $id_history = $_POST['id_history'];

  $sql = "UPDATE health_history SET age = '$age', weight = '$weight', height = '$height', allergy = '$allergy', disability = '$disability', operation = '$operation', description = '$description' WHERE id_history = {$id_history}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully Updated! </p>";
    echo "<a href='../edit.php?id_history=".$id_history."'><button type='button'>Back</button></a>";
    echo "<a href='../index.php'><button type='button'>Home</button></a>";
  } else {
    echo "Error while updating record :".$connect->connect_error;
  }
  $connect->close();
}
 ?>
