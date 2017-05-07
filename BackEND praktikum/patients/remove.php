<?php
require_once 'php_action/db_connect.php';

if($_GET['id_patient']){
  $id_patient = $_GET['id_patient'];

  $sql = "SELECT * FROM patients WHERE id_patient = {$id_patient}";
  $result = $connect->query($sql);
  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Remove Patient</title>
</head>
<body>

<h3>Do you really want to remove?</h3>
<form action="php_action/remove.php" method="post">
  <input type="hidden" name="id_patient" value="<?php echo $data['id_patient']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
