
<?php

require('connect.php');
// header('Access-Control-Allow-Origin: *');
// response.setHeader("Access-Control-Allow-Methods", "POST, GET");
print_r($_POST);
echo"<script>alert('hello')</script>";

$name = $_GET['username'];
$age = $_GET['age'];
$phone = "74";
 $insertData = mysqli_query($conn, "INSERT INTO users(name,age,phone) VALUES('$name','$age','$phone')");
 $resultquery = mysqli_query($dbc, $insertData);
  
 $data = json_encode($resultquery); //convert php data to json data
 
 ?>