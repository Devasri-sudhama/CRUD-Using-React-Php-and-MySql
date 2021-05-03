
<?php
header('Access-Control-Allow-Origin: *');
require('connect.php');
print_r($_POST);

$userid = $_POST['userid'];

$name = $_POST['username'];
$age = $_POST['age'];
$phone = $_POST['phone'];
 $fetchData = mysqli_query($conn, "UPDATE users SET name = '$name', age = '$age',phone= '$phone' WHERE userId='$userid';");

 //convert php data to json data
 print("Updated Row");
 ?>