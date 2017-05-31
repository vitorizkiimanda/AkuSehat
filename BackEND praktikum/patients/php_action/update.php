<?php
require_once 'db_connect.php';

if($_POST){
  $name_patient = $_POST['name_patient'];
  $email_patient = $_POST['email_patient'];
  $hash_password_patient = $_POST['password_patient'];
  $password_patient = md5($hash_password_patient);
  $address_patient =$_POST['address_patient'];
  $sex_patient = $_POST['sex_patient'];
  $bank_patient = $_POST['bank_patient'];
  $no_tel_patient = $_POST['no_tel_patient'];
  $photo_size = $_FILES['profile_pict_pat']['size'];
  $photo_loc = $_FILES['profile_pict_pat']['tmp_name'];
  $photo_name = $_FILES['profile_pict_pat']['name'];
  $photo_type = $_FILES['profile_pict_pat']['type'];

  $id_patient = $_POST['id_patient'];


  $new_name = $name_patient.'-'.time().'.jpg';
  $path = "../../images/patients/".$new_name;

  if($photo_type == "image/jpeg" || $photo_type == "image/png"){
    if($photo_size <= 1000000){
      if(move_uploaded_file($photo_loc, $path)) {
        $sql = "UPDATE patients SET name_patient = '$name_patient', email_patient = '$email_patient', password_patient = '$password_patient', address_patient = '$address_patient', sex_patient = '$sex_patient', bank_patient = '$bank_patient', no_tel_patient = '$no_tel_patient', profile_pict_pat='$new_name' WHERE id_patient = {$id_patient}";

      if($connect->query($sql) === TRUE){
        echo "<p>New Record Successfully Created!</p>";
        echo "<a href='../edit.php'><button type='button'>Back</button></a>";
        echo "<a href='../index.php'><button type='button'>Home</button></a>";
      } else {
        echo "Error" .$sql.' '.$connect->connect_error;
        echo "Maaf, terjadi kesalahan saat mencoba menyimpan";
        echo "<br><a href='../edit.php'>Kembali Ke Form</a>";
      }
    } else {
      echo "Maaf, gambar gagal untuk diupload.";
      echo "<br><a href='../edit.php'>Kembali Ke Form</a>";
    }
  } else {
    echo "Maaf, ukuran gambar yang diupload tidak boleh lebih dari 1MB";
          echo "<br><a href='../edit.php'>Kembali Ke Form</a>";
  }
} else {
  echo "Maaf, Tipe gambar yang diupload harus JPG / JPEG / PNG.";
  echo "<br><a href='../edit.php'>Kembali Ke Form</a>";
  }

  $connect->close();
}
 ?>
