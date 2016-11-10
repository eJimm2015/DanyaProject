<?php

$img_dir = "images";
 
$images = scandir($img_dir);
 
$html = array();
 

foreach($images as $img) 	{ 
		if($img === '.' || $img === '..') {continue;} 		
 
			if (  (preg_match('/.jpg/',$img))  ||  (preg_match('/.gif/',$img)) || (preg_match('/.tiff/',$img)) || (preg_match('/.png/',$img)) ) {				
 
			 array_push($html,$img_dir.'/'.$img); 
			} else { continue; }	
	} 

 
echo json_encode($html);

?>