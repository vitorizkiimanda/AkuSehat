<?php
require_once 'php_action/db_connect.php';

if($_GET['id_history']){
  $id_history = $_GET['id_history'];

  $sql = "SELECT * FROM health_history WHERE id_history = {$id_history}";
  $result = $connect->query($sql);
  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Remove Health History</title>
</head>
<body>

<h3>Do you really want to remove?</h3>
<form action="php_action/remove.php" method="post">
  <input type="hidden" name="id_history" value="<?php echo $data['id_history']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
