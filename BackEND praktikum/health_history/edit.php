<?php
require_once 'php_action/db_connect.php';

if($_GET['id_history']){
  $id_history = $_GET['id_history'];

  $sql = "SELECT * FROM health_history WHERE id_history = {$id_history}";
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
        <th>Umur</th>
        <td><input type="number" name="age" placeholder="Umur" value="<?php echo $data['age']?>"/></td>
      </tr>
      <tr>
        <th>Berat Badan</th>
        <td><input type="number" name="weight" placeholder="Berat Badan" value="<?php echo $data['weight']?>"/></td>
      </tr>
      <tr>
        <th>Tinggi Badan</th>
        <td><input type="number" name="height" placeholder="Tinggi Badan" value="<?php echo $data['height']?>"/></td>
      </tr>
        <tr>
        <th>Alergi</th>
        <td><input type="text" name="allergy" placeholder="Alergi" value="<?php echo $data['allergy']?>"/></td>
      </tr>
      <tr>
        <th>Cacat</th>
        <td><input type="text" name="disability" placeholder="Cacat" value="<?php echo $data['disability']?>"/></td>
      </tr>
      <tr>
        <th>Operasi</th>
        <td><input type="text" name="operation" placeholder="Operasi" value="<?php echo $data['operation']?>"/></td>
      </tr>
        <tr>
        <th>Deskripsi</th>
        <td><input type="text" name="description" placeholder="Deskripsi" value="<?php echo $data['description']?>"/></td>
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
