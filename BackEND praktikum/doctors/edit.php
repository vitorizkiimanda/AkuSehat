<?php
require_once 'php_action/db_connect.php';

if($_GET['id_doctor']){
  $id_doctor = $_GET['id_doctor'];

  $sql = "SELECT * FROM doctors WHERE id_doctor = {$id_doctor}";
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
          <th>Nama</th>
          <td><input type="text" name="name_doctor" placeholder="Nama" value="<?php echo $data['name_doctor']?>"/></td>
        </tr>
        <tr>
          <th>Email</th>
          <td><input type="email" name="email_doctor" placeholder="Email" value="<?php echo $data['email_doctor']?>"/></td>
        </tr>
        <tr>
          <th>Password</th>
          <td><input type="password" name="password_doctor" placeholder="Password" value="<?php echo $data['password_doctor']?>"/></td>
        </tr>
        <tr>
          <tr>
            <th>No Rekening</th>
            <td><input type="number" name="no_account_doctor" placeholder="Nomor Rekening" value="<?php echo $data['no_account_doctor']?>"/></td>
          </tr>
          <tr>
            <th>Nama Bank</th>
            <td><select name="bank_doctor" value="<?php echo $data['bank_doctor']?>"required>
              <option value="">Pilih Bank</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BNI">BNI</option>
            </select></td>
      </tr>
          <th>Jenis Kelamin</th>
          <td><select name="sex_doctor" value="<?php echo $data['sex_doctor']?>"required>
                <option value="">Pilih Jenis Kelamin</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
             </select></td>
        </tr>
        <tr>
          <th>Spesialisasi</th>
          <td><select name="specialization" value="<?php echo $data['specialization']?>" required>
                <option value="">Pilih Spesialisasi</option>
                <option value="THT">THT</option>
                <option value="Mata">Mata</option>
                <option value="Jantung">Jantung</option>
             </select></td>
        </tr>
        <tr>
          <th>Nomor Telepon</th>
          <td><input type="number" name="no_tel_doctor" placeholder="No Telepon" value="<?php echo $data['no_tel_doctor']?>"/></td>
        </tr>
        <tr>
          <th>Jumlah Pasien</th>
          <td><input type="number" name="sum_patient" placeholder="Jumlah maksimal pasien yang disanggupi" value="<?php echo $data['sum_patient']?>"/></td>
        </tr>
        <tr>
          <input type="hidden" name="id_doctor" value=<?php echo $data['id_doctor']?> />
          <td><button type="submit">Save Changes</button></td>
          <td><a href="index.php"><button type="button">Back</button></td>
        </tr>
      </table>
    </form>

</fieldset>

</body>
</html>
