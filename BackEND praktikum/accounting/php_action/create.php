<?php

require_once 'db_connect.php';

if($_POST) {
  $id_pat = $_POST['id_pat'];
  $year = $_POST['year'];
  $month =$_POST['month'];
  $photo_size = $_FILES['pic_acc']['size'];
  $photo_loc = $_FILES['pic_acc']['tmp_name'];
  $photo_name = $_FILES['pic_acc']['name'];
  $photo_type = $_FILES['pic_acc']['type'];

  $path = "../../images/accounting".$photo_name;
  $new_name = $id_pat.'-'.time().'.jpg';

  if($photo_type == "image/jpeg" || $photo_type == "image/png"){
    if($photo_size <= 1000000){
      if(move_uploaded_file($photo_loc, $path)) {
        $sql = "INSERT INTO accounting (id_pat,id_accounting,year,month,verified,pic_acc,active) VALUES
        ('$id_pat','','$year','$month','','$new_name','1')";

      if($connect->query($sql) === TRUE){
        echo "<p>New Record Successfully Created!</p>";
        echo "<a href='../create.php'><button type='button'>Back</button></a>";
        echo "<a href='../index.php'><button type='button'>Home</button></a>";
      } else {
        echo "Error" .$sql.' '.$connect->connect_error;
        echo "Maaf, terjadi kesalahan saat mencoba menyimpan";
        echo "<br><a href='../create.php'>Kembali Ke Form</a>";
      }
    } else {
      echo "Maaf, gambar gagal untuk diupload.";
      echo "<br><a href='../create.php'>Kembali Ke Form</a>";
    }
  } else {
    echo "Maaf, ukuran gambar yang diupload tidak boleh lebih dari 1MB";
          echo "<br><a href='../create.php'>Kembali Ke Form</a>";
  }
} else {
  echo "Maaf, Tipe gambar yang diupload harus JPG / JPEG / PNG.";
  echo "<br><a href='../create.php'>Kembali Ke Form</a>";
  }

  $connect->close();
}
 ?>
