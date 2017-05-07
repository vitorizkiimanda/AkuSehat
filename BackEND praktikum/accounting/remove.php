<?php
require_once 'php_action/db_connect.php';

if($_GET['id_accounting']){
  $id_accounting = $_GET['id_accounting'];

  $sql = "SELECT * FROM accounting WHERE id_accounting = {$id_accounting}";
  $result = $connect->query($sql);
  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Remove Accounting Record</title>
</head>
<body>

<h3>Do you really want to remove?</h3>
<form action="php_action/remove.php" method="post">
  <input type="hidden" name="id_accounting" value="<?php echo $data['id_accounting']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
