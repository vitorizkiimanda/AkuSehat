<?php
include 'db_connect.php';
  $id=$_GET['patient'];
  $postdata = file_get_contents("php://input");
  if (isset($postdata)) {
      $request = json_decode($postdata);
      $img = $request->file;
  }
  $fname = $id;
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $img = base64_decode($img);
  $subFolder = "/images/patients";
  $dir = __DIR__ .$subFolder ; // Full Path
  is_dir($dir) || @mkdir($dir) || die("Can't Create folder");

  file_put_contents($dir . DIRECTORY_SEPARATOR . $fname.".jpg", $img);
  $imagePath = $subFolder."/".$fname.".jpg";

//  print $imagePath;
  $query = mysqli_query($connect,"UPDATE patients SET profile_pict_pat = '$imagePath' WHERE id_patient='$id' ");
  $query_select = mysqli_query($connect, "SELECT * FROM patients WHERE id_patient='$id'");
  if(mysqli_num_rows($query_select)){
    $row=mysqli_fetch_assoc($query_select);
          $data =array(
              'message' => "Upload Success",
              'data' => $row,
              'status' => "200"
          );
  }
  else{
    $data =array(
        'message' => "Upload Failed!",
        'status' => "404"
    );
  }

  echo json_encode($data);




//$file = $_POST['file'];




 ?>
