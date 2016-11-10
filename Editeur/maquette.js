	var tabTemplate = "<li><a class ='cont' href='#{href}'contenteditable = 'true'>&nbsp;&nbsp;&nbsp;&nbsp;</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
    var  tabCounter = 0;
var cod=true;
$(document).ready(function(){

$('#editeur').jqxSplitter({
                          width: '100%',                                         
						  
                          height: '100%',
                         orientation: 'vertical',
                          panels: [{ size: "83%", min: "10%", collapsible: false },{ size: '50%', min: "5%"}]                                                     
                           });                                                                                                       
  $('#tools').jqxSplitter({ width: "100%", height: "100%", panels: [{ size: 175}] });
  $('#ws-cd').jqxSplitter({ orientation: 'horizontal', width: "100%", height: "100%",panels: [ { size: 550}]});//---------$$                                                                                                                                   
  $('#fichier-para').jqxSplitter({ orientation: 'horizontal', width: "100%", height: "100%", panels: [{ size: "60%"}]});                                                                                                                                                                                                                 
  $('#tooltree').jqxTree({  height: '100%', width: '100%' , enableHover: true });                                                                                                                                                                                                                      
  $("#page").sortable({handle: ".panel-heading , .head , .corp",cancel: ".cont",cursor: "move",placeholder: "ui-state-highlight"});
  $("#tabswidget").jqxTabs({  height: '100%', width: '100%' });                                                                                                                                                                                                                         
    $(".poster").sortable({handler : "panel-heading",cancel:".cont",cursor:"move"}); // rendre les editeur de post et slide sortable
	 $(".item").draggable({helper: "clone",appendTo: "body" });	 

});

$(document).on('click', '#show-cod',function(){
if(cod){
$('#ws-cd').jqxSplitter({panels: [ { size: 100}]});
cod=!cod;
}else{
$('#ws-cd').jqxSplitter({panels: [ { size: 500}]});
cod=!cod;
}

//$('#ws-cd').slideToggle("slow");
});


      $(document).on('focusin', '.row', function () {
             $(this).find(".head").show();                                                       
       });                                                                 
       $(document).on('focusout', '.row', function () {
          $(this).find(".head").hide();                                                          
           });      
		   
$(document).on('click','.remove-item',function(){
	$(this).closest("div.Item").remove();
});	

$(document).on('click','.remove-post',function(){
	$(this).closest("li").remove();
});
	$(document).on('click','#img-remove',function(){
	$(this).closest(".IMAGE").remove();
});		 

   