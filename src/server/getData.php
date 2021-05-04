
<?php
require('connect.php');

 $fetchData = mysqli_query($conn, "SELECT * FROM users");
    $rows = array();
    while($r = mysqli_fetch_assoc($fetchData)) {
        $rows[] = $r;
    }
 $data = json_encode($rows); //convert php data to json data
 print($data);
 ?>