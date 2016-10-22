<?php
$connection = mysqli_connect ( 'localhost', 'root', 'root', 'employee' );

$data = json_decode ( file_get_contents ( "php://input" ) );

$name = mysqli_real_escape_string ( $connection, $data->username );
$password = mysqli_real_escape_string ( $connection, $data->password );
$query = "SELECT * FROM emp_details WHERE emp_name= '$name' and  emp_gender ='$password'";
$result = mysqli_query ( $connection, $query );

if (($result->num_rows) > 0)
	print true;
else
	print false;
?>