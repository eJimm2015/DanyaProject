/*function setIfram(){
 
       var lien = prompt('entre les lien','http://');
 
       if((lien !='http://' )&&(lien !='' )){
  
      $('#editeur').append('<iframe width="100%" height="300px" src="'+lien+'" ></iframe>');
 
       }
     
   }
*/
var selection;
$(document).ready(function(){
	$( "#dialog-ins_youtube" ).dialog({ // pour cree la fenetre galerie
                                                          autoOpen: false,
														 
                                                          height: 200,
                                                          width: 100,
                                                          modal: true,
                                                          buttons: {
                                                            
                                                            "OK": function() {
															   var  lien = $(this).find("#url_youtube").val();
															ins_you_ifr(selection,lien,0)
                                                              $( this ).dialog( "close" );
                                                            }
                                                          }
                                                         
                                                        }); 
	$( "#dialog-ins_iframe" ).dialog({ // pour cree la fenetre galerie
                                                          autoOpen: false,
														 
                                                          height: 200,
                                                          width: 100,
                                                          modal: true,
                                                          buttons: {
                                                            
                                                            "OK": function() {
															   var  lien = $(this).find("#url_iframe").val();
															ins_you_ifr(selection,lien,1)
                                                              $( this ).dialog( "close" );
                                                            }
                                                          }
                                                         
                                                        }); 
	
});
function insertIFram(lien,desc){

if((lien !='http://' )&&(lien !='' ))
{
//if(desc='null') desc='     ';

$('#page').append(' <div id ="'+id+'" class="row Item iframe"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"> <div><strong contenteditable ="true">'+desc+'</strong><br/><i class="fa fa-crop" id="resiz"></i><iframe width="400px" height="300px" src="'+lien+'" resizable ></iframe></div></div></div></div>');

}
resize_iframe();
}

function insertYoutube(lien,desc){



if((lien !='http://' )&&(lien !='' ))
{

var pos = lien.search("watch");
if(pos>0){ 
var code = lien.slice(pos+8);
var src='http://www.youtube.com/embed/'+code+'?autoplay=1';
$('#page').append(' <div id ="'+id+'" class="row Item youtube"><div><div class="head"><img style="float: left; margin-right: 5px;"src="icons/drag.png"><span class="remove-item fa fa-close"></span></div> <div><strong contenteditable="true">'+desc+'</strong><br/><i class="fa fa-crop" id="resiz"></i><div class="cont"><iframe width="100%" height="100%"src="'+src+'" resizablecode="'+code+'"></iframe></div></div></div></div>');id++;
}
else 
{
alert('lien youtube n\'est pas valide ! ');
}
}
resize_iframe();
}

function insertIFram2(lien) {
    if ((lien != 'http://') && (lien != '')) {
        var desc = prompt('entrer le description :');
		if(desc=='null') desc='description';
        $('#page').append('<div id ="'+id+'" class="row Item iframe"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div>  <div><strong contenteditable ="true">' + desc + '</strong><br/><i class="fa fa-crop" id="resiz"></i><div class="cont"><iframe width="100%" height="100%" src="' + lien + '" resizable ></iframe></div></div></div></div>');
		id++;
		resize_iframe();
    }
}

//------------afficher la fenetre des pages webs existantes
var 
i=0;

function load(){

$('#Mbody').empty();

$.ajax({

url:'charger_pages.php',

dataType:"json",

type:"POST",


success:function(data){


	for( i in data ){


		var str= data[i];
		
$('#Mbody').append('<p data-toggle="tooltip" data-placement="top" data-trigger="hover" title="inserer cette page" onclick="insertIFram2( '+'\' '+ str+'\' '+' );" >'+data[i]+' </p>');

			}

} ,

error: function(jqXHR, data ) {
                  		alert ('no conection !!');    // si il yena erreur de serveur (list.php n'est pas executer)
                            	  
  }
});

}


        //----------------- fin de recherche pages web
		
		
				$(document).on('dblclick', '#page .Item iframe', function () {
var c=prompt('longueur:');
			 var l=prompt('hauteur:');
			 $(this).css("width",c+"px");
			 $(this).css("height",l+"px");
});

function load_gal_video(){       // fonction pour charger la fenetre galerrie avec le contenu du dossier    
                              	 var i=0;
                                                  $.ajax({            
                                                                url: "liste_video.php", // le code php qui retourne la liste des image 
                                                    	    type: "POST",          
                                                    	    dataType:"json",
                                                                                                                 
                                                                success: function( data ) { // data est le tableau retourner pat liste.php 
                                                               $("#myVideo").empty();
															  
                                                    		      for (var i in data) // pour chaque element i de data
                                                                    
                                                                  {  
                                                   
                                                                  
                                                                         // la variable g contient le cadre de l'image
                                                                 var g = '<li class="video-imbr ui-widget-content ui-corner-tr"><video class="video" src="'+data[i]+'" width="150" height="150"> </li>'  ;        
                                             
                                                           
                                                                    $("#myVideo").append(g);  
                                                  
                                                                  }
                                                                },
                                                                error: function(jqXHR, data ) {        
                                                    		alert ('Erreur dans le serveur');    // si il yena erreur de serveur (list.php n'est pas executer)
                                                    	    }
                                                            }); 
															 
                                                                            }
																			
//insertion video  dans page
		$(document).on("click",".video-imbr",function(){
		
			var src = $(this).find("video").attr("src");
			
			
//var selection = window.getSelection().getRangeAt(0);
		      
	
		   var p = document.createElement("video");
		 p.setAttribute('src',src);
		 p.style.width='300px';
		 p.style.height='300px';
		 p.id='video-i';
		   
		 var page=document.getElementById("page");
page.insertNode(p);
		  // selection.insertNode(p);
		   
		   
		});				

		
				$(document).on("click","#Mvideo",function(){
				$('#myVideo').slideDown("slow");
				load_gal_video();
				
				});	

//insertion des video dans la page 																			
		$(document).on("click","#myVideo .video",function(){
			var src = $(this).attr("src");
			$("#page").append('<div class ="row Item" id ="'+id+'"><div class="head"><span class="remove-item fa fa-close"></span></div><div  class="cont" contenteditable ="true"> Titre de video</div><video class ="panel-heading" src="'+src+'" width="300" height="300" controls></div>');
			id++;
			$('#myVideo').slideUp("slow");
		});					
		
		$(document).on("click","#page",function(){
		
		});
		
		
		
		//pour changer les dimension du video
		$(document).on('dblclick', '#page .Item video ', function () {
var c=prompt('longueur:');
			 var l=prompt('hauteur:');
			 $(this).css("width",c+"px");
			 $(this).css("height",l+"px");
});


$(document).on('focusOut', '#page .Item video ,Iframe,img', function () {
$('#param').fadeOut();
});


$(document).on('click', 'iframe, video', function () {
$( this ).resizable();
});



$(document).on('click', '#page .Item video', function () {
		
		$('#param').fadeIn();
	var w=$(this).css("width");
		$('#w').val(w);
		var h=$(this).css("height");
		$('#h').val(h);
		
		});
	
$(document).on('click', '#youtube_i ,#ifram_i', function () {
   var id = $(this).attr('id');
   selection = window.getSelection().getRangeAt(0);
     switch(id){
		 case 'youtube_i':
		   $("#dialog-ins_youtube").dialog("open");
		 break;
		 case 'ifram_i':
		   $("#dialog-ins_iframe").dialog("open");
		 break;
	 }
});	

$(document).on('click', '#resiz', function () {
			var c=prompt('width:');
			 var l=prompt('height:');
			
			 $(this).next().css("width", c+"px");
			 $(this).next().css("height", l+"px");
			// $(this).parent()[0].resizable();
			//$( this ).closest(".youtube")find("iframe").resizable();
			

});
$(document).on('click', '#remove-iframe', function () {
$(this).parent().remove();		
});
   function resize_iframe(){
	$(".youtube").find('.cont').resizable();
	$(".iframe").find('.cont').resizable();
   }
   function ins_you_ifr(selection , lien , arg){


var div=document.createElement("div");
var cont=document.createElement("div");
  cont.setAttribute("class","cont");
	if(arg == 0){//youtube
	
	var pos = lien.search("watch");
			var yout = lien.search("youtube.com");
			var src;
					//verification du lien	
			if(yout>0){ 

			var code = lien.slice(pos+8);
			div.setAttribute('class','youtube');
			src='http://www.youtube.com/embed/'+code+'?autoplay=1';
			
			}else{
			alert('le lien n\'est pas valide !!');
			}
			
			
	}else{//une iframe
	div.setAttribute('class','iframe');
	src=lien;
	}
			
			
						
						var i=document.createElement("i");
						i.setAttribute('class','fa fa-crop');
						
						var i1=document.createElement("i");
						i1.setAttribute('class','fa fa-remove');
						i1.setAttribute('id','remove-iframe');
						
						i.setAttribute('id','resiz');
					   var ifram = document.createElement("iframe");
					   var strong = document.createElement("strong");
					   strong.setAttribute('contenteditable',"true");
					    var desc =  document.createTextNode('description');
						 
					 ifram.setAttribute('src',src);
					 ifram.setAttribute('resizablecode',code);
					 ifram.width='100%';
					 ifram.height='100%';
					 ifram.style.cssText+='display:block';
					 
					 strong.appendChild(desc);
					 var br=document.createElement('br');
					 var br1=document.createElement('br');
					
					
					
					div.appendChild(i1);
					div.appendChild(br);
					div.appendChild(strong);
					div.appendChild(i);
					cont.appendChild(ifram);
					div.appendChild(cont);
					selection.insertNode(br1);
				
					   selection.insertNode(div);
					   resize_iframe();
					   
 }
   