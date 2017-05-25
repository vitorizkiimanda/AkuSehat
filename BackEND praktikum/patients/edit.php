<?php
require_once 'php_action/db_connect.php';

if($_GET['id_patient']){
  $id_patient = $_GET['id_patient'];

  $sql = "SELECT * FROM patients WHERE id_patient = {$id_patient}";
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
    <form action="php_action/update.php" method="post" enctype="multipart/form-data">
      <table cellspacing="0" cellpadding="0">
        <tr>
          <th>Nama</th>
          <td><input type="text" name="name_patient" placeholder="Nama" value="<?php echo $data['name_patient']?>"/></td>
        </tr>
        <tr>
          <th>Email</th>
          <td><input type="email" name="email_patient" placeholder="Email" value="<?php echo $data['email_patient']?>"/></td>
        </tr>
        <tr>
          <th>Password</th>
          <td><input type="password" name="password_patient" placeholder="Password" value="<?php echo $data['password_patient']?>"/></td>
        </tr>
          <tr>
            <th>Alamat</th>
            <td><input type="text" name="address_patient" placeholder="Alamat Pasien" value="<?php echo $data['address_patient']?>"/></td>
          </tr>
        <tr>
          <th>Jenis Kelamin</th>
          <td><select name="sex_patient" value="<?php echo $data['sex_patient']?>"required>
                <option value="">Pilih Jenis Kelamin</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
             </select></td>
        </tr>
          <tr>
            <th>Nama Bank</th>
            <td><select name="bank_patient" value="<?php echo $data['bank_patient']?>"required>
              <option value="">Pilih Bank</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BNI">BNI</option>
            </select></td>
      </tr>
        <tr>
          <th>Nomor Telepon</th>
          <td><input type="number" name="no_tel_patient" placeholder="No Telepon" value="<?php echo $data['no_tel_patient']?>"/></td>
        </tr>
        <tr>
        <th>Foto<br>Profil</th>
        <td><input type="file" placeholder="Upload foto profil pasien" name="profile_pict_pat" value="<?php echo $data['profile_pict_pat']?>"></td>
        </tr>
        <tr>
          <input type="hidden" name="id_patient" value=<?php echo $data['id_patient']?> />
          <td><button type="submit">Save Changes</button></td>
          <td><a href="index.php"><button type="button">Back</button></td>
        </tr>
      </table>
    </form>

</fieldset>

</body>
</html>
