<?php
require_once 'php_action/db_connect.php';

if($_GET['id_pat']){
  $id_pat = $_GET['id_pat'];

  $sql = "SELECT * FROM patients_doctors WHERE id_pat = {$id_pat}";
  $result = $connect->query($sql);
  $data = $result->fetch_assoc();

  $connect->close();
}
 ?>

 <!DOCTYPE html>
 <html>
 <head>
   <title>Remove Associative Table</title>
</head>
<body>

<h3>Do you really want to remove?</h3>
<form action="php_action/remove.php" method="post">
  <input type="hidden" name="id_pat" value="<?php echo $data['id_pat']?>"/>
  <button type="submit">Yes</button>
  <a href="index.php"><button type="button">No</button></a>
</form>

</body>
</html>
