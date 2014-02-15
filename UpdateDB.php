
<?php
//include 'db.php';
$mysql_host="68.178.216.184";
$mysql_user="clickerDB1@72.167.233.38";
$mysql_pass="Whms001!";
$mysql_db="clickerDB1";
global $mysql_link;
$mysql_link = mysqli_connect($mysql_host, $mysql_user, $mysql_pass, $mysql_db);

//Insert a new idea from the form in the index page
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
$username = $email = $ideaname = $description = NULL;

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
  // Get JSON string from js file  
  $jsonRequest = $_REQUEST["REQUEST"];
  if ($jsonRequest != "")
  {

    // *** Save information from new poll***
    if ($jsonRequest.command == "ADDPOLL")
    {
      $count = $jsonRequest.count;
      $admincode = "A" . random_Alpha(4);
      $usercode = "U" . random_Alpha(4);

      // Build the SQL command string for room
      $sqlForm = "INSERT INTO rooms (count, usercode, admincode, created_at)
      VALUES ('$count', '$usercode', '$admincode', NOW())";
      
      // Create table for form
      pushToDB($sqlForm);
      // Get ID from last insert
      $roomID = mysql_insert_id(); 

      for ($i = 0; $i < $digit; $i++) 
      {
        $qarray = $jsonRequest.questions;
        $description = $qarray[$i].description;
        $choicea = $qarray[$i].choicea;
        $choiceb = $qarray[$i].choiceb;
        $choicec = $qarray[$i].choicec;
        $choiced = $qarray[$i].choiced;
        $choicee = $qarray[$i].choicee;
        $sqlQuestion = "INSERT INTO questions (room_id, description, choicea, choiceb, choicec, choiced, choicee, created_at)
        VALUES ('$roomID', '$description', '$choicea', '$choiceb', '$choicec', '$choiced', '$choicee', NOW())";;
        pushToDB($sqlQuestion);
      }
      $addPollResponse = array('ADMINID' => $admincode, 'USERID' => $usercode); 
      echo json_encode($addPollResponse);
    } else if ($jsonRequest.command == "USERPAGE")
    {
        // WILL COMPLETE CODE
    }
    // GIVE RESPONSE TO .js 

  } else {
    // GIVE BACK ERROR
    $errorResponse = array('ERROR' => 'EMPTY REQUEST'); 
    echo json_encode($errorResponse);
  }
}

/**
 * Creates a random alphanumeric string
 * of length specified
 */
function random_Alpha($digit){
  $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  $string = '';
  for ($i = 0; $i < $digit; $i++) {
    $string .= $characters[rand(0, strlen($characters) - 1)];
  }
  return $string;
}

/**
  * Tests data input (for phase II)
  */
function test_input($data)
{
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

/**
  * Pushes SQL request given string given and
  * parameters in db.php
  */
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
