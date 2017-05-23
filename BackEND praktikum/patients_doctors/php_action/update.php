<?php
require_once 'db_connect.php';

if($_POST){
  $id_doct = $_POST['id_doct'];
  $id_pat = $_POST['id_pat'];

  $sql = "UPDATE patients_doctors SET id_doct = '$id_doct' WHERE id_pat = {$id_pat}";
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
