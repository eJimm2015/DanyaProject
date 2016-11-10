$(document).on('click','.addtab',function(){
	 
				     var id = "tabs-" + tabCounter;
				 
				   var  li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, 'label' ) );
                  
				   var i = $(this).closest('div.tab-cont').find("div.tabs").attr("ind");
				   
				   $(this).closest('div.tab-cont').find( ".ui-tabs-nav" ).append( li );
				    $(this).closest('div.tab-cont').find('div.tabs').append( '<div id="' + id + '" contenteditable = "true"></div>' );
					tabs[i].tabs( "refresh" );
                    tabCounter++; 
	   
   });
    $(document).delegate( "span.ui-icon-close", "click", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    });