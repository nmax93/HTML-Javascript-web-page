<?php
   	$dbhost = "182.50.133.51" ;
	$dbuser = "studDB18A" ;
	$dbpass = "stud18aDB1!" ;
	$dbname = "studDB18A" ;
	$link = mysqli_connect ($dbhost, $dbuser, $dbpass, $dbname);
	
	if(mysqli_connect_errno ()) {
		die("DB connection failed: " . mysqli_connect_error () . " (" .
		mysqli_connect_errno () . ")"
);
}
?>
<?php
	$query = "SELECT * FROM tb_tocbac_228";
	$result = mysqli_query($connection, $query);
	if(!$result) {
		die("DB query failed");
	}
?>