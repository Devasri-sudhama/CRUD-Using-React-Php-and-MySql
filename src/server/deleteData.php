
<?php

require('connect.php');
header('Access-Control-Allow-Origin: *');
// response.setHeader("Access-Control-Allow-Methods", "POST, GET");
print_r($_POST);

$id = $_POST['userid'];

$deleteData = mysqli_query($conn, "delete from users where userId='$id'");

print_r($id);


?>