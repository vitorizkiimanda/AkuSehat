<?php
require_once 'php_action/db_connect.php';
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title> Database Kesehatan Harian</title>

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
  <h3> Database Kesehatan Harian</h3>
  <table border="1" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>id_pat</th>
          <th>date</th>
        <th>tension_sistol</th>
        <th>tension_diastol</th>
        <th>sleep_duration</th>
        <th>daily_description</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM daily_health_data WHERE active = 1";
      $result = $connect->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo"<tr>
            <td>".$row['id_pat']."</td>
            <td>".$row['date_daily']."</td>
            <td>".$row['tension_sistol']."</td>
            <td>".$row['tension_diastol']."</td>
            <td>".$row['sleep_duration']."</td>
            <td>".$row['daily_description']."</td>
            <td>
              <a href='edit.php?id_pat=".$row['id_pat']."'><button type='button'>Edit</button></a>
              <a href='remove.php?id_pat=".$row['id_pat']."'><button type='button'>Remove</button></a>
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
