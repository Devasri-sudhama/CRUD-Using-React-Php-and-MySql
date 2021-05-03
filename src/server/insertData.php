
<?php

require('connect.php');
header('Access-Control-Allow-Origin: *');


$name = $_POST['username'];
$age = $_POST['age'];
$phone = $_POST['phone'];
 $insertData = mysqli_query($conn, "INSERT INTO users(name,age,phone) VALUES('$name','$age','$phone')");
// $resultquery = mysqli_query($conn, $insertData);
  $last_id = mysqli_insert_id($conn);
  
  print_r($last_id);

 
 ?>