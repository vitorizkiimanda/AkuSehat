<?php
require_once 'php_action/db_connect.php';
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title> Database Pembayaran</title>

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
  <h3> Database Pembayaran</h3>
  <table border="1" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>id_accounting</th>
        <th>id_pat</th>
        <th>year</th>
        <th>month</th>
        <th>verified</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM accounting WHERE active = 1";
      $result = $connect->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo"<tr>
            <td>".$row['id_accounting']."</td>
            <td>".$row['id_pat']."</td>
            <td>".$row['year']."</td>
            <td>".$row['month']."</td>
            <td>".$row['verified']."</td>
            <td>
              <a href='edit.php?id_accounting=".$row['id_accounting']."'><button type='button'>Edit</button></a>
              <a href='remove.php?id_accounting=".$row['id_accounting']."'><button type='button'>Remove</button></a>
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
