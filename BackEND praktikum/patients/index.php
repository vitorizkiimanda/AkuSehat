<?php
require_once 'php_action/db_connect.php';
session_start();

  if($_SESSION['id']==1){
  }
  else{
  header('location:../index.php');
      exit();
  }
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <a href="../logout.php"style="float: right;">Logout</a>
   <title>Database Patient</title>

   <style type="text/css">
    .manageMember{
      width: 100%;
      margin: auto;
    }
    table {
      width: 100%;
      margin-top: 20px;
    }
  </style>

</head>
<body>
<div class="manageMember">
  <a href="create.php"><button type="button">Add Data</button></a>
  <a href="http://localhost/akusehat/"><button type="button">Beranda AkuSehat!</button></a>
  <h3>Database Pasien</h3>
  <table border="1" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>id_patient</th>
        <th>name_patient</th>
        <th>email_patient</th>
        <th>password_patient</th>
        <th>address_patient</th>
        <th>sex_patient</th>
        <th>bank_patient</th>
        <th>no_tel_patient</th>
        <th>profile_pict_pat</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM patients WHERE active = 1";
      $result = $connect->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo"<tr>
            <td>".$row['id_patient']."</td>
            <td>".$row['name_patient']."</td>
            <td>".$row['email_patient']."</td>
            <td>".$row['password_patient']."</td>
            <td>".$row['address_patient']."</td>
            <td>".$row['sex_patient']."</td>
            <td>".$row['bank_patient']."</td>
            <td>".$row['no_tel_patient']."</td>
            <td>".$row['profile_pict_pat']."</td>
            <td>
              <a href='edit.php?id_patient=".$row['id_patient']."'><button type='button'>Edit</button></a>
              <a href='remove.php?id_patient=".$row['id_patient']."'><button type='button'>Remove</button></a>
          </tr>";
        }
      } else {
          echo "<tr><td colspan='11'><center>No Data Available</center></td></tr>";
      }
       ?>
    </tbody>
  </table>
</div>

</body>
</html>
