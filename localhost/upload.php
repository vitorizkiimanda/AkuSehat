
<?php
include 'db_connect.php';

$target_path = "images/";

$target_path = $target_path . basename( $_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    echo "Upload and move success";
} else {
echo $target_path;
    echo "There was an error uploading the file, please try again!";
}


$postdata = file_get_contents("php://input");

if (isset($postdata)) {
    $request = json_decode($postdata);
    $profile_pict_pat = $reuest->file;
  }

    $photo_size = $_FILES['file']['size'];
    $photo_loc = $_FILES['file']['tmp_name'];
    $photo_name = $_FILES['file']['name'];
    $photo_type = $_FILES['file']['type'];

    $new_name = $name_doctor.'-'.time().'.jpg';
    $path = "../../images/doctors/".$new_name;

    if($photo_type == "image/jpeg" || $photo_type == "image/png"){
      if($photo_size <= 1000000){
        if(move_uploaded_file($photo_loc, $path)) {
          $query = ($connect,"UPDATE patients SET profile_pict_pat = '$new_name' WHERE ");



?>
