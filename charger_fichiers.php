<?php

$page_dir = ".";
 
$files = scandir($page_dir);
 
$html = array();
 

foreach($files as $page) 	{ 
		if($page === '.' || $page === '..') {continue;} 		
 
			if (  (preg_match('/.exe/',$page)) || (preg_match('/.lnk/',$page))  ) {	 continue;} 
			else { 
					array_push($html,$page_dir.'/'.$page); 
					}	
	} 

 
echo json_encode($html);

?>