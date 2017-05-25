<?php
require_once 'php_action/db_connect.php';

if($_GET ['id_daily_health']){
  $id_daily_health = $_GET['id_daily_health'];

  $sql = "SELECT * FROM daily_health_data WHERE id_daily_health = {$id_daily_health}";
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
  <input type="hidden" name="id_daily_health" value="<?php echo $data['id_daily_health']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
