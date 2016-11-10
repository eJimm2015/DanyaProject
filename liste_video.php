<?php

$img_dir = "video";
 
$images = scandir($img_dir);
 
$html = array();
 

foreach($images as $img) 	{ 
		if($img === '.' || $img === '..') {continue;} 		
 
			if (  (preg_match('/.mp4/',$img))  ||  (preg_match('/.3gp/',$img)) || (preg_match('/.flv/',$img)) || (preg_match('/.avi/',$img)) || (preg_match('/.wmv/',$img)) ) {				
 
			 array_push($html,$img_dir.'/'.$img); 
			} else { continue; }	
	} 

 
echo json_encode($html);

?>