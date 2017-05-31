<?php

  include 'db_connect';

  if (isset($postdata)) {
      $request = json_decode($postdata);
      $username = $request->email;
  }
  $query = mysqli_query($connect,   "SELECT * FROM patients WHERE email_patient='$username'");
  if(mysqli_num_rows($query_login)){
      
  }


  function getRandomString($length) {
      $validCharacters = "ABCDEFGHIJKLMNPQRSTUXYVWZ123456789";
      $validCharNumber = strlen($validCharacters);
      $result = "";

      for ($i = 0; $i < $length; $i++) {
          $index = mt_rand(0, $validCharNumber - 1);
          $result .= $validCharacters[$index];
      }
  	   return $result;
  }
?>
