$(document).ready(function() {
    $('#example').DataTable();
} );

//Query para modificar el numero de entradas
jQuery('#example').dataTable({            
    oLanguage: {sLengthMenu: "<select>"+
    "<option value='5'>5</option>"+
    "<option value='10'>10</option>"+
    "<option value='15'>15</option>"+
    "<option value='-1'>All</option>"+
    "</select>"},
    //Aquí se establece el numero de filas que va a tener por defecto
    "iDisplayLength": 5

});