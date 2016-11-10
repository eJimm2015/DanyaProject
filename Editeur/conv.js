var hexDigits = new Array // hex digiteau (chaine)
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
$(document).ready(function(){
	$('#page').bind("DOMSubtreeModified",function(){// pour chaque modification de l'arbre DOM 
  trad(); // on lance la traduction de conteneu en D
});
$('#copy').click(function(){
	var code = document.getElementById('cod'),
    //message = document.getElementById('message'),
    range = document.createRange();
  range.selectNode(code);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
});
});
String.prototype.replaceAt=function(index, character) { // pour modifier le ieme caractere de la chaine
    return this.substr(0, index) + character + this.substr(index+character.length);
}
                
function trad(){ // cette fonction a pour bute de convertire les element de sortie de l'editeur
	$('#cod').empty(); // on vide la zode du code
	$('#page').find('.Item').each(function(){ // pour chaque element de la page (chaque elemet a por classe Item)
		if($(this).hasClass('sec')){  // si c'est une section spetiale
			var $res = $(this).find('.panel-body'); // on cherche le corps de la section
			var code = paramaitre($res); // on traduite le corps en D 
			$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-'+$(this).attr('code')+'</span><span style="color: rgb(255, 0, 0);">[</span>'+code+'<span style="color: rgb(255, 0, 0);">]</span></div>'); // on inser le code dans la zone
		}else if($(this).hasClass('titre')){  // si c'est un titre
			var $res = $(this).find('.ed'); // on cherche le contenue de titre
			var code = paramaitre($res); // on traduite le contenur en D 
			$('#cod').append('<div><span style="color: rgb(0, 54, 173);">'+$(this).attr('code')+'</span><span style="color: rgb(255, 0, 0);">[</span>'+code+'<span style="color: rgb(255, 0, 0);">]</span></div>'); // on inser le code dans la zone
		}else
	
		  if($(this).hasClass('post')){ // les postes
			       var desc = [] ; // tableau des description
			      var liens = [] ; // tableau des liens
				  var imag = [] ; // tableau des sources d'images
			  $(this).find('li').each(function(){ // pour chaque puces des postes (a voire dans la structure des posts)
				  var $res = $(this).find('.pdesc'); // recuper la description
				  desc.push(paramaitre($res)); // convertire la description en D et l'enpiler
				  imag.push($(this).find('img').attr('src')); // empiler les source d'images
				  liens.push($(this).attr('lien')); //  empiler les liens
				 
				  
			  });
			  for (var i in desc){ // generer le code D
		   // pour chaque post ( pour chaque element empiler) on affiche son code en D
	$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-post</span><span style="color: rgb(255, 0, 0);">[</span> '+desc[i]+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span> '+liens[i]+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span> '+imag[i]+'<span style="color: rgb(255, 0, 0);">]</span> </div>');
	}
	// afficher l'instruction qui affiche le post
	$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-afficherpost</span><span style="color: rgb(255, 0, 0);">[</span> '+$(this).find('strong').text()+'<span style="color: rgb(255, 0, 0);">]</span> </div>');
			
		  }else
		  if($(this).hasClass('slid')){ // les slides
			      var liens = [] ; // tableau des liens
				  var imag = [] ;  // tableau d'images
			  $(this).find('li').each(function(){ // pour chaque element de slides (les element sont des puces a voire sur la strucure des slides)
				 
				  imag.push($(this).find('img').attr('src')); // on empile les source d'images
				  liens.push($(this).attr('lien'));  // on empile les liens
				 
				  
			  });
			  for (var i in imag){
		          // pour chaque element de slide en genere son code D
	$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-slide</span><span style="color: rgb(255, 0, 0);">[</span> '+imag[i]+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span> '+liens[i]+'<span style="color: rgb(255, 0, 0);">]</span> </div>');
	} // on affiche l'instruction qui affiche les slides
	$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-afficherslide</span></div>');
			
		  }else
		  if($(this).hasClass('tab-cont')){ // les tabs
			      var $tabs = $(this); // on selection le tabs a traduire
				 
				  $(this).find('.corp').find('li').each(function(){ // parcourire l'entete de tabs (a voire la structure des tabs)
					  
					   var $contenue = $tabs.find('#'+$(this).attr('aria-controls')); // on selection le contenue de tab a traduire (qui corespondant l'entete selectioner)			  
					   var titre = paramaitre($(this).find('a')); // on selection le titre
					   // on traduit en D le contenue via paramaitre($html) et on insere le code de tabs
					  $('#cod').append('<div><span style="color: rgb(0, 54, 173);">-tabs</span><span style="color: rgb(255, 0, 0);">[</span>'+titre+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+paramaitre($contenue)+'<span style="color: rgb(255, 0, 0);">]</span></div>');
				  });
				  // on inser le code d'affichage selon l'affichage souhaiter (avec ou sans animation)
				   if($(this).find('input:checkbox[name=type]').is(':checked')){
					 $('#cod').append('<div><span style="color: rgb(0, 54, 173);">-affichertabs2</span></div>');
			  } else 		 $('#cod').append('<div><span style="color: rgb(0, 54, 173);">-affichertabs1</span></div>');
			
				 
		  }else
		  if($(this).hasClass('table-content')){ // les tableau
			    var c = 0 ; // une variable pour idique si on est dans l'entete ou non
				var cod ; // la variable qui porte le code D de la ligne 
				var width = []; // tableau pour les dimention des colonnes
			    $(this).find('thead').find('th').each(function(){ // pour chaque cellule de l'entete
					width.push($(this).css('width'));	// on empile leur dimention
				});
				$(this).find('tbody').find('tr').each(function(){ // pour chaque ligne du corp
					 var ligne = []; // tableau pour empiler le contenue de la ligne a traduire
					 var i ;
					 if (c == 0) {cod = '<div><span style="color: rgb(0, 54, 173);">-entetetable</span><span style="color: rgb(255, 0, 0);">[</span>';}
					     // c est la variable indiquant si on est dans l'entete du tableau ou non
					    else {cod = '<div><span style="color: rgb(0, 54, 173);">-lignetable</span><span style="color: rgb(255, 0, 0);">[</span>';}
					$(this).find('td').each(function(){ // pour chaque celule de la ligne
						ligne.push(paramaitre($(this))); // on traduite sont contenue via paramaitre($html) et on l'empile
					});
					if (c==0){ // on traduit l'entete
						for( i = 1 ; i < ligne.length;i++){
							cod += ligne[i] + ':' + width[i] +' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>' ;
						} // on traduite une ligne
					} else {
						for(i = 1 ; i < ligne.length;i++){
							cod += ligne[i] +' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>' ;
						}
					}
						cod = cod.replaceAt(cod.length-8," "); // on suprime le dernier | de la boucle 
			
					cod += '<span style="color: rgb(255, 0, 0);">]</span></div>';
					c = 1;
					$('#cod').append(cod); // on insere le code
				});
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-affichertable</span></div>');
		  }else
		  if($(this).hasClass('puces')){ // les puces
			   var puces = "";
			   var aligne ="";
			   
			    $(this).find('li').each(function(){ // pour chaque elemt de la puces
				     var end ="";
					 if($(this).css('text-align')){
						
						 switch($(this).css('text-align')){
							 case  'center' :
							  aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
						
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>C<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
							  case  'right' :
							   aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
						
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>D<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
						 }
					 }
				// on le traduite en D via paramaitre($html) et n le cocatene au code
                    puces += aligne+paramaitre($(this)) + end+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>';
				});
				puces = puces.replaceAt(puces.length-8," "); // on suprime le dernier | de la boucle 
				// on insere le code
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-puce</span><span style="color: rgb(255, 0, 0);">[</span>'+puces+']</div>');
		  }else
		  if($(this).hasClass('num')){// numerotation
			   var nums = "";
			   var aligne ="";
			   
			    $(this).find('li').each(function(){ // pour chaque elemt de numerotation
				var end ="";
				     if($(this).css('text-align')){
						 
						
						 switch($(this).css('text-align')){ // si il ona alignement de text
							 case  'center' :
							   aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>C<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
							  case  'right' :
							  aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>D<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
						 }
					 }
					  // on suprime le dernier | de la boucle 
				
				// on le traduite en D via paramaitre($html) et n le cocatene au code
                    nums += aligne+paramaitre($(this)) + end+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>';
				});
				nums = nums.replaceAt(nums.length-8," ");
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-num</span><span style="color: rgb(255, 0, 0);">[</span>'+nums+'<span style="color: rgb(255, 0, 0);">]</span></div>');
		  }else
		  if($(this).hasClass('para')){ // paragraphe
			   var para = "";
			    $(this).find('p').each(function(){ // pour chaque paragraphe
                    para += paramaitre($(this)) ; // on le traduit en D via paramaitre($html) et on le concatene au code
						// on affiche son code D
					$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-p</span><span style="color: rgb(255, 0, 0);">[</span>'+para+'<span style="color: rgb(255, 0, 0);">]</span></div>');
		
				});
					
		  }else
		  if($(this).hasClass('rubain')){ //Ruban
			   
			   var $rubain = $(this).find('h2'); // on selection le contenue a traduire
			   // on le traduit par paramaitre($html) et on insere son Code D
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-ruban</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($rubain)+'<span style="color: rgb(255, 0, 0);">]</span></div>');
		  }else
		  if($(this).hasClass('youtube')){ // YOUTUBE
			   
			    var desc = paramaitre($(this).find('strong')); // on traduit la descreption
				var code = $(this).find('iframe').attr('resizablecode'); // on recupere le code de la video (on a vree u attribue specifique )
				var width = $(this).find('.cont').css('width'); // on recupere les dimention
				var height = $(this).find('.cont').css('height');
				// on affiche le code 
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-youtube</span><span style="color: rgb(255, 0, 0);">[</span>'+code+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+desc+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+width+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+height+'<span style="color: rgb(255, 0, 0);">]</span></div>');
		  }else
		  if($(this).hasClass('IMAGE')){ // LEs images
			   
			    var src = $(this).find('.panel-heading').attr('src'); // on recupere la source
				var titre = paramaitre($(this).find('strong')); // on traduite le tire en D
				var width = $(this).find('.panel-heading').css('width'); // on recupere les dimention
				var height = $(this).find('.panel-heading').css('height');
				var pos ="";
				  switch($(this).attr('align')){ // on recupere la position 
					  case "center":
					  pos ="C";
					  break;
					  case  "left":
					   pos ="G";
					   break;
					   case "right":
					   pos ="D";
					   break;
				  }
				  // on insere son code en D
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-image</span><span style="color: rgb(255, 0, 0);">[</span>'+src+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+titre+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+width+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+height+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+pos+'<span style="color: rgb(255, 0, 0);">]</span></div>');
		  }else
		  if($(this).hasClass('iframe')){//Les iframe
			   
			    var src = $(this).find('iframe').attr('src'); // on recupere la source
				var titre = paramaitre($(this).find('strong')); // on traduit le titre
				var width = $(this).find('.cont').css('width'); // on recupere les dimention
				var height = $(this).find('.cont').css('height');
				// on genere le code et on l'affiche 
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-iframe</span><span style="color: rgb(255, 0, 0);">[</span>'+src+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+titre+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+width+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+height+'<span style="color: rgb(255, 0, 0);">]</span></div>');
		  }else
		  if($(this).hasClass('colonnes')){ // les colonnes
			   
			    var nb = $(this).attr('nc'); // on recupere le nombre de colonnes (se trouve dans un attribue specefique nc)
				var colonnes ="";
				$(this).find('td').each(function(){ // poure chaque colonnes(avoire la structure des colonnes)
				  // on la tradut en d via paramaitre($html) et oncocatene le code 
					colonnes += paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'; 
				});
				colonnes = colonnes.replaceAt(colonnes.length-8," "); // on suprime le dernier | de la boucle 
				
				$('#cod').append('<div><span style="color: rgb(0, 54, 173);">-colonnes</span><span style="color: rgb(255, 0, 0);">[</span>'+nb+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+colonnes+'<span style="color: rgb(255, 0, 0);">]</span></div>');
		  }
	});
}

function paramaitre($html){ // cette fonction a pour bute de traduire les text et les imbriquation de l'obget html en argument 
  return	$html.clone().children().replaceWith(function(){ // pour chaque fils de $html en le remplace avec
	     
                 switch($(this).prop('tagName')){ // si se fils est une:
					 case 'B': // balise B 
					          var code = "";
							  var col ="";
							  if($(this).css('color')){ //on verifier si elle est coloriser
							           // on traduit la coleur en D
								  code += '<span style="color: rgb(0, 54, 173);">-couleur</span><span style="color: rgb(255, 0, 0);">[</span>';
								  col += '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+rgb2hex($(this).css('color'))+'<span style="color: rgb(255, 0, 0);">]</span>';
								  
							  }
							  // on return le resultat gras
					    return  code + '<span style="color: rgb(0, 54, 173);">-g</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="color: rgb(255, 0, 0);">]</span>'+col;
					 break;
					  case 'U':  // men choser pour souligner
					   var code = "";
							  var col ="";
							  if($(this).css('color')){
								  code += '<span style="color: rgb(0, 54, 173);">-couleur</span><span style="color: rgb(255, 0, 0);">[</span>';
								  col += '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+rgb2hex($(this).css('color'))+'<span style="color: rgb(255, 0, 0);">]</span>';
								  
							  }
					    return  code + '<span style="color: rgb(0, 54, 173);">-s</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="color: rgb(255, 0, 0);">]</span>'+col;
					 break;
					  case 'I': // meme chose pour ialique
					 var code = "";
							  var col ="";
							  if($(this).css('color')){
								  code += '<span style="color: rgb(0, 54, 173);">-couleur</span><span style="color: rgb(255, 0, 0);">[</span>';
								  col += '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+rgb2hex($(this).css('color'))+'<span style="color: rgb(255, 0, 0);">]</span>';
								  
							  }
					    return  code + '<span style="color: rgb(0, 54, 173);">-i</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="color: rgb(255, 0, 0);">]</span>'+col;
					 break;
					 case 'DIV': // une balise DIV
					    if ($(this).hasClass('IMAGE')){ // une image imbriquer
							var titre = paramaitre($(this).find('.titre'));  // meme chose pour les image en sortie (voire la fonction trad())
							var src = $(this).find('img').attr('src');
							var width = $(this).find('img').css('width');
							var height = $(this).find('img').css('height');
							var end="";
							if($(this).attr('align')){
							switch($(this).attr('align')){
							case 'center':end='C';
							break;
							
							case 'left':end='G';
							break;
							
							case 'right':end='D';
							break;
							}
							}
							return '<span style="color: rgb(0, 54, 173);">-getimage</span><span style="color: rgb(255, 0, 0);">[</span>'+src+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+titre+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+width+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+height+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+end+'<span style="color: rgb(255, 0, 0);">]</span>';
						} 
						if ($(this).hasClass('youtube')){ // youtube imbriquee // meme chose pour youtube en sortie(voire la fonction trad())
							var desc = paramaitre($(this).find('strong'));
			              	var code = $(this).find('iframe').attr('resizablecode');
				            var width = $(this).find('.cont').css('width'); // on recupere les dimention
				            var height = $(this).find('.cont').css('height');
				            return '<span style="color: rgb(0, 54, 173);">-getyoutube</span><span style="color: rgb(255, 0, 0);">[</span>'+code+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+desc+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+width+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+height+'<span style="color: rgb(255, 0, 0);">]</span>';
							
						}
						if ($(this).hasClass('colonnes')){ // colonnes imbriquee meme chose pour les colonnes en sortie (voire la fonction trad())
						    var nb = $(this).attr('nc');
				var colonnes ="";
				$(this).find('td').each(function(){
					colonnes += paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>';
				});
					colonnes= colonnes.replaceAt(colonnes.length-8," "); // on suprime le dernier | de la boucle 
			
				return '<span style="color: rgb(0, 54, 173);">-getcolonnes</span><span style="color: rgb(255, 0, 0);">[</span>'+nb+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+colonnes+'<span style="color: rgb(255, 0, 0);">]</span>';
		
						}
						if ($(this).hasClass('iframe')){ // iframe imbrique meme chose pour iframe sortie (voire la fonction trad())
				var src = $(this).find('iframe').attr('src');
				var titre = paramaitre($(this).find('strong'));
				var width = $(this).find('.cont').css('width'); // on recupere les dimention
				var height = $(this).find('.cont').css('height');
				return '<span style="color: rgb(0, 54, 173);">-getiframe</span><span style="color: rgb(255, 0, 0);">[</span>'+src+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+titre+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+width+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+height+'<span style="color: rgb(255, 0, 0);">]</span>';
		
						}
					    if ($(this).css('text-align') == "center"){
							return '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>C<span style="color: rgb(255, 0, 0);">]</span>';
						} else  if ($(this).css('text-align') == "right"){
							return '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>D<span style="color: rgb(255, 0, 0);">]</span>';
						} else
						{
							return '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="color: rgb(255, 0, 0);">]</span>';
							
						}
					    
					 break;
					 case 'FONT': // une balis Font
					 var code = ""; 
								
							
								
								var end_col = "";
								var c = 0;
								var d = 0;
								var e = 0;
								var taille ="";
					    if($(this).attr('size')){ // si elle represent une taille
							 var taille = $(this).attr('size'); // on recupere la taille
						code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';
						taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+$(this).attr('size')+'<span style="color: rgb(255, 0, 0);">]</span>'
                               
						e = 1 ;
						}
						 if($(this).css('color')){ // si elle est coloriser
							 // meme chose pour les coulleur
							 code += '<span style="color: rgb(0, 54, 173);">-couleur</span><span style="color: rgb(255, 0, 0);">[</span>';
							
						 
							 end_col =' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>' + rgb2hex($(this).css('color')) +'<span style="color: rgb(255, 0, 0);">]</span>';
							  d = 1 ;
							  
							 } 
						if($(this).css('font-weight')){ // traiter les style de text
							code += '<span style="color: rgb(0, 54, 173);">-g</span>';
						 
						
						 c = 1;
							 } 
						if($(this).css('font-style')){
							 if  (c == 0){
								code += '<span style="color: rgb(0, 54, 173);">-i</span>';
							} else {
								code += '<span style="color: rgb(0, 54, 173);">i</span>';
							}
						 
						 
						  c = 1;
							 } 
						if($(this).css('text-decoration')){
						if  (c == 0){
								code += '<span style="color: rgb(0, 54, 173);">-s</span>';
							} else {
								code += '<span style="color: rgb(0, 54, 173);">s</span>';
							}
						
						  c = 1;
							 }
							 if (c == 1){
							code += '<span style="color: rgb(255, 0, 0);">[</span>';
						}
							 code += paramaitre($(this));
                        if (c == 1){
							code += '<span style="color: rgb(255, 0, 0);">]</span>';
						}							 
						 code += end_col+taille ;
						
						
					    return code;
						 break;
					 case 'SPAN': // si cest un span
                     			var code = ""; 
								
							
								
								var end_col = "";
								var c = 0;
								var d = 0;
								var e = 0;
								var taille ="";
							if($(this).css('font-size')){ // si on a une taille
								    // on recupere la dimention de la taille et en genere le code D corespondent
								
								e = 1 ;
								switch($(this).css('font-size')){ 
								 case 'xx-small':
								taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>1<span style="color: rgb(255, 0, 0);">]</span>'
                                 code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';                                
								break;
                                 case 'x-small':
								taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>2<span style="color: rgb(255, 0, 0);">]</span>'
                                code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';                                
								break;
                                case 'small':
								taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>3<span style="color: rgb(255, 0, 0);">]</span>'
                                code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';                                
								break;
                                case 'medium':
								taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>4<span style="color: rgb(255, 0, 0);">]</span>'
                                code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';                                
								break;
                                case 'large':
								taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>5<span style="color: rgb(255, 0, 0);">]</span>'
                                  code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';                                
								break;
                                case 'x-large':
								taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>6<span style="color: rgb(255, 0, 0);">]</span>'
                                code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';                                
								break;
                                case 'xx-large':
								taille = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>7<span style="color: rgb(255, 0, 0);">]</span>'
                                code += '<span style="color: rgb(0, 54, 173);">-taille</span><span style="color: rgb(255, 0, 0);">[</span>';                                
								break;								 
									
								}
								 
							}
					     if($(this).css('color')){ // si elle est coloriser
							 // on recupere la couleur et on genere sont code D
							 code += '<span style="color: rgb(0, 54, 173);">-couleur</span><span style="color: rgb(255, 0, 0);">[</span>';
							
						 
							 end_col ='<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>' + rgb2hex($(this).css('color')) +'<span style="color: rgb(255, 0, 0);">]</span>';
							  d = 1 ;
							  
							 } 
						if($(this).css('font-weight')){  // traitement des style de text
							code += '<span style="color: rgb(0, 54, 173);">-g</span>';
						 
						
						 c = 1;
							 } 
						if($(this).css('font-style')){
							 if  (c == 0){
								code += '<span style="color: rgb(0, 54, 173);">-i</span>';
							} else {
								code += '<span style="color: rgb(0, 54, 173);">i</span>';
							}
						 
						 
						  c = 1;
							 } 
						if($(this).css('text-decoration')){
						if  (c == 0){
								code += '<span style="color: rgb(0, 54, 173);">-s</span>';
							} else {
								code += '<span style="color: rgb(0, 54, 173);">s</span>';
							}
						
						  c = 1;
							 }
							 if (c == 1){
							code += '<span style="color: rgb(255, 0, 0);">[</span>';
						}
							 code += paramaitre($(this));
                        if (c == 1){
							code += '<span style="color: rgb(255, 0, 0);">]</span>';
						}							 
						 code += end_col+taille ;
						
						
					    return code;
							
					 break;   
                     				 
					 case 'UL':  // des puces imbriquee
					     var puce ="" ;
						   $(this).find('li').each(function(){ // pour chaque elemt de numerotation
				         var end ="";
						 var aligne="" ;
				         if($(this).css('text-align')){
						    
						
						 switch($(this).css('text-align')){ // si il ona alignement de text
							 case  'center' :
							   aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>C<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
							  case  'right' :
							  aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>D<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
						 }
					 }
					  // on suprime le dernier | de la boucle 
				
				// on le traduite en D via paramaitre($html) et n le cocatene au code
                    puce += aligne+paramaitre($(this)) + end+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>';
				});
						  	puce= puce.replaceAt(puce.length-8," "); // on suprime le dernier | de la boucle 
			
					    return '<span style="color: rgb(0, 54, 173);">-getpuce</span><span style="color: rgb(255, 0, 0);">[</span>'+puce+'<span style="color: rgb(255, 0, 0);">]</span>';
					 break;
					 case 'OL':  // des numerotation imbriquee meme chose pour les numerotation en sortie (voire la fonction trad())
					     var num ="" ;
						   $(this).find('li').each(function(){ // pour chaque elemt de numerotation
				         var end ="";
						 var aligne="" ;
				         if($(this).css('text-align')){
						    
						
						 switch($(this).css('text-align')){ // si il ona alignement de text
							 case  'center' :
							   aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>C<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
							  case  'right' :
							  aligne = '<span style="color: rgb(0, 54, 173);">-getp</span><span style="color: rgb(255, 0, 0);">[</span>';
							   end = '<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>D<span style="color: rgb(255, 0, 0);">]</span>';
							 break;
						 }
					 }
					  // on suprime le dernier | de la boucle 
				
				// on le traduite en D via paramaitre($html) et n le cocatene au code
                    num += aligne+paramaitre($(this)) + end+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>';
				});
						    	num= num.replaceAt(num.length-8," "); // on suprime le dernier | de la boucle 
			
					    return '<span style="color: rgb(0, 54, 173);">-getnum</span><span style="color: rgb(255, 0, 0);">[</span>'+num+'<span style="color: rgb(255, 0, 0);">]</span>';
					 break;
					  case 'A': // une balise A
					  if ($(this).hasClass('tel')){ //si il s'agit d'un teleshargement
						  return '<span style="color: rgb(0, 54, 173);">-telecharger</span><span style="color: rgb(255, 0, 0);">[</span> '+$(this).attr('href')+' , '+$(this).attr('public')+' <span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span> '+$(this).attr('taille')+' <span style="color: rgb(255, 0, 0);">]</span></div>';
		        	
					  } // si non un lien 
					   if(!$(this).attr('lien')){
						       return '<span style="color: rgb(0, 54, 173);">-lvu</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+$(this).attr('href')+'<span style="color: rgb(255, 0, 0);">]</span>';
					   
					   }
					     switch($(this).attr('lien')){ // l'attrubue lien contiend l'indice de liens (0 1 2)
							 case '0': // lien vers un site extern
							    return '<span style="color: rgb(0, 54, 173);">-lvu</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+$(this).attr('href')+'<span style="color: rgb(255, 0, 0);">]</span>';
					   
							 break;
							 case '1': // lien ver un site intern
							    return '<span style="color: rgb(0, 54, 173);">-lvm</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+$(this).attr('href')+'<span style="color: rgb(255, 0, 0);">]</span>';
					   
							 break;
							 case '2': // liens vers signaux locaux
							    return '<span style="color: rgb(0, 54, 173);">-lvs</span><span style="color: rgb(255, 0, 0);">[</span>'+paramaitre($(this))+'<span style="line-height: 1.231; letter-spacing: 0.1px; color: rgb(229, 0, 202);">|</span>'+$(this).attr('href')+'<span style="color: rgb(255, 0, 0);">]</span>';
					   
							 break;
						 }
					 break;
					 case 'BR':
					  
					   return " ";
					 break;
					 
					 default : // si il on a pas de fils (critere d'arret de la recurcivite) la fonction retourne le contenue textuelle 
					 return paramaitre($(this));
					 break;
					  
				 }	
				 
	}).end().html(); // on retourne le code D 
	
	
}

function rgb2hex(rgb) { // convertire rgb a hex 
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) { // hex digiteau 
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
 