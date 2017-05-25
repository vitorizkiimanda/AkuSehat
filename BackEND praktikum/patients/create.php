<!DOCTYPE html>
<html>
<head>
  <title>Add Data</title>

  <style type="text/css">
    fieldset {
      margin: 10px;
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
  <legend>Add Data</legend>
  <form action="php_action/create.php" method="post" enctype="multipart/form-data">
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>Nama</th>
        <td><input type="text" name="name_patient" placeholder="Nama" /></td>
      </tr>
      <tr>
        <th>Email</th>
        <td><input type="email" name="email_patient" placeholder="Email" /></td>
      </tr>
      <tr>
        <th>Password</th>
        <td><input type="password" name="password_patient" placeholder="Password" /></td>
      </tr>
      <tr>
        <tr>
          <th>Alamat</th>
          <td><input type="text" name="address_patient" placeholder="Alamat Pasien" /></td>
        </tr>
      <tr>
        <th>Jenis Kelamin</th>
        <td><select name="sex_patient" required>
              <option value="">Pilih Jenis Kelamin</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
           </select></td>
      </tr>
      <tr>
        <th>Nama Bank</th>
        <td><select name="bank_patient" required>
              <option value="">Pilih Bank</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BNI">BNI</option>
              <option value="BRI">BRI</option>

           </select></td>
      </tr>
      <tr>
        <th>Nomor Telepon</th>
        <td><input type="number" name="no_tel_patient" placeholder="No Telepon" /></td>
      </tr>
      <th>Foto<br>Profil</th>
      <td><input type="file" placeholder="Upload foto profil pasien" name="profile_pict_pat" required></td>
      </tr>
      <tr>
        <td><button type="submit">Save Changes</button></td>
          <td><a href="index.php"><button type="button">Back</button></td>
      </tr>
    </table>
  </form>

</fieldset>

</body>
</html>
