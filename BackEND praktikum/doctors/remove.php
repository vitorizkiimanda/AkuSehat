<?php
require_once 'php_action/db_connect.php';

if($_GET['id_doctor']){
  $id_doctor = $_GET['id_doctor'];

  $sql = "SELECT * FROM doctors WHERE id_doctor = {$id_doctor}";
  $result = $connect->query($sql);
  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Remove Doctor</title>
</head>
<body>

<h3>Do you really want to remove?</h3>
<form action="php_action/remove.php" method="post">
  <input type="hidden" name="id_doctor" value="<?php echo $data['id_doctor']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
