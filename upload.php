<?php
header("Access-Control-Allow-Origin: *"); 
header('Content-type: application/json');
require_once('simpleImage_class.php');
$ds          = DIRECTORY_SEPARATOR;
$dir= 'images/';   
 
if (!empty($_FILES)) {
    $tempFile = $_FILES['file']['tmp_name'];                    
      
    $targetPath = $dir . $ds;
	
	$file = $_FILES['file']['name'];
	$ext = pathinfo($file, PATHINFO_EXTENSION);
	
	$fn = 'img-'.time().rand(0,10).'.jpg';
     
    $targetFile =  $targetPath. $fn; 
	
    if(move_uploaded_file($tempFile,$targetFile))
	{
	$image = new SimpleImage();
   $image->load($targetPath. $fn);
   	
	}
	$array = array("img"=>$targetPath.$fn,"thumb"=>$targetPath.'thumb-'.$fn);
	echo json_encode($array);
}
?>  