<?php
	$Token = $_COOKIE["Token"];
	if(!(ctype_alnum($_COOKIE["Token"]))) exit();
	include ("../../common/initialization.php");
	datacon();
	$sql = "SELECT * from Users WHERE ID='".$IDNum."'";
	$result = mysql_query($sql,$con);
	while($row = mysql_fetch_row($result)) {
		$Token = "logoffed";
		mysql_query("UPDATE Users SET Token = '".$Token."' WHERE ID = '".$IDNum."'");
		echo "Logoff!";
	}
	mysql_close($con);
	header("Location:/");
?>