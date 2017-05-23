<?php
require_once 'php_action/db_connect.php';

if($_GET['id_pat']){
  $id_pat = $_GET['id_pat'];

  $sql = "SELECT * FROM patients_doctors WHERE id_pat = {$id_pat}";
  $result = $connect->query($sql);

  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Edit Patients Doctors</title>

   <style type="text/css">
   fieldset{
     margin: auto;
     margin-top: 100px;
     width: 100%;
   }
   table tr th {
     padding-top: 20px;
   }
   </style>
 </head>
 <body>

  <fieldset>
    <legend>Edit Associative Table</legend>
    <form action="php_action/update.php" method="post">
      <table cellspacing="0" cellpadding="0">
          <tr>
            <th>Id Dokter</th>
            <td><input type="number" name="id_doct" placeholder="id dokter" value="<?php echo $data['id_doct']?>"/></td>
          </tr>
          <tr>
            <th>Id Pasien</th>
            <td><input type="number" name="id_pat" placeholder="id pasien" value="<?php echo $data['id_pat']?>"/></td>
          </tr>
            <tr>
              <input type="hidden" name="id_pat" value=<?php echo $data['id_pat']?> />
              <td><button type="submit">Save Changes</button></td>
              <td><a href="index.php"><button type="button">Back</button></td>
            </tr>
      </table>
    </form>

</fieldset>

</body>
</html>
