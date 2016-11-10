var tabs = [];
var indtab =0;
var id = 0 ;


$(document).ready(function(){


$("#page , #codeD").droppable({   
       accept:".item",                            
       drop: function(ev, ui)
                                                                                                                                                                                                                                 {   var s = ui.draggable.prop('id') ;
                                                                       
                 $("#texteditor").jqxWindow('close');                                                                                                                                               if (s == 'titre1'){
                                                                                                                                                                                                                                  $("#page").append('   <div id ="'+id+'" class="row Item  titre" code="-titre"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ul><h4 contenteditable="true" class="ed">Titre</h1></ul></div></div></div>');
                                                                                                                                                                                                                                     id++;
                                                                                                                                                                                                                                  } else if (s =='titre2'){
																																																									  $("#page").append('   <div id ="'+id+'" class="row Item  titre" code="-titre1"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ul><h5 contenteditable="true" class="ed">Titre</h1></ul></div></div></div>');
                                                                                                                                                                                                                                     id++;
                                                                                                                                                                                                                                  } else if (s =='titre3'){
																																																									  $("#page").append('   <div id ="'+id+'" class="row Item  titre" code="-titre2"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ul><h6 contenteditable="true" class="ed">Titre</h1></ul></div></div></div>');
                                                                                                                                                                                                                                     id++;
                                                                                                                                                                                                                                  } else if (s =='puces'){
                                                                                                                                                                                                                                     $("#page").append('   <div id ="'+id+'" class="row Item puces"><div><div class="head"><span class="remove-item fa fa-close"></span><img style="float: left; margin-right: 5px;" src="icons/drag.png"></div><div class="cont"><ul contenteditable="true"> <li>Item</li> </ul></div></div></div>');
                                                                                                                                                                                                                                             id++;          
                                                                               
																	} else if (s =='rubanT'){
                                                                                                                                                                                                                                    
			$('#page').append('<div id ="'+id+'" class="row Item rubain"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"> <table id="tabRub" style="position:center" contenteditable="true" ><tr><td> <img id="imgRub" src="img/rubain3.png" /> <h2 id="ruban" contenteditable="true"> Rubain </h2></td></tr></table><br>  </div></div></div>');
                                                                                                                                                                                                                                             id++;																						
            																			
                                                                                                                                                                                                                                  } else if(s=='para'){
                                                                                                                                                                                                                                    $("#page").append('   <div id ="'+id+'" class="row Item para"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ul><p contenteditable="true"  >Paragraphe</p></ul></div></div></div>');
                                                                                                                                                                                                                                     id++;
																																																								 } else if(s=='note'){
																																																									 
                                                                                                                                                                                                                                  $("#page").append('<div code ="note" id ="'+id+'" class="panel panel-info Item sec"> <div  class="panel-heading" id="cl"> <img style="float:left;margin-right:5px;"src="icons/note.png"> <strong class="panel-title"> Note </strong> <span class="remove-item fa fa-close"></span> </div>  <div contenteditable="true"class="panel-body">Contenu</div> </div> '); 
                                                                                                                                                                                                                                       id++;
																																																									
                                                                                                                                
                                                                                                                                                                                                                                  } else if (s=='alerte'){
                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                     $("#page").append('<div code ="alerte" id ="'+id+'" class="panel panel-danger Item sec" id="test"><div class="panel-heading"><img style="float:left;margin-right:5px;"src="icons/alert.png"> <strong>Attention!</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body" class="cont">Panel Content</div></div>');
                                                                                                                                                                                                                                        id++;
                                                                                                                                 
                                                                                                                                 
                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                  } else if (s=='obs'){
                                                                                                                                                                                                                                      $("#page").append(' <div code ="observation" id ="'+id+'" class="panel panel-default Item sec"><div class="panel-heading"> <img style="float:left;margin-right:5px;"src="icons/observation.png">   <strong>Observation</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body">Panel Content</div></div>');
                                                                                                                                                                                                                                         id++;
                                                                                                                                
                                                                                                                                                                                                                                  } else if(s=='regle'){
                                                                                                                                                                                                                                     $("#page").append(' <div code ="regle" id ="'+id+'" class="panel panel-warning Item sec"><div class="panel-heading">  <img style="float:left;margin-right:5px;"src="icons/regle.png"> <strong>Règle</strong><span class="remove-item fa fa-close"></span></div><div contenteditable="true" class="panel-body">Panel Content</div></div> ');
                                                                                                                                                                                                                                          id++;
                                                                                                                                                                                                                                  } else if(s=='def'){
                                                                                                                                                
             $("#page").append(' <div code ="definition" id ="'+id+'" class="panel panel-success Item sec"> <div class="panel-heading"> <img style="float:left;margin-right:5px;"src="icons/def.png"> <strong>Définition</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body">Panel Content</div> </div>  ');
                                                                                                                                                                                                                            id++;
                                                                                                                                                                                                                                  } else if(s=='form'){
                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                     $("#page").append(' <div code ="form" id ="'+id+'" class="panel panel-default Item sec"><div class="panel-heading"><img style="float:left;margin-right:5px;"src="icons/form.png"> <strong>Sommaire</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body">Panel Content</div> </div>  ');
                                                                                                                                                                                                                                        id++;
                                                                                                                                                                                                                                  } else if (s == 'num'){
                                                                                                                                                                                                                                    $("#page").append('   <div id ="'+id+'" class="row Item num"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ol contenteditable="true"> <li> Item </li> </ol></div></div></div>');
                                                                                                                                                                                                                                     id++;
                                                                                                                                                                                                                                  } else if (s == 'slides'){
																																																								  
																																																								  
                                                                                                                                                                                                                                         $('#page').append('<div  id ="'+id+'" class="slider Item slid" style ="width:300; height : 250 ;" ><span class="remove-item fa fa-close"></span><ul ind="'+si+'" id ="s'+si+'" class="panel-heading"></ul> </div>');
																																																								    	var slids = $('#s'+si+'').bxSlider({infiniteLoop: false});
                                                                                                                                                                                                                                         slider.push(slids);        
 																																																										slid = 's'+si;
																                                                                                                                                                                         load_ed_slide(slid);
                                                                                                                                                                                                                                       $("#dialog-edslide ").dialog('open');
																																																									   si++;
																																																									   id++;
																																																									} else if (s == "postes")  {
																																																									   
																																																									     
                                                                                                                                                                                                                                     $("#page").append(' <div id ="'+id+'" class="postes panel panel-default  Item post"><div class="panel-heading"><img style="float:left;margin-right:5px;"src="icons/form.png"> <strong class ="cont" contenteditable = "true">Rubriques</strong><span class="remove-item fa fa-close"></span></div> <div class="panel-body" ><ul id ="p'+pi+'" class="gallery ui-helper-reset ui-helper-clearfix "></ul></div> </div>  ');
                                                                                                                                                               post = 'p'+pi;
			load_ed_poste(post);
 $("#dialog-edpostes ").dialog('open');
  pi++;
id++;
																																																									} else if(s == "tableau"){
																																																									   $("#page").append(' <div id ="'+id+'" class="table-content Item"><span class="remove-item fa fa-close"></span><div class="table-responsive"><table class="table table-bordered"><thead><tr><th class="corp" ><img class="add-row" style="cursor : pointer ; float: left; margin-right: 5px;" src="icons/add.png"> <img class="add-col" style="cursor : pointer ; float: left; margin-right: 5px;" src="icons/add.png"></th></tr> </thead><tbody></tbody> </table></div></div>');
																																																									  
																																																									  id++;
																																																									  
												} 
												else if(s == "telechargement"){
												charger();
												$('#Mdownload').modal();					

												}else if(s == "IFrame"){
												load();
												$('#infos').modal();
												
												}else if(s == "youtube"){
													$('#Myoutube').modal();

												} else if (s=="tabs"){
																		//<div class="slideThree"><input type="checkbox" value="None" id="cmn-toggle-7" name="check" />	<label for="slideThree"></label></div>  <label for="cmn-toggle-7">																																				
																																								$('#page').append('<div id ="'+id+'" class="tab-cont Item"><a class="addtab">ajouter</a><span class="remove-item fa fa-close"></span> <div class="switch">  <input type="checkbox" id="chk" name="type"  />   </label></div><div class="tabs" ind="'+indtab+'"><ul class="corp"></ul></div></div>');
																																									indtab++;
																																																										tabs.push($( ".tabs" ).tabs());
																																																										id++;
																																																									} else if (s == "images"){
																																																										load_gal_img();
																																																										
																																																										$("#dialog-img ").dialog('open');
																																																								
																																																									} else if (s == "colonnes"){
																																																										$('#dialog-ins_col').dialog("open");
																																																										
																																																										
																																																										
																																																								
																																																									}
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                    });  
                                                                                                                                                      
                                                                       


});

function ajouter_titre(){
 $("#page").append('   <div id ="'+id+'" class="row Item"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ul><h4 contenteditable="true" class="ed">Titre</h4></ul></div></div></div>');
 id++;
}

function ajouter_puce(){
 $("#page").append('   <div id ="'+id+'" class="row Item puces"><div><div class="head"><span class="remove-item fa fa-close"></span><img style="float: left; margin-right: 5px;" src="icons/drag.png"></div><div class="cont"><ul contenteditable="true"> <li>Item</li> </ul></div></div></div>');
 id++;
}

function ajouter_ruban(){
 var text = prompt('inserer le titre');
																																							
		    																																					if(text!=''){
$('#page').append('<div id ="'+id+'" class="row Item"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"> <table id="tabRub" style="position:center" contenteditable="true" ><tr><td> <img id="imgRub" src="img/rubain3.png" /> <h2 id="ruban">' + text + ' </h2></td></tr></table><br>  </div></div></div>');
   id++;
}
}

function ajouter_para(){
$("#page").append('   <div id ="'+id+'" class="row Item"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ul><p contenteditable="true">Paragraphe</p></ul></div></div></div>');
 id++;
}

function ajouter_note(){
$("#page").append('<div code ="note"id ="'+id+'" class="panel panel-info Item sec"> <div  class="panel-heading" id="cl"> <img style="float:left;margin-right:5px;"src="icons/note.png"> <strong class="panel-title"> Note </strong> <span class="remove-item fa fa-close"></span> </div>  <div contenteditable="true"class="panel-body">Contenu</div> </div> ');
 id++;
}

function ajouter_alert(){
$("#page").append('<div code="alerte" id ="'+id+'" class="panel panel-danger Item sec " id="test"><div class="panel-heading"><img style="float:left;margin-right:5px;"src="icons/alert.png"> <strong>Attention!</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body" class="cont">Panel Content</div></div>');
 id++;
}

function ajouter_obs(){
 $("#page").append(' <div code="observation" id ="'+id+'" class="panel panel-default Item sec"><div class="panel-heading"> <img style="float:left;margin-right:5px;"src="icons/observation.png">   <strong>Observation</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body">Panel Content</div></div>');
 id++;
}

function ajouter_regle(){
$("#page").append(' <div code="regle" id ="'+id+'" class="panel panel-warning Item sec"><div class="panel-heading">  <img style="float:left;margin-right:5px;"src="icons/regle.png"> <strong>Règle</strong><span class="remove-item fa fa-close"></span></div><div contenteditable="true" class="panel-body">Panel Content</div></div> ');
 id++;
}

function ajouter_def(){
$("#page").append(' <div code="definition" id ="'+id+'" class="panel panel-success Item sec"> <div class="panel-heading"> <img style="float:left;margin-right:5px;"src="icons/def.png"> <strong>Définition</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body">Panel Content</div> </div>  ');
 id++;
}

function ajouter_form(){
 $("#page").append(' <div code="form" id ="'+id+'" class="panel panel-default Item sec"><div class="panel-heading"><img style="float:left;margin-right:5px;"src="icons/form.png"> <strong>Sommaire</strong><span class="remove-item fa fa-close"></span></div> <div contenteditable="true" class="panel-body">Panel Content</div> </div>  ');
 id++;
}

function ajouter_num(){
 $("#page").append('   <div id ="'+id+'" class="row Item num"><div><div class="head"><img style="float: left; margin-right: 5px;" src="icons/drag.png"><span class="remove-item fa fa-close"></span></div><div class="cont"><ol contenteditable="true"> <li> Item </li> </ol></div></div></div>');
 id++;
}


function ajouter_slide(){
$('#page').append('<div  id ="'+id+'" class="slider Item slid" style ="width:300; height : 250 ;" ><span class="remove-item fa fa-close"></span><ul ind="'+si+'" id ="s'+si+'" class="panel-heading"></ul> </div>');
  	var slids = $('#s'+si+'').bxSlider({infiniteLoop: false});
                                                                                                                                                               slider.push(slids);
																																							   slid = 's'+si;
                                                                                                                                                                 load_ed_slide(slid);
                                                                                                                                                                $("#dialog-edslide ").dialog('open');																																							  si++;
 id++;
}

function ajouter_poste(){
 $("#page").append(' <div id ="'+id+'" class="panel panel-default postes Item post"><div class="panel-heading"><img style="float:left;margin-right:5px;"src="icons/form.png"> <strong>Rubriques</strong><span class="remove-item fa fa-close"></span></div> <div class="panel-body" ><ul id ="p'+pi+'" class="gallery ui-helper-reset ui-helper-clearfix "></ul></div> </div>  ');
																																						  post = 'p'+pi;
																																							  load_ed_poste(post);
																																							  $("#dialog-edpostes ").dialog('open');
																																							  pi++;
																	  
 id++;
}

function ajouter_tableau(){
$("#page").append(' <div id ="'+id+'" class="table-content Item"><span class="remove-item fa fa-close"></span><div class="table-responsive"><table class="table table-bordered"><thead><tr><th class="corp" ><img class="add-row" style="cursor : pointer ; float: left; margin-right: 5px;" src="icons/add.png"> <img class="add-col" style="cursor : pointer ; float: left; margin-right: 5px;" src="icons/add.png"></th></tr> </thead><tbody></tbody> </table></div></div>');
 id++;
}

function ajouter_tabs(){
$('#page').append('<div id ="'+id+'" class="tab-cont Item"><a class="addtab">ajouter</a><span class="remove-item fa fa-close"></span> <div class="switch">  <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-round" type="checkbox">   </label></div><div class="tabs" ind="'+indtab+'"><ul class="corp"></ul></div></div>');																																								indtab++;
																																							tabs.push($( ".tabs" ).tabs());
 id++;
}
