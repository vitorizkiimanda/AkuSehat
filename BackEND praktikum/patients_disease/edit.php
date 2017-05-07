<?php
require_once 'php_action/db_connect.php';

if($_GET['id_history']){
  $id_history = $_GET['id_history'];

  $sql = "SELECT * FROM patients_disease WHERE id_history = {$id_history}";
  $result = $connect->query($sql);

  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Edit Data</title>

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
    <legend>Edit Data</legend>
    <form action="php_action/update.php" method="post">
      <table cellspacing="0" cellpadding="0">
      <tr>
        <th>Jenis Penyakit</th>
        <td><input type="text" name="disease_type" placeholder="Jenis Penyakit"  value="<?php echo $data['disease_type']?>"/></td>
      </tr>
        <tr>
        <th>Tanggal Dirawat</th>
        <td><input type="date" name="hospitalized_date" placeholder="Tanggal Dirawat"  value="<?php echo $data['hospitalize_date']?>"/></td>
      </tr>
        <tr>
        <th>Lama Dirawat</th>
        <td><input type="number" name="hospitalized_long" placeholder="Lama Dirawat"  value="<?php echo $data['hospitalize_long']?>"/></td>
      </tr>
        <tr>
          <input type="hidden" name="id_history" value=<?php echo $data['id_history']?> />
          <td><button type="submit">Save Changes</button></td>
          <td><a href="index.php"><button type="button">Back</button></td>
        </tr>
      </table>
    </form>

</fieldset>

</body>
</html>
