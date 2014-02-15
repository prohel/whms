
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
  $jsonRequest = $_REQUEST["REQUEST"];
  if ($jsonRequest !== "")
  {
    if ($jsonRequest.command == "ADDPOLL")
    {
      $count = $jsonRequest.count;
      $usercode = "U" . random_Alpha(4);
      $admincode = "A" . random_Alpha(4);
      // Build the SQL command string for room
      $sqlForm = "INSERT INTO rooms (count, usercode, admincode, created_at)
  VALUES ('$count', '$usercode', '$admincode', NOW())";
      pushToDB($sqlForm);
      $roomID = mysql_insert_id(); 
      // Build SQL string for each question
      for ($i = 0; $i < $digit; $i++) 
      {
        $description = $jsonRequest.questions[i].description;
        $choicea = $jsonRequest.questions[i].choicea;
        $choiceb = $jsonRequest.questions[i].choiceb;
        $choicec = $jsonRequest.questions[i].choicec;
        $choiced = $jsonRequest.questions[i].choiced;
        $choicee = $jsonRequest.questions[i].choicee;
        $sqlQuestion = "INSERT INTO questions (room_id, description, choicea, choiceb, choicec, choiced, choicee, created_at)
  VALUES ('$roomID', '$description', '$choicea', '$choiceb', '$choicec', '$choiced', '$choicee', NOW())";;
        pushToDB($sqlQuestion);
      }
    else if ($jsonRequest.command == "ADDPOLL")
    {

    }

  }
}

function random_Alpha($digit){
  $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  $string = '';
  for ($i = 0; $i < $digit; $i++) {
    $string .= $characters[rand(0, strlen($characters) - 1)];
  }
  return $string;
}

function test_input($data)
{
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

function pushToDB($sql)
{
/*$sql = "INSERT INTO rooms (user_id, name, description, category_id, created_at)
  VALUES (1, '$ideaname', '$description', 1, NOW())"; */

  if (!mysqli_query($mysql_link,$sql))
    {
  die('Error: ' . mysqli_error($mysql_link));
    }
  echo "1 record added";
}

?>
