window.onscroll = function() {
	if (document.body.scrollTop <40) {
       
	  down=true;
    } else {
       
	  down=false;
    }
	barre();
	};



	var down=true;
	function barre(){
	if(down){
	$('#barre').slideDown();
	$('#togle').removeClass("fa-angle-double-down");
	$('#togle').addClass("fa-angle-double-up");
	down=!down;
	}else{
	$('#barre').slideUp();
	$('#togle').removeClass("fa-angle-double-up");
	$('#togle').addClass("fa-angle-double-down");
	
	
	down=!down;
	}
	
	
	}
	
	
	//bouton de navigation
	
	
var his=new Array();
var liste=new Array();
/*
function verif(){
var i=document.getElementById("ret");
if(his.length =0){
i.hidden=true;
}else i.hidden=false;
*/

//cleanArray removes all duplicated elements
function cleanArray(array) {
  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
}

//sauvegarder l'historique courant 
function save(){
var editor=document.getElementById("page");
var str=editor.innerHTML;

his.push(str);
his=cleanArray(his);
}


//afficher l'historique precedent
function retour(){
var editor=document.getElementById("page");


if(his.length !=0)
{
var str=his.pop();

liste.push(str);//pour la liste de avancer
liste=cleanArray(liste);

editor.innerHTML=str;
}
else editor.innerHTML='';

}

function avancer(){
var editor=document.getElementById("page");


if(liste.length !=0)
{
var str=liste.pop();
editor.innerHTML=str;
}
else editor.innerHTML='';
save();
}


	$(document).ready(function(){
	
	$("#bw").mousemove(function(){
   $("#bw").hide();
   });
   
   $("#c").mouseout(function(){
   $("#bw").show();
});

});



