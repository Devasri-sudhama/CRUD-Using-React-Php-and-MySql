
<?php

require('connect.php');

// response.setHeader("Access-Control-Allow-Methods", "POST, GET");
print_r($_GET);

$name = $_POST['name'];
$age = $_POST['age'];
$phone = "74";
 $insertData = mysqli_query($conn, "INSERT INTO users(name,age,phone) VALUES('$name','$age','$phone')");
 $resultquery = mysqli_query($dbc, $insertData);
  
 $data = json_encode($resultquery); //convert php data to json data
 
 ?>