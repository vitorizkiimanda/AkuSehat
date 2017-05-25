<?php
require_once 'db_connect.php';

if($_POST){
  $name_doctor = $_POST['name_doctor'];
  $email_doctor = $_POST['email_doctor'];
  $hash_password_doctor = $_POST['password_doctor'];
  $password_doctor = hash('sha256',$hash_password_doctor);
  $no_account_doctor =$_POST['no_account_doctor'];
  $bank_doctor =$_POST['bank_doctor'];
  $sex_doctor = $_POST['sex_doctor'];
  $specialization = $_POST['specialization'];
  $sum_patient = $_POST['sum_patient'];
  $no_tel_doctor = $_POST['no_tel_doctor'];
  $photo_size = $_FILES['profile_pict_doc']['size'];
  $photo_loc = $_FILES['profile_pict_doc']['tmp_name'];
  $photo_name = $_FILES['profile_pict_doc']['name'];
  $photo_type = $_FILES['profile_pict_doc']['type'];

  $id_doctor = $_POST['id_doctor'];

   $new_name = $name_doctor.'-'.time().'.jpg';
   $path = "../../images/doctors/".$new_name;

   if($photo_type == "image/jpeg" || $photo_type == "image/png"){
     if($photo_size <= 1000000){
       if(move_uploaded_file($photo_loc, $path)) {
         $sql = "UPDATE doctors SET name_doctor = '$name_doctor', email_doctor = '$email_doctor', password_doctor = '$password_doctor', no_account_doctor = '$no_account_doctor', bank_doctor = '$bank_doctor', sex_doctor = '$sex_doctor', specialization = '$specialization',sum_patient = '$sum_patient', no_tel_doctor = '$no_tel_doctor', profile_pict_doc = '$new_name' WHERE id_doctor = {$id_doctor}";
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
   echo "<br><a href='../create.php'>Kembali Ke Form</a>";
   }

   $connect->close();
 }
  ?>
