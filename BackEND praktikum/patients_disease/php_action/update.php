<?php
require_once 'db_connect.php';

if($_POST){
  $id_history = $_POST['id_history'];
  $disease_type = $_POST['disease_type'];
  $hospitalized_date = $_POST['hospitalized_date'];
  $hospitalized_long =$_POST['hospitalized_long'];

  $sql = "UPDATE patients_disease SET disease_type = '$disease_type', hospitalized_date = '$hospitalized_date', hospitalized_long = '$hospitalized_long' WHERE id_history = {$id_history}";
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
