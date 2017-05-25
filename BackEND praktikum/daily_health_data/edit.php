<?php
require_once 'php_action/db_connect.php';

if($_GET['id_daily_health']){
  $id_daily_health = $_GET['id_daily_health'];

  $sql = "SELECT * FROM daily_health_data WHERE id_daily_health = {$id_daily_health}";
  $result = $connect->query($sql);

  $data = $result->fetch_assoc();

  $connect->close();

}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Edit Database Spesifikasi Harian</title>

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
    <legend>Edit Database Spesifikasi Harian</legend>
    <form action="php_action/update.php" method="post">
      <table cellspacing="0" cellpadding="0">
        <tr>
          <th>Tensi Sistol</th>
          <td><input type="number" name="tension_sistol" placeholder="Tensi sistol" value="<?php echo $data['tension_sistol']?>"/></td>
        </tr>
        <tr>
          <th>Tensi Diastol</th>
          <td><input type="number" name="tension_diastol" placeholder="Tensi diastol" value="<?php echo $data['tension_diastol']?>"/></td>
        </tr>
        <tr>
          <tr>
            <th>Durasi Tidur</th>
            <td><input type="number" name="sleep_duration" placeholder="Durasi tidur" value="<?php echo $data['sleep_duration']?>"/></td>
          </tr>
          <tr>
            <tr>
              <th>Deskripsi Harian</th>
              <td><input type="text" name="daily_description" placeholder="Deskripsi Harian" value="<?php echo $data['daily_description']?>"/></td>
            </tr>
            <tr>
              <input type="hidden" name="id_pat" value=<?php echo $data['id_daily_health']?> />
              <td><button type="submit">Save Changes</button></td>
              <td><a href="index.php"><button type="button">Back</button></td>
            </tr>
      </table>
    </form>

</fieldset>

</body>
</html>
