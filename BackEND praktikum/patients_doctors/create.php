<!DOCTYPE html>
<html>
<head>
  <title>Add Associative Table</title>

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
  <legend>Add Associative Table</legend>
  <form action="php_action/create.php" method="post">
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>Id Dokter</th>
        <td><input type="number" name="id_doct" placeholder="id dokter" /></td>
      </tr>
      <tr>
        <th>Id Pasien</th>
        <td><input type="number" name="id_pat" placeholder="id pasien" /></td>
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
