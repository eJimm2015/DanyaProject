$(document).ready(function(){
	$( "#dialog-gallerie" ).dialog({ // pour cree la fenetre galerie
                                                          autoOpen: false,
                                                          height: 600,
                                                          width: 1000,
                                                          modal: true,
                                                          buttons: {
                                                            "confirmer" :function() 
															{  // la procedure du click sur confirme
                                                              var images=[];  // le tableau ou en vas stocke les lien des images selectionner
                                                               $("input:checkbox[name=type]:checked").each(function(){ // pour chaque image selectionner
                                                                   images.push($(this).val()); // on insere la valeur du chekbox dans le tableau (la valleur et le source de limage tu peux virifier danss la variable g dans la fonction load)
                                                                 });
                                                             // $(".poster").empty();
                                                               for (var i in images){
                                                             var p= '<li class="ui-widget-content ui-corner-tr post"><div ><span class="remove-post">x</span><img class="panel-heading" src="'+images[i]+'" width="96" height="72"><p  contenteditable="true" class ="pliens cont">liens</p><p class ="pdesc cont" contenteditable="true">discreption</p></li></div></div></li>'; 
                                                             var s = '<li class="ui-widget-content ui-corner-tr post"><div ><span class="remove-post">x</span><img class="panel-heading" src="'+images[i]+'" width="96" height="72"><p  contenteditable="true" class ="lien cont"> Votre lien ici </p></div></li>'; 
                                                                          
                                                                                       
                                                                $('#dialog-edpostes').find('.poster').append(p); // on insere dans l'ed de post 
																                       
                                                                $('#dialog-edslide').find('.poster').append(s);
                
                                                               }
                                                              $( "#dialog-gallerie" ).dialog( "close" );
                                                              
                                                                
                                                            }, 
                                                            Cancel: function() {
                                                              $( "#dialog-gallerie" ).dialog( "close" );
                                                            }
                                                          }
                                                         
                                                        }); 
	                                                        $("#up").click(function(){ // pour afficher le dropezone
																$("#upload").slideToggle("slow");
																				}); 

																				$("#up2").click(function(){ // pour afficher le dropezone
																$("#upload2").slideToggle("slow");
																				});
																				
																				$("#up3 ,#upload3").click(function(){ // pour afficher le dropezone
																$("#upload3").slideToggle("slow");
																				}); 
																				
																				$("#download-togle").click(function(){ // pour afficher le dropezone
																				charger();
																$("#download-body-i").slideDown("slow");
																$("#mes-images").slideUp("slow");
																				});  

																				$("#galeriy-togle").click(function(){ // pour afficher le dropezone
																				load_gal_img2();
																$("#download-body-i").slideUp("slow");
																$("#mes-images").slideDown("slow");
																				});    
	
	
	
	
	 Dropzone.autoDiscover = false;  // creationde dropezone
                                                        	$(".uploadform").dropzone({	
                                                        	acceptedFiles: "image/jpeg", // acepter que les images
                                                            url: 'upload.php', // le code php qui traite le upload (ne retourne rien)
                                                
                                                        	success: function (response) {
                                                                 load_gallery(); // si le upload est terminer avec succser on charge notre gallerie a nouveau
                                                        		  
                                                        		        
                                                        	},		
															error : function(){
															alert("fail");
															},
                                                        	addRemoveLinks: true,
                                                        	removedfile: function(file) {
                                                           	var _ref;
                                                        			 return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;  
                                                             }	
                                                        	
                                                        	}); 
	
	
});
function load_gallery(){       // fonction pour charger la fenetre galerrie avec le contenu du dossier    
                                  	  
                                                  $.ajax({            
                                                                url: "liste.php", // le code php qui retourne la liste des image 
                                                    	    type: "POST",          
                                                    	    dataType:"json",
                                                                                                                 
                                                                success: function( data ) { // data est le tableau retourner pat liste.php 
                                                                  $("#gallery").empty();
                                                    		      for (var i in data) // pour chaque element i de data
                                                                    
                                                                  {  
                                                   
                                                                  
                                                                         // la variable g contient le cadre de l'image
                                                                 var g = '<li class="ui-widget-content ui-corner-tr"><input type="checkbox" name="type" value="'+data[i]+'" /><h5 class="ui-widget-header">'+i+'</h5><img src="'+data[i]+'" alt="The peaks of High Tatras"width="96" height="72"></li>'          
                                              
                                                           
                                                                    $("#gallery").append(g);  
                                                    
                                                                  }
                                                                },
                                                                error: function(jqXHR, data ) {        
                                                    		alert ('Erreur dans le serveur');    // si il yena erreur de serveur (list.php n'est pas executer)
                                                    	    }
                                                            });      
                                                                            }