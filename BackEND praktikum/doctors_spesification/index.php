<?php
require_once 'php_action/db_connect.php';
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title> Database Spesifikasi Dokter</title>

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
  <h3>Database Spesifikasi Dokter</h3>
  <table border="1" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>id_doct</th>
        <th>specializ</th>
        <th>hospital</th>
        <th>domicile</th>
        <th>educational_background</th>
        <th>experience</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM doctors_spesification WHERE active = 1";
      $result = $connect->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo"<tr>
            <td>".$row['id_doct']."</td>
            <td>".$row['specializ']."</td>
            <td>".$row['hospital']."</td>
            <td>".$row['domicile']."</td>
            <td>".$row['educational_background']."</td>
            <td>".$row['experience']."</td>
            <td>
              <a href='edit.php?id_doct=".$row['id_doct']."'><button type='button'>Edit</button></a>
              <a href='remove.php?id_doct=".$row['id_doct']."'><button type='button'>Remove</button></a>
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
