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
   <title>Associative Table</title>

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
  <table border="1" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>id_doct</th>
        <th>is_pat</th>
        <th>name_pat</th>
        <th>no_tel_pat</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM patients_doctors WHERE active = 1";
      $result = $connect->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo"<tr>
            <td>".$row['id_doct']."</td>
            <td>".$row['id_pat']."</td>
            <td>".$row['name_pat']."</td>
            <td>".$row['no_tel_pat']."</td>
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
