
                $(document).ready(function(){
				$("#lien_tabs").jqxTabs({  height: 200, width: 500 });
				   $("#poplien").jqxPopover({ offset: { left: 0, top: 0 }, theme: 'arctic', arrowOffsetValue: 50, title: "Edition de liens", showCloseButton: true, selector: $("#lien") });    
                                                        
														$("#in").click(function(){

                       var url = $("#url").val();
					 setlien(url,0);
                    });		
$("#ino").click(function(){

                       var url = $("#url1").val();
					 setlien(url,1);
                    });	

$("#scroll").click(function(){
                     if (!$('#scroll_vis').is(':empty')){
					   var url = $("#scroll_vis > div").prop('id');
					 setlien('#'+url,0);
					 }
                       
                    });	
$("#selectitem").click(function(){

    $("#ws").clone().appendTo("#vis");
	$(" #vis > #ws >#page ").find("[contenteditable = true]").attr("contenteditable","false");
	
    $("#dialog-vis").dialog("open");
});	
$("#dialog-vis").dialog({
   autoOpen : false ,
   modal : true ,
  height:1000,
  width : 1000

});	

				});                                             
                                                     
     function setlien(lien,n) {  
                                                            var selection = window.getSelection().getRangeAt(0);
                                                                var s = window.getSelection().toString();
                                                
                                                              var selectedText = selection.extractContents();
                                                            
                                                                
                                                
                                                            var h = document.createElement("a");
															h.setAttribute("lien",n);
															  h.setAttribute("href", lien);
															      if (n == 1){
												                  h.setAttribute("target", "_blank");
												                       }
                                                             var v =  document.createTextNode(s);
                                                             if(lien.charAt(0) == '#') h.setAttribute("lien",2);
                                                            
                                                            h.appendChild(v);
                                                                
                                                             
                                                            selection.insertNode(h);
                                                        }                                
$(document).on('dblclick','#vis > #ws > #page > div',function(){
   
 
  var th =$(this).prop('id');
  
 $("#scroll_vis").empty();
  $('#'+th).clone().appendTo("#scroll_vis");
 
  $("#dialog-vis").dialog("close");
    
  
});	