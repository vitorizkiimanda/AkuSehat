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
  <form action="php_action/create.php" method="post">
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>Nama</th>
        <td><input type="text" name="name_doctor" placeholder="Nama" /></td>
      </tr>
      <tr>
        <th>Email</th>
        <td><input type="email" name="email_doctor" placeholder="Email" /></td>
      </tr>
      <tr>
        <th>Password</th>
        <td><input type="password" name="password_doctor" placeholder="Password" /></td>
      </tr>
      <tr>
        <tr>
          <th>No Rekening</th>
          <td><input type="number" name="no_account_doctor" placeholder="Nomor Rekening" /></td>
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
        <td><select name="sex_doctor" required>
              <option value="">Pilih Jenis Kelamin</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
           </select></td>
      </tr>
      <tr>
        <th>Spesialisasi</th>
        <td><select name="specialization" required>
              <option value="">Pilih Spesialisasi</option>
              <option value="THT">THT</option>
              <option value="Mata">Mata</option>
              <option value="Jantung">Jantung</option>
           </select></td>
      </tr>
      <tr>
        <th>Nomor Telepon</th>
        <td><input type="number" name="no_tel_doctor" placeholder="No Telepon" /></td>
      </tr>
      <tr>
        <th>Jumlah Pasien</th>
        <td><input type="number" name="sum_patient" placeholder="Jumlah maksimal pasien yang disanggupi" /></td>
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
