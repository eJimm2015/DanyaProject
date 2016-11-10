		
function charger() { //charger les fichiers existatnts pour les telecharger
    $('#download-galery').empty();
    $.ajax({
        url: 'charger_fichiers.php',
        dataType: "json",
        type: "POST",

        success: function (data) {
//$('#Mdownload-body').append('<a onclick="alert(icon.value);">tester</a>');
            for (i in data) {

                var str = data[i];
                $('#download-galery').append('<button class="btn btn-default" id="btn-download" data-toggle="tooltip" data-placement="top" data-trigger="hover" title="inserer lien de telechargement" onclick="insertDownload2( '+'\' '+ str+'\' '+' );" >'+data[i]+' </button>');
				
				
            }
			
        },
        error: function (jqXHR, data) {
            alert('erreur de serveur !!');    // si il yena erreur de serveur (charger_fichiers.php n'est pas executer)
        }
    });
	 $('#download-body-i').fadeOut();
}//-----fin de chargement des fichiers a telecharger

function insertDownload(lien)
{

	if  (lien != '') {
	
          var petite =document.getElementById('petite').checked;
          var pblic =document.getElementById('public').checked;
		  if(petite){
		   $('#page').append('<div id ="'+id+'" class="row Item"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div id="telechargement" class="cont" contenteditable ="true">    <a  href="'+lien+'" taille="petiteIcone" public="'+pblic+'" data-dismiss="modal" download><img style="display: block;" border="0" src="img/download.png" alt="download" width="30" height="30">'+lien+'</a>  </div></div></div>');
		  }
		  
		  else{
		  $('#page').append(' <div id ="'+id+'" class="row Item"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont">  <a id="telecharger" href="'+lien+'" taille="grandeIcone" public="'+pblic+'" download><img border="0" src="img/download.png" alt="download" width="75" height="75">'+lien+'</a>   </div></div></div> ');
		  }id++;
		  
       
    }
}

//insertin telechargement imbriqué
function insertDownload2(lien){
var petite =document.getElementById('petite').checked;
          var pblic =document.getElementById('public').checked;
		  
var selection = window.getSelection().getRangeAt(0);
var div=document.createElement("div");

var img = document.createElement("img");

					   var a = document.createElement("a");
					   a.setAttribute('class','tel');
					   if(petite) {
					   a.setAttribute('taille','petiteIcone');
					   img.width=30;
					   img.height=30;
					   }
					   else {
					   a.setAttribute('taille','grandeIcone');
					   img.width=75;
					   img.height=75;
					   }
					    a.setAttribute('public',pblic);
					    a.setAttribute('download','');
						
						var txt=document.createTextNode(lien);
						
						img.src='img/download.png';
						
						a.appendChild(img);
						a.appendChild(txt);
						a.setAttribute("href",lien);
					 div.appendChild(a);
				
					   selection.insertNode(a);
}
function vider(){
$('#Mbody').empty();
}

function vider(e){
e.empty();
}