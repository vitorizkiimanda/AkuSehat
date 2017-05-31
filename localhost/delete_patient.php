<?php
include 'db_connect.php';
  $id_pat=$_GET['patient'];

  //ngurangin sum di tabel doctors
  $query_sum = mysqli_query($connect, "SELECT sum FROM patients_doctors JOIN doctors WHERE id_doctor=id_doct AND id_pat='$id_pat'");
  $sum=mysqli_fetch_assoc($query_sum);
  $sum=$sum['sum']-1;

  $query_user = mysqli_query($connect, "DELETE FROM patients_doctors WHERE id_pat='$id_pat'");
  if($query_user){
    mysqli_query($connect, "UPDATE doctors SET sum='$sum'");
    $data =array(
        'message' => "Patients Delete Succses",
        'status' => "200"
    );
  }
  else{
    $data =array(
        'message' => "Patients Delete Failed",
        'status' => "404"
    );
  }
  echo json_encode($data);
?>
