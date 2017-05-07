<!DOCTYPE html>
<html>
<head>
  <title>Add Accounting Record</title>

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
  <legend>Add Accounting Record</legend>
  <form action="php_action/create.php" method="post">
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>Id Pasien</th>
        <td><input type="number" name="id_pat" placeholder="id dokter" /></td>
      </tr>
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
        <td><input type="int" name="year" placeholder="Tahun" /></td>
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
