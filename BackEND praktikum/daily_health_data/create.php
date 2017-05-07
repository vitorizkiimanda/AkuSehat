<!DOCTYPE html>
<html>
<head>
  <title>Add Daily Health Data</title>

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
  <legend>Add Daily Health Data</legend>
  <form action="php_action/create.php" method="post">
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>Id Pasien</th>
        <td><input type="number" name="id_pat" placeholder="id pasien" /></td>
      </tr>
      <tr>
        <th>Tensi Sistol</th>
        <td><input type="number" name="tension_sistol" placeholder="Tensi sistol" /></td>
      </tr>
      <tr>
        <th>Tensi Diastol</th>
        <td><input type="number" name="tension_diastol" placeholder="Tensi diastol" /></td>
      </tr>
      <tr>
        <tr>
          <th>Durasi Tidur</th>
          <td><input type="number" name="sleep_duration" placeholder="Durasi tidur" /></td>
        </tr>
        <tr>
          <tr>
            <th>Deskripsi Harian</th>
            <td><input type="text" name="daily_description" placeholder="Deskripsi Harian" /></td>
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
