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
        <th>Jenis Penyakit</th>
        <td><input type="text" name="disease_type" placeholder="Jenis Penyakit" /></td>
      </tr>
        <tr>
        <th>Tanggal Dirawat</th>
        <td><input type="date" name="hospitalized_date" placeholder="Tanggal Dirawat" /></td>
      </tr>
        <tr>
        <th>Lama Dirawat</th>
        <td><input type="number" name="hospitalized_long" placeholder="Lama Dirawat" /></td>
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
