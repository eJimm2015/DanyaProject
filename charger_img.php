<?php

$page_dir = "images";
 
$files = scandir($page_dir);
 
$html = array();
 

foreach($files as $page) 	{ 
		if($page === '.' || $page === '..') {continue;} 		
 
			if (  (preg_match('/.exe/',$page)) || (preg_match('/.lnk/',$page))|| (preg_match('/.html/',$page))|| (preg_match('/.php/',$page))  ) {	 continue;} 
			else { 
					array_push($html,$page_dir.'/'.$page); 
					}	
	} 

 
echo json_encode($html);

?>