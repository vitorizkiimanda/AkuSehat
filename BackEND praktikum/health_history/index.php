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
   <title>Database Health History</title>

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
  <h3>Database Health History</h3>
  <table border="1" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>id_history</th>
        <th>id_patient</th>
        <th>age</th>
        <th>weight</th>
        <th>height</th>
        <th>allergy</th>
        <th>disability</th>
        <th>operation</th>
        <th>description</th>
        <th>option</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM health_history WHERE active = 1";
      $result = $connect->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo"<tr>
            <td>".$row['id_history']."</td>
            <td>".$row['id_pat']."</td>
            <td>".$row['age']."</td>
            <td>".$row['weight']."</td>
            <td>".$row['height']."</td>
            <td>".$row['allergy']."</td>
            <td>".$row['disability']."</td>
            <td>".$row['operation']."</td>
            <td>".$row['description']."</td>
            <td>
              <a href='edit.php?id_history=".$row['id_history']."'><button type='button'>Edit</button></a>
              <a href='remove.php?id_history=".$row['id_history']."'><button type='button'>Remove</button></a>
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
