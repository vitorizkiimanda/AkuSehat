<?php
require_once 'php_action/db_connect.php';

if($_GET['id_doct']){
  $id_doct = $_GET['id_doct'];

  $sql = "SELECT * FROM doctors_spesification WHERE id_doct = {$id_doct}";
  $result = $connect->query($sql);
  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Remove Doctor Spesification</title>
</head>
<body>

<h3>Do you really want to remove?</h3>
<form action="php_action/remove.php" method="post">
  <input type="hidden" name="id_doct" value="<?php echo $data['id_doct']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
