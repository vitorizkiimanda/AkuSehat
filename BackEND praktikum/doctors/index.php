<?php
require_once 'php_action/db_connect.php';
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title> Database Dokter</title>

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
  <h3> Database Dokter</h3>
  <table border="1" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>password</th>
        <th>no_account</th>
        <th>bank_doctor</th>
        <th>sex</th>
        <th>specialization</th>
        <th>sum_patient</th>
        <th>no_tel</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM doctors WHERE active = 1";
      $result = $connect->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo"<tr>
            <td>".$row['id_doctor']."</td>
            <td>".$row['name_doctor']."</td>
            <td>".$row['email_doctor']."</td>
            <td>".$row['password_doctor']."</td>
            <td>".$row['no_account_doctor']."</td>
            <td>".$row['bank_doctor']."</td>
            <td>".$row['sex_doctor']."</td>
            <td>".$row['specialization']."</td>
            <td>".$row['sum_patient']."</td>
            <td>".$row['no_tel_doctor']."</td>
            <td>
              <a href='edit.php?id_doctor=".$row['id_doctor']."'><button type='button'>Edit</button></a>
              <a href='remove.php?id_doctor=".$row['id_doctor']."'><button type='button'>Remove</button></a>
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
