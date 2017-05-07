<?php
require_once 'db_connect.php';

if($_POST){
  $id_doct = $_POST['id_doct'];
  $no_tel_pat = $_POST['no_tel_pat']

  $sql = "UPDATE patients_doctors SET id_doct = '$id_doct', no_tel_pat = '$no_tel_pat' WHERE id_pat = {$id_pat}";
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
