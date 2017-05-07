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
        <th>Id pasien</th>
        <td><input type="number" name="id_pat" placeholder="id pasien" /></td>
      </tr>
      <tr>
        <th>Umur</th>
        <td><input type="number" name="age" placeholder="Umur" /></td>
      </tr>
      <tr>
        <th>Berat Badan</th>
        <td><input type="number" name="weight" placeholder="Berat Badan" /></td>
      </tr>
      <tr>
        <th>Tinggi Badan</th>
        <td><input type="number" name="height" placeholder="Tinggi Badan" /></td>
      </tr>
        <tr>
        <th>Alergi</th>
        <td><input type="text" name="allergy" placeholder="Alergi" /></td>
      </tr>
      <tr>
        <th>Cacat</th>
        <td><input type="text" name="disability" placeholder="Cacat" /></td>
      </tr>
      <tr>
        <th>Operasi</th>
        <td><input type="text" name="operation" placeholder="Operasi" /></td>
      </tr>
        <tr>
        <th>Deskripsi</th>
        <td><input type="text" name="description" placeholder="Deskripsi" /></td>
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
