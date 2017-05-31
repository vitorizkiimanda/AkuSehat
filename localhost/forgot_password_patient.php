<?php

  include 'db_connect.php';

  $postdata = file_get_contents("php://input");
  $email="";

  if(isset($postdata)) {
    $request = json_decode($postdata);
    $email = $request->email;
  }

  $query_forgot = mysqli_query($connect, "SELECT * FROM patients WHERE email_patient = '$email' ");

  $data  = mysqli_fetch_assoc($query_forgot);
  $cek = mysqli_num_rows($query_forgot);
  $email = strip_tags($data['email_patient']);
  $name_patient = strip_tags($data['name_patient']);
  $password_patient =trim(strip_tags($data['password_patient']));
  $password = mysql_real_escape_string(htmlentities((md5($password_patient))));

  if (mysqli_num_rows($query_forgot)) {
  // title atau subject email
  $title  = "Lupa Password?";
  // isi pesan email disertai password
  $message  = "Halo ".$name_patient." Kamu lupa ya? \n\n
  DETAIL AKUN ANDA :\n Email : ".$email." \n
  Kata sandi: ".$password."\n\n
  \n\n PESAN NO-REPLY";
  // header email berisi alamat pengirim
  $header = "From: 12akusehat<no-reply@domain.com>";
  // mengirim email
  $sentEmail = mail($email, $title, $message, $header);
  // cek status pengiriman email
  //if ($sentEmail) {
    $dataan =array(
        'message' => "Udah dikirim ke email ya",
        'status' => "200"
    );
  // }
  // else{
  //   $dataan =array(
  //       'message' => "Hmm Failed",
  //       'status' => "404"
  //   );
  // }
}

  echo json_encode($dataan);

?>
