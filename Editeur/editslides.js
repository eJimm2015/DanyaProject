
 var si = 0 ;var slid;
	  var slider = [];
	  								   
$(document).ready(function(){
	$( "#dialog-edslide" ).dialog({  // creation dela fenetre l'editeur des slides
                                                                                                autoOpen: false,
                                                                                                resizable: true,
modal:true,
                                                                                                height:600,
                                                                                                width : 1200,
                                                                                                buttons: {
                                                                                                  "Confirmer": function() { // la procedure du button confirmer
                                                                                                     var image = [] ;
                                                                                                     var lien = [];
                                                                                                    
																									
																								var ind = $('#'+slid).attr('ind'); // avoire l'indice du slide selectionner 
																									 
                                                                                                    $(this).find("img").each(function(){    
                                                                                                               image.push($(this).attr('src')); // stocker dans image les source des images utliser par ordre
                                                                                                       });
                                                                                                      $(this).find(".lien").each(function(){
                                                                                                               lien.push($(this).text());  // stocker dans lien les liens saisi par ordre
                                                                                                       });
																									   
                                                                                                 
                                                                                            $('#'+slid).empty(); // vider le slide a modier
                                                                                             slider[ind].reloadSlider(); // reload le slide
																							
                                                                                                    for (var i in image){ // por chaque image dans le tableau image
                                                                                                     
                                                                                                       $("#"+slid).append(' <li lien ="'+lien[i]+'">  <img src="'+image[i]+'"> </li>'); // on insere les nouveau diapo
                                                                                                      
                                                                                                    
                                                                                                   
                                                                                           
                                                                                                     }
                                                                                                   slider[ind].reloadSlider(); // on recharge le slide
                                                                                                  
                 
        
        												
                                                                                                     
                                                                                                       $( this ).dialog( "close" );  
                                                                                                            
                                                                                                       
                                                                                                          
                                                                                                  
                                                                                                  },
                                                                                                  "Annuler": function() {
                                                                                                    $( this ).dialog( "close" );
                                                                                                  }
                                                                                                }
                                                                                              });
																							  $("#adds").click(function(){   // click sur add en slides
                                                                                      
																						 load_gallery();  // on charge notre gallery
                                                                                   $( "#dialog-gallerie" ).dialog("open"); // on ouvre la fenetre gallery
                                                                                        
                                                                                  });
																							 
	
	
});
 function load_ed_slide(sl){    // pour charger l'editeur de slides
	                           var image = [];
							   var lien = [];
								   $('#dialog-edslide ').find('.poster').empty();
								      $('#'+sl).find('img').each(function(){
									       image.push($(this).attr('src'));
									       
									  });
									   $('#'+sl).find('li').each(function(){
									       lien.push($(this).attr('lien'));
									       
									  });
									 
									    for (var i in image){
										 var p= '<li class="ui-widget-content ui-corner-tr"><span class="remove-post">x</span><img class="panel-heading" src="'+image[i]+'" width="96" height="72"><p contenteditable="true" class ="lien cont"> '+lien[i]+'</p></li>'; 
                                                                                             
                                                                                       
                                                               $('#dialog-edslide ').find('.poster').append(p);
										
										}
									 
								   
 }
 $(document).on('dblclick', '.slider', function () {
																 slid = $(this).find('ul').prop('id') ;
																    load_ed_slide(slid);
                                                                    $("#dialog-edslide ").dialog('open');
																	 
																	
                                                                });