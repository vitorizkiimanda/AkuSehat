<?php
require_once 'php_action/db_connect.php';

if($_GET['id_doct']){
  $id_doct = $_GET['id_doct'];

  $sql = "SELECT * FROM doctors_spesification WHERE id_doct = {$id_doct}";
  $result = $connect->query($sql);

  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Edit Data Spesifikasi Dokter</title>

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
    <legend>Edit Data Spesifikasi Dokter</legend>
    <form action="php_action/update.php" method="post">
      <table cellspacing="0" cellpadding="0">
          <th>Spesializ</th>
          <td><select name="specializ" required>
                <option value="">Pilih Spesialisasi</option>
                <option value="THT">THT</option>
                <option value="Mata">Mata</option>
                <option value="Jantung">Jantung</option>
             </select></td>
        </tr>
        <tr>
          <th>Rumah Sakit</th>
          <td><input type="text" name="hospital" placeholder="Rumah sakit tempat Anda bertugas" value="<?php echo $data['hospital']?>"/></td>
        </tr>
        <tr>
          <th>Domisili</th>
          <td><input type="text" name="domicile" placeholder="Kota tempat Anda tinggal" value="<?php echo $data['domicile']?>"/></td>
        </tr>
        <tr>
          <tr>
            <th>Riwayat Pendidikan</th>
            <td><input type="text" name="educational_background" placeholder="Riwayat pendidikan Anda" value="<?php echo $data['educational_background']?>"/></td>
          </tr>
          <tr>
            <tr>
              <th>Pengalaman</th>
              <td><input type="text" name="experience" placeholder="Pengalaman Anda dalam bidang kesehatan" value="<?php echo $data['experience']?>"/></td>
            </tr>
            <tr>
            <tr>
              <input type="hidden" name="id_doct" value=<?php echo $data['id_doct']?> />
              <td><button type="submit">Save Changes</button></td>
              <td><a href="index.php"><button type="button">Back</button></td>
            </tr>
      </table>
    </form>

</fieldset>

</body>
</html>
