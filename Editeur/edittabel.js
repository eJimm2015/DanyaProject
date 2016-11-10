
$(document).on('click', '.add-row', function () { // click sur ajouter une ligne
      $( ".table" ).colResizable({ disable : true });
    
    var table = $(this).closest('div.table-content'), // selection le div contenant le tableau a editer dans la variable table
	
        
        tbody = table.find('tbody'), // selection le body dans la variable tbody et head dans thead
        thead = table.find('thead');

    
    if (tbody.children().length > 0) { 
        // si on a au mois une ligne dans le tableau on la clone et on l'insere dans blody pour gagner du temp
       
        tbody.find('tr:last-child').clone().appendTo(tbody);
    } else {
        // si non on vas cree la premier ligne du tableau (la base du tableau)
        var trBasic = $('<tr />', { // cree un celu
            'html': '<td><span class="remove remove-row">x</span></td><td contenteditable ="true">&nbsp;&nbsp;&nbsp;&nbsp;</td>'
        }),
            // on cerche combien de coloum dans le head 
            columns = thead.find('tr:last-child').children().length;
         if (columns > 1){
        // une boucle pour , pour inserer les celeue de la ligne (on parcours les colones) 
        for (var i = 0, aret = columns - trBasic.children.length; i < aret; i++) {
                // cree le td
            $('<td contenteditable ="true">', {
               //  contenent se html
                'html': '&nbsp;&nbsp;&nbsp;&nbsp;'
                // insere l'objet cree dans la variable trbasic
            }).appendTo(trBasic);
        }
        // inserer le contenu trbasic (la premier line) dans le body de tableau
        tbody.append(trBasic);
    }
	}
	$( ".table" ).colResizable({ liveDrag : true });
});

$(document).on('click', 'span.remove-row', function () { // clicker sur la croix de supression de ligne
$( ".table" ).colResizable({ disable : true });
    $(this).closest('tr').remove(); // on cherche le tr (la ligne) et on la suprime 
	$( ".table" ).colResizable({ liveDrag : true });
	
});

$(document).on('click', 'span.remove-col', function () { // click sur suprimer une colones
    // la recherche de le th corespondons a la cellul ou on a cliquer sur la crois
	$( ".table" ).colResizable({ disable : true });
    var cell = $(this).closest('th'),
        index = cell.index() + 1;
    
	//
    cell.closest('table').find('th, td').filter(':nth-child(' + index + ')').remove();
	// on cherch le table corespond a cell on cherche toutes les th et td corespond on les filtre selon l'index et on les suprime
    $( ".table" ).colResizable({ liveDrag : true });
});

$(document).on('click', '.add-col', function () { // click sur ajouter une colones
    $( ".table" ).colResizable({ disable : true });
    var table = $(this).closest('div.table-content').find('table'), //on cherche le tableau corespondon ou on a clicker
        thead = table.find('thead'), // on selection le head
        // finding the last <tr> of the <thead>:
        lastTheadRow = thead.find('tr:last-child'), // on cherche la dernier ligne inserer
        tbody = table.find('tbody'); // on selection le body de table
    
    // cree un nouveau th
    $('<th >', {
        'html': '&nbsp;&nbsp;&nbsp;&nbsp;<span class="pull-left remove remove-col">x</span>'
        //  on l'ajoute a la dernier ligne cree
    }).appendTo(lastTheadRow);
    // creating a <td>:
	var lasttd=table.find('td:last-child');
    $('<td contenteditable ="true">', {
        // setting its text:
        'html': '&nbsp;&nbsp;&nbsp;&nbsp;'
        // inserting the created <td> after every <td> element
        // that is a :last-child of its parent:
    }).insertAfter(lasttd);
	$( ".table" ).colResizable({ liveDrag : true });
});