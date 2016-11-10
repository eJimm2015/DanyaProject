var post ;
var pi ;
$(document).ready(function(){
	
	
																							  $( "#dialog-edpostes" ).dialog({  // creation dela fenetre l'editeur des slides
                                                                                                autoOpen: false,
                                                                                                resizable: true,
																								
                                                                                                height:600,
                                                                                                width : 1200,
																								 show: {
                                                                                                    effect: "fade",
                                                                                                    duration: 1000
                                                                                                   },
                                                                                                     hide: {
                                                                                                      effect: "fade",
                                                                                                     duration: 1000
                                                                                                    },
                                                                                                buttons: {
                                                                                                  "Confirmer": function() {  // la procedure de button confirmer
                                                                                                     var image = [] ;
                                                                                                     var pliens = [];
                                                                                                    var desc = [];
																									
																							
																									 
                                                                                                    $(this).find("img").each(function(){
                                                                                                               image.push($(this).attr('src')); // on stocke dans image les source des image a inserer par ordre
                                                                                                       });
                                                                                                      $(this).find(".pliens").each(function(){
                                                                                                               pliens.push($(this).text());  // on stock dans pliens les liens par ordre
                                                                                                       }); 
                                                                                                   $(this).find(".pdesc").each(function(){
                                                                                                               desc.push($(this).text()); // on stocke dans desc les description de chque post on ordre
                                                                                                       });
                                                                                                   
                                                                                            $('#'+post).empty(); // on vide le poste a modifier
                                                                                             
																							
                                                                                                    for (var i in image){  // poure chque image de tableau image
                                                                                                     
                                                                                                       $("#"+post).append(' <li lien="'+pliens[i]+'" class="ui-widget-content ui-corner-tr"><img src="'+image[i]+'" width="96" height="72"><div class ="pdesc">'+desc[i]+'</div></div></li>');
                                                                                                          // on insere les nouveau postes
                                                                                                    
                                                                                                   
                                                                                           
                                                                                                     }
                                                                                                 
                                                                                                  
                 
        
        												
                                                                                                     
                                                                                                       $( this ).dialog( "close" );  
                                                                                                            
                                                                                                       
                                                                                                          
                                                                                                  
                                                                                                  },
                                                                                                  "Annuler": function() {
                                                                                                    $( this ).dialog( "close" );
                                                                                                  }
                                                                                                }
                                                                                              });  
											 $("#addp").click(function(){   // click sur add en postes
                                                                                      
																						 load_gallery();  // on charge notre gallery
                                                                                   $( "#dialog-gallerie" ).dialog("open"); // on ouvre la fenetre gallery
                                                                                        
                                                                                  });
	
	
	
});
$(document).on('dblclick', '.postes', function () {
	 
																    post = $(this).find('.gallery').prop('id') ;
																	
																    load_ed_poste(post);
                                                                    $("#dialog-edpostes ").dialog('open');
																	 
																	
                                                                });
 function load_ed_poste(sl){ // pour charger l'editeur de postes
		                           var image = [];
								   var desc = [];
								   var liens=[];
								   $('.poster').empty();
								      $('#'+sl).find('img').each(function(){
									       image.push($(this).attr('src'));                                                  
                                          });
                                      $('#'+sl).find('li').each(function(){
									       liens.push($(this).attr('lien'));                                                  
                                          });                                             										  
									      $('#'+sl).find('.pdesc').each(function(){
									       desc.push($(this).text());                                                  
                                          });  
                                                            
									  for (var i in image)
									  {
									  $('.poster').append(' <li  class="ui-widget-content ui-corner-tr"><span class="remove-post">x</span><img src="'+image[i]+'" width="96" height="72"><p contenteditable="true" class ="pliens cont">'+liens[i]+'</p><p  contenteditable ="true" class ="pdesc cont">'+desc[i]+'</p></li>');;
									  }
								   
								   }