
<?php
include 'db.php';
//Insert a new idea from the form in the index page
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
$username = $email = $ideaname = $description = NULL;

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
   $username = test_input($_POST['username']);
   $email = test_input($_POST['email']);
   $idea = test_input($_POST["ideaname"]);
   $description = test_input($_POST["description"]);
}

function test_input($data)
{
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

$sql = "INSERT INTO rooms (user_id, name, description, category_id, created_at)
VALUES (1, '$ideaname', '$description', 1, NOW())";

if (!mysqli_query($mysql_link,$sql))
  {
die('Error: ' . mysqli_error($mysql_link));
  }
echo "1 record added";

?>
