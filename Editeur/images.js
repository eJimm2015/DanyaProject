var ele;
$(document).ready(function(){
	$( "#dialog-img" ).dialog({ // pour cree la fenetre galerie
                                                          autoOpen: false,
														 
                                                          height: 500,
                                                          width: 700,
                                                          modal: true,
                                                          buttons: {
                                                            
                                                            Cancel: function() {
                                                              $( '#dialog-img' ).dialog( "close" );
                                                            }
                                                          }
                                                         
                                                        }); 
	

});

function load_gal_img(){       // fonction pour charger la fenetre galerrie avec le contenu du dossier    
                                  	 
                                                  $.ajax({            
                                                                url: "liste.php", // le code php qui retourne la liste des image 
                                                    	    type: "POST",          
                                                    	    dataType:"json",
                                                                                                                 
                                                                success: function( data ) { // data est le tableau retourner pat liste.php 
                                                                  $(".images-ins").empty();
                                                    		      for (var i in data) // pour chaque element i de data
                                                                    
                                                                  {  
                                                   
                                                                  
                                                                         // la variable g contient le cadre de l'image
                                                                 var g = '<li class="image ui-widget-content ui-corner-tr" style="width:100px;"><h5 class="ui-widget-header">'+i+'</h5><img src="'+data[i]+'" width="96" height="72"> </li>'  ;        
                                              
											  
                                                           
                                                                    $(".images-ins").append(g);  
                                                    
                                                                  }
                                                                },
                                                                error: function(jqXHR, data ) {        
                                                    		alert ('Erreur dans le serveur');    // si il yena erreur de serveur (list.php n'est pas executer)
                                                    	    }
                                                            });  
															
}
function load_gal_img2(){       // fonction pour charger la fenetre galerrie avec le contenu du dossier    
                                  	 
                                                  $.ajax({            
                                                                url: "liste.php", // le code php qui retourne la liste des image 
                                                    	    type: "POST",          
                                                    	    dataType:"json",
                                                                                                                 
                                                                success: function( data ) { // data est le tableau retourner pat liste.php 
                                                               $("#myImg").empty();
                                                    		      for (var i in data) // pour chaque element i de data
                                                                    
                                                                  {  
                                                   
                                                                  
                                                                         // la variable g contient le cadre de l'image
                                                                 var g = '<li style="width:100px;display: -webkit-inline-box;" class="image-imbr ui-widget-content ui-corner-tr"><img src="'+data[i]+'" width="50" height="50"> </li>'  ;        
                                             
                                                           
                                                                    $("#myImg").append(g);  
                                                    
                                                                  }
                                                                },
                                                                error: function(jqXHR, data ) {        
                                                    		alert ('Erreur dans le serveur');    // si il yena erreur de serveur (list.php n'est pas executer)
                                                    	    }
                                                            }); 
															 
                                                                            }
																			
         //insertion d'images dans la page 																			
		$(document).on("click",".image",function(){
			var src = $(this).find("img").attr("src");
			$("#page").append('<div class ="row Item IMAGE" align="center" id ="'+id+'"><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span>   <i id="img-left" class="fa fa-align-left" ></i><i id="img-center" class="fa fa-align-center" ></i><i id="img-right" class="fa fa-align-right" ></i> </div><div  class="cont" > <strong contenteditable ="true" style=" display:block">Titre de l\'image</strong><i class="fa fa-crop" id="resiz"></i><img class ="panel-heading" src="'+src+'" width="200" height="200"></div></div>');
			id++;
			$("#dialog-img").dialog("close");
		});
		
		
		//alignement des images ----------------
		$(document).on('click','#img-center',function(){
	$(this).closest(".IMAGE").attr('align','center');
	$(this).closest(".IMAGE").find('div').attr('align','center');
});	

		$(document).on('click','#img-left',function(){
	$(this).closest(".IMAGE").attr('align','left');
	$(this).closest(".IMAGE").find('div').attr('align','left');
});	
		$(document).on('click','#img-right',function(){
	$(this).closest(".IMAGE").attr('align','right');
	$(this).closest(".IMAGE").find('div').attr('align','right');
});	


		//afficher width et height
		$(document).on("click",".cont img",function(){
		ele=this;
		$('#w').value=ele.width;
		$('#h').value=ele.height;
		});
		
		
		//cacher les detaill apres foucuOut
		$(document).on('focusout', '.cont img,.IMAGE', function () {
   $('#param').fadeOut();
   });
   
   
		//insertion image imbriqué dans le text
		$(document).on("click",".image-imbr",function(){
		
			var src = $(this).find("img").attr("src");
			
			
		   var selection = window.getSelection().getRangeAt(0);
		   
		   var d = document.createElement("div");
		   var h = document.createElement("div");
		    h.setAttribute('contenteditable',"true");
		    h.setAttribute('class',"titre");
		 h.innerHTML = "Titre de limage " ;
		 
		 
		      var i1=document.createElement("i");
			   i1.setAttribute('class',"fa fa-align-left");
			  i1.id='img-left';
		
	       d.appendChild(i1);

		   var i2=document.createElement("i");
		   i2.setAttribute('class',"fa fa-align-center");
			  i2.id='img-center';
		
			   d.appendChild(i2);
			   
			   var i3=document.createElement("i");
			    i3.setAttribute('class',"fa fa-align-right");
			  i3.id='img-right';

			   d.appendChild(i3);
			   
			   var i4=document.createElement("i");
			    i4.setAttribute('class',"fa fa-remove");
			  i4.id='img-remove';

			   d.appendChild(i4);
			   
			   
		   var p = document.createElement("img");
		   
		 p.setAttribute('src',src);
		
		 d.setAttribute('class',"IMAGE");
		
		
		  p.setAttribute('width','100px');
		  p.setAttribute('height','100px');
		 p.id='img-i';
		 p.style.cssText+='display:block';
		 var i=document.createElement("i");
						i.setAttribute('class','fa fa-crop');
						i.setAttribute('id','resiz-img');
						
						
						d.appendChild(h);
		  d.appendChild(i);
		  d.appendChild(p);
		  var br2=document.createElement("br");
		  //d.appendChild(br2);
		   selection.insertNode(br2);
		   d.setAttribute("align","center");
		   selection.insertNode(d);
		   
		   
		});
		
		$("#img-i").resizable();
		
		
		//en cliquant sur l'image on affiche ces details
		$(document).on('click', '.cont img', function () {
		
		$('#param').fadeIn();
	var w=$(this).css("width");
		$('#w').val(w);
		var h=$(this).css("height");
		$('#h').val(h);
//$(this).find("#img-left").slideToggle("slow");
		//$(this).find("#img-center").slideToggle("slow");
		//$(this).find("#img-right").slideToggle("slow");

		});
		
		
		$(document).on('dblclick', '.cont img , .IMAGE img ', function () {//double clik pour modifier les gandeurs
		
		$( this ).resizable();
		/*
var c=prompt('width:');
			 var l=prompt('height:');
			if(c!='') $(this).attr("width",c+"px");
			if(l!='') $(this).attr("height",l+"px");*/
});

function image_link(lien){//inserer une image avec lien

$("#page").append('<div class ="row Item" id ="'+id+'"><div class="head"><span class="remove-item fa fa-close"></span></div><div  class="cont" contenteditable ="true"> <strong style=" display:block">Titre de l image</strong><i class="fa fa-crop" id="resiz"></i><img class ="panel-heading" src="'+lien+'" width="200" height="200"></div></div>');
			id++;
}
$(document).on('click', '#fenetre-img', function () {
																																							load_gal_img();
$("#dialog-img ").dialog('open');
});

$(document).on('click', '#resiz-img', function () {
var c=prompt('width:');
			 var l=prompt('height:');
			
			 $(this).next().css("width", c+"px");
			 $(this).next().css("height", l+"px");
			
			

});

$(document).on('click', '#img-remove', function () {
$(this).parent().remove();		
});