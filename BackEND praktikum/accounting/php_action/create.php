<?php

require_once 'db_connect.php';

if($_POST) {
  $id_pat = $_POST['id_pat'];
  $year = $_POST['year'];
  $month =$_POST['month'];
  $folder = "images/post";
  $upload_dir = "../images/post";
  $photo_size = $_FILES["pic_acc"]["size"];
  $photo_loc = $_FILES["pic_acc"]["tmp_name"];
  $photo_name = $_FILES["pic_acc"]["name"];

  if($photo_size < 1000000){
    move_uploaded_file($photo_loc, "$upload_dir/$photo_name");
    $sql = "INSERT INTO accounting (id_pat,id_accounting,year,month,verified,pic_acc,active) VALUES ('$id_pat','','$year','$month','','$folder/$photo_name',1)";
    mysqli_query($connect, $sql);
  }

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
