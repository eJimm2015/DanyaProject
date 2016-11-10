	var selection ;
			
$(document).ready(function(){


//sauvegarder chaque 5 seconds
/*
	var id = setInterval(frame, 5000);
  function frame() {
      save(); 
  }
	*/

$('#page').click(function(){
save();
});

$('#puce1').click(function(){
$('#page ul > li').css("list-style-image","url(img/puce-1.png)");
});

$('#puce2').click(function(){
$('#page ul > li').css("list-style-image","url(img/puce-2.png)");
});

$('#puce3').click(function(){
$('#page ul > li').css("list-style-image","url(img/puce-3.png)");
});
$("#texteditor ").jqxWindow({ height:80, width: 248, theme: 'energyblue', autoOpen:false  });   
$('#couleur').jqxColorPicker({ width: 250, height: 250 });
$("#popcoul").jqxPopover({ offset: { left: -50, top: 0 }, theme: 'arctic', arrowOffsetValue: 50, title: "Edition de couleur", showCloseButton: true, selector: $("#color") });    
$("#popcolonnes").jqxPopover({ offset: { left: -50, top: 0 }, theme: 'arctic', arrowOffsetValue: 50, title: "Edition de colonnes", showCloseButton: true, selector: $("#colonnes") });    
    $("#dialog-ins_col").dialog({ autoOpen: false,
                                                          height: 200,
                                                          width:  200,
                                                          modal: true,
                                                          buttons: {
															"OK":function(){
																var n = $('#dialog-ins_col').find('#nb_col').val();
																  inser_col(n);
																$(this).dialog("close");
															}  
															  
														  }});
														  $("#ins-colon").click(function(){
															  $('#dialog-ins_col').dialog("open");
														  });
	$("#dialog-ins_col-int").dialog({ autoOpen: false,
                                                          height: 200,
                                                          width:  200,
                                                          modal: true,
                                                          buttons: {
															"OK":function(){
																var n = $('#dialog-ins_col-int').find('#nb_col').val();
																  inser_col_inter(selection,n);
																$(this).dialog("close");
															}  
															  
														  }});
													
			
                                                        $("#colo ,#colonnes").click(function(){
														                         selection = window.getSelection().getRangeAt(0);
                                                                                           $("#dialog-ins_col-int").dialog("open");         
                                                                                                        });
																										
																										
                                                                        $("#col").click(function(){  
                                                                       var  color =$("#couleur").jqxColorPicker('getColor');
																														 
                                                                          var c = ""+color.hex;
																		 
                                                                               document.execCommand('styleWithCSS', false, true);
                                                                               document.execCommand('foreColor', false, c);
																					$('#popcoul').jqxPopover('close');
                                                                                                                 });
																												 
																												 
																				
									
																												 
                                                         


}) ;
   $(document).on('focusout', '[contenteditable ="true"]  ', function (e) {
   // $("#texteditor").jqxWindow('close');
  
   $('#mes-images').fadeOut();
   $('#form-iframe').fadeOut();
  $('#download-body-i').fadeOut();
  $('#param').fadeOut();
   });
   
   $(document).on('click','[contenteditable ="false"]', function () {
    //$("#texteditor").jqxWindow('close');
   });
   
   
     $(document).on('click', '#myImg,#form-iframe,#barre .btn', function () {
	 //$('#myImg').fadeIn("slow");
	$('#form-iframe').fadeIn("slow");
	$('#download-body-i').fadeIn("slow");
	$("#texteditor").jqxWindow('close');
	 });
	 
	 
   $(document).on('click', '#page [contenteditable ="true"]', function (e) {

var e1=$(this).position();
             
                                                                    $("#texteditor").jqxWindow('open');
																	//load_gal_img2();
																	//$('#myImg').fadeIn("slow");
																	$('#form-iframe').fadeIn("slow");
																	//$('#download-body-i').fadeIn("slow");
var x=e.clientX;
var y=e.clientY;

y+=document.body.scrollTop;
if(x>1086)x=1086;
 $("#texteditor").jqxWindow('open');
 y-=96;
$( "#texteditor").css("top",y+"px");
$( "#texteditor" ).css("left",x+"px");
                                                               
}); 


$(document).on('focusout', '#texteditor', function () {
                                                                     
                                                                                  
                                                                   $("#texteditor ").jqxWindow('close');
																   $('#myImg').hide();
                                                                }); 
 function commande(nom, argument){
                                                                if (typeof argument === 'undefined') {
                                                                    argument = '';
                                                                }
                                                            document.execCommand(nom, false, argument);
                                                            }


			
                        								   function inser_col(n){ // insere les colonnes
														 
			
			
			var div = document.createElement('div');
			var cont = document.createElement('div');
			var head = document.createElement('div');
			var img = document.createElement('img');
			var span = document.createElement('span');
			
			cont.setAttribute("class","cont");
			span.setAttribute("class","remove-item fa fa-close");
			img.setAttribute("src","icons/drag.png");
			div.setAttribute("class","row Item colonnes");
			head.setAttribute("class","head");
			
			head.appendChild(img);
			head.appendChild(span);
			
			var t = document.createElement('table');
			t.setAttribute("border","0");
			var body =document.createElement("tbody");
			var tr = document.createElement("tr");
			
			
			 for (var i = 1 ; i<=n;i++){
				 var td = document.createElement("td");
				   td.setAttribute("contenteditable","true");
				   td.innerHTML = "colonne numero "+i;
				 tr.appendChild(td);
			 }
			 div.setAttribute("nc",n);
			body.appendChild(tr);
			t.appendChild(body);
			cont.appendChild(t);
			div.appendChild(head);
			div.appendChild(cont);
			var page = document.getElementById('page');
			div.id=id;
			id++;
			page.appendChild(div);
			
			
		}
		function inser_col_inter(selection , n){ // insere les colonnes imbriqué
		
			
			var div = document.createElement('div');
			var cont = document.createElement('div');
			var head = document.createElement('div');
	
			var span = document.createElement('span');
			
			cont.setAttribute("class","cont");
			span.setAttribute("class","remove-col fa fa-close");
			
			div.setAttribute("class","row colonnes");
			head.setAttribute("class","head");
			
			head.appendChild(span);
			
			var t = document.createElement('table');
			t.setAttribute("border","0");
			var body =document.createElement("tbody");
			var tr = document.createElement("tr");
			
			
			 for (var i = 1 ; i<=n;i++){
				 var td = document.createElement("td");
				   td.setAttribute("contenteditable","true");
				   td.innerHTML = "colonne numero "+i;
				 tr.appendChild(td);
			 }
			 div.setAttribute("nc",n);
			body.appendChild(tr);
			t.appendChild(body);
			cont.appendChild(t);
			div.appendChild(head);
			div.appendChild(cont);
		
			var br = document.createElement('br');
			selection.insertNode(br);
			
			selection.insertNode(div);
			
			
			
		}
		$(document).on('click','.remove-col',function(){
			$(this).closest("div.colonnes").remove();
			
		});
		function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}


			
			$.cssHooks.backgroundColor = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["backgroundColor"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("background-color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
}

																			function setCOL(hex){
																				var c = ""+hex;
																			
                                                                               document.execCommand('styleWithCSS', false, true);
                                                                               document.execCommand('foreColor', false, c);
																									 }
																									 
$(document).on('click','.boiteCol,#popcoul .b-col',function(){

var e = $(this).css("backgroundColor");

 document.execCommand('styleWithCSS', false, true);
 document.execCommand('foreColor', false, e);
																	
                                                                                                                 
																												 
});