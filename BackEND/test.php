<?php

include 'db_connect.php';

$id=$_GET['patient'];
  $postdata = file_get_contents("php://input");

  if (isset($postdata)) {
      $request = json_decode($postdata);
      $profile_pict_pat = $reuest->profile_pict_pat;
    }

  $photo_size = $_FILES['profile_pict_pat']['size'];
  $photo_loc = $_FILES['profile_pict_pat']['tmp_name'];
  $photo_name = $_FILES['profile_pict_pat']['name'];
  $photo_type = $_FILES['profile_pict_pat']['type'];

  $new_name = $name_doctor.'-'.time().'.jpg';
  $path = "../../images/doctors/".$new_name;

  if($photo_type == "image/jpeg" || $photo_type == "image/png"){
    if($photo_size <= 1000000){
      if(move_uploaded_file($photo_loc, $path)) {
        $query = ($connect,"UPDATE patients SET profile_pict_pat = '$new_name' WHERE ");


?>
