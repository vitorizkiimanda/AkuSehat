<?php
require_once 'php_action/db_connect.php';

if($_GET ['id_pat'] && $_GET['date_daily']){
  $id_pat = $_GET['id_pat'];
  $date_daily = $_GET['date_daily'];

  $sql = "SELECT * FROM daily_health_data WHERE id_pat = {$id_pat} AND date_daily = {$date_daily}";
  $result = $connect->query($sql);
  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Remove Daily Health Data</title>
</head>
<body>

<h3>Do you really want to remove?</h3>
<form action="php_action/remove.php" method="post">
  <input type="hidden" name="id_pat" value="<?php echo $data['id_pat']?>"/>
  <input type="hidden" name="date_daily" value="<?php echo $data['date_daily']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
