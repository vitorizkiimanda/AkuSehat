<!DOCTYPE html>
<html>
<head>
  <title>Add Spesification</title>

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
  <legend>Add Spesification</legend>
  <form action="php_action/create.php" method="post">
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>Id Dokter</th>
        <td><input type="number" name="id_doct" placeholder="id dokter" /></td>
      </tr>
      <tr>
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
        <td><input type="text" name="hospital" placeholder="Rumah sakit tempat Anda bertugas" /></td>
      </tr>
      <tr>
        <th>Domisili</th>
        <td><input type="text" name="domicile" placeholder="Kota tempat Anda tinggal" /></td>
      </tr>
      <tr>
        <tr>
          <th>Riwayat Pendidikan</th>
          <td><input type="text" name="educational_background" placeholder="Riwayat pendidikan Anda" /></td>
        </tr>
        <tr>
          <tr>
            <th>Pengalaman</th>
            <td><input type="text" name="experience" placeholder="Pengalaman Anda dalam bidang kesehatan" /></td>
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
