<?php
require_once 'php_action/db_connect.php';

if($_GET['id_accounting']){
  $id_accounting = $_GET['id_accounting'];

  $sql = "SELECT * FROM accounting WHERE id_accounting = {$id_accounting}";
  $result = $connect->query($sql);

  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Edit Data Pembayaran</title>

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
    <legend>Edit Data Pembayaran</legend>
    <form action="php_action/update.php" method="post">
      <table cellspacing="0" cellpadding="0">
          <tr>
            <th>Bulan</th>
            <td><select name="month" required>
                  <option value="">Pilih Bulan</option>
                  <option value=1>Januari</option>
                  <option value=2>Februari</option>
                  <option value=3>Maret</option>
                  <option value=4>April</option>
                  <option value=5>Mei</option>
                  <option value=6>Juni</option>
                  <option value=7>Juli</option>
                  <option value=8>Agustus</option>
                  <option value=9>September</option>
                  <option value=10>Oktober</option>
                  <option value=11>November</option>
                  <option value=12>Desember</option>
               </select></td>
          </tr>
          <tr>
            <th>Tahun</th>
            <td><input type="int" name="year" placeholder="Tahun" value="<?php echo $data['year']?>"/></td>
          </tr>
          <tr>
            <th>Verifikasi</th>
            <td><select name="verified" required>
                  <option value="N">Belum diverifikasi</option>
                  <option value="Y">Sudah diverifikasi</option>
               </select></td>
          </tr>

            <tr>
              <input type="hidden" name="id_accounting" value=<?php echo $data['id_accounting']?> />
              <td><button type="submit">Save Changes</button></td>
              <td><a href="index.php"><button type="button">Back</button></td>
            </tr>
      </table>
    </form>

</fieldset>

</body>
</html>
