<?php

$page_dir = ".";
 
$files = scandir($page_dir);
 
$html = array();
 

foreach($files as $page) 	{ 
		if($page === '.' || $page === '..') {continue;} 		
 
			if (  (preg_match('/.php/',$page)) || (preg_match('/.html/',$page))|| (preg_match('/.htm/',$page))  ) {	 array_push($html,$page_dir.'/'.$page);} 
			else { 
					 
					continue;
					}	
	} 

 
echo json_encode($html);

?>