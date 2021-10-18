$(document).ready(function () {  
    
    
    ObtenerNoticias();


    function ObtenerNoticias() {

        
    $.ajax({  
        type: "GET", 
        url: "https://localhost:44383/api/Noticia/ObtenerNoticia",  
        dataType: "json", 
        success: function (data) {  
            
        $("#NoticiasDiv").empty();
        
              $.each(data, function(i,item){
                    let NoticiaData = 
            "<div class= 'Noticia-item card mb-3' item-id='"+ item.noticiaId +"'>"+
                "<div class= 'card-body'>" +
                    "<H4 id='Noticia-titulo'>" + item.titulo + "</H4>" +
                    "<h5 id='Noticia-descripcion'>" + item.descripcion + "</h5>" +
                    "<p id='Noticia-contenido'>" + item.contenido + "</p>"	+
                    "<div class = 'd-flex flex-row-reverse d-grid gap-2'>" +
                   "<button class='btn btn-primary' id='EditButton'>Editar</button>" +
                   "<button class='btn btn-danger' id='DeleteButton'>Eliminar</button>"+
                   "</div>" +
                "</div>"+
            "</div>"
                   $("#NoticiasDiv").append(NoticiaData);	
               }); 
            },
        });   
    } 



    $('#AgregarButton').click(function(){

        let formData = {
                titulo: $('#titulo').val(),
                descripcion: $('#descripcion').val(),
                contenido: $('#contenido').val(),
                fecha: $('#fecha').val(),
                autorId: 1,
            };

        let JSONformData = JSON.stringify(formData);
        console.log(JSONformData);

        $.ajax({
          type: 'POST',
          data: JSONformData,
            caches: false,
            processData: false,
            dataType: "json",
            contentType: "application/json",
            url: "https://localhost:44383/api/Noticia/AgregarNoticia",
            success: function (result) {
                console.log("Success");
                console.log(result);
                $('#titulo').val('');
                $('#descripcion').val('');
                $('#contenido').val('');
                $('#fecha').val('');

                ObtenerNoticias();
            },
            error: function (error) {
                console.log(error.statusText);
                console.log(formData);
            }
        });
    });


    $(document).on('click','#EditButton', function(){

        
        //////////////Fecha actual///////////////
        let d = new Date();
        let month = d.getMonth()+1;
        let day = d.getDate();
        
        let fechaActual = d.getFullYear() + '-' +
            (month<10 ? '0' : '') + month + '-' +
            (day<10 ? '0' : '') + day;
        ///////////////////////////////////////// 


        let itemSelected = {
            noticiaId: parseInt($(this).closest('.Noticia-item').attr("item-id")),
            titulo: $(this).parent().parent().children('#Noticia-titulo').text(),
            descripcion: $(this).parent().parent().children('#Noticia-descripcion').text(),
            contenido: $(this).parent().parent().children('#Noticia-contenido').text(),
            fecha: fechaActual,
            autorId: 1,
        }

        $('#ModalFormTitulo').val(itemSelected.titulo);
        $('#ModalFormDescripcion').val(itemSelected.descripcion);
        $('#ModalFormContenido').val(itemSelected.contenido);
        $('#ModalNoticia').modal('show');

        $(document).on('click','#ModalAddButton', function(){

            itemSelected.titulo = $('#ModalFormTitulo').val();
            itemSelected.descripcion = $('#ModalFormDescripcion').val();
            itemSelected.contenido = $('#ModalFormContenido').val();
            
        let JSONitemSelectedData = JSON.stringify(itemSelected);

        console.log(itemSelected);

        $.ajax({
            type: 'PUT',
            data: JSONitemSelectedData,
            contentType: "application/json",
              url: "https://localhost:44383/api/Noticia/EditarNoticia",
              success: function (result) {
                  console.log("Success");
                  console.log(result);
                  $('#ModalNoticia').modal('hide');

                  ObtenerNoticias();

              },
              error: function (error) {
                  console.log(error.statusText);
                  console.log(JSONitemSelectedData);
              }
          });
        });
    });



    $(document).on('click','#DeleteButton', function(){
    
        let itemid = $(this).closest('.Noticia-item').attr("item-id");
        console.log(itemid);

        let EliminarNoticiaUrl = "https://localhost:44383/api/Noticia/EliminarNoticia/"
        let deleteSelectedItemURL = EliminarNoticiaUrl + itemid;

        console.log(deleteSelectedItemURL);
        
        $.ajax({
            type: 'DELETE',
              url: deleteSelectedItemURL,
              success: function (result) {
                  console.log("Success");
                  console.log(result);

                  ObtenerNoticias();
              },
              error: function (error) {
                  console.log(error.statusText);
                  console.log(formData);
              }
          });

    });
}); 












/*


    // $('#SubmitButton').click(function(){
    //     console.log("btn");
    //     $.ajax({
    //         type: "POST",
    //         url: "https://localhost:44383/api/Noticia/AgregarNoticia",
    //         data: {
    //             titulo: $('#titulo').val(),
    //             descripcion: $('#descripcion').val(),
    //             contenido: $('#contenido').val(),
    //         },
    //         success: function(){
    //             console.log("success");
    //         },
    //         error: function(response){
    //             console.log(response);
    //             console.log("error");
    //         }
    //     });
    // })

    $('#SubmitButton').click(function(){
        var data = [];
        var titulo, descripcion, contenido, fecha, autorId;

        $('#FormNoticias').ready(function(index) {
            titulo = $('#titulo').val();
            descripcion = $('#descripcion').val();
            contenido = $('#contenido').val();
            fecha = "2021-09-23T00:00:00",
            autorId = 1;

            data.push({
                titulo,
                descripcion,
                contenido,
                fecha,
                autorId
            });
        });
        var dataJson = JSON.stringify(data);
        SubmitFormData(dataJson);
    });


"{titulo: '" + $('#titulo').val() + "', descripcion: '" + $('#descripcion').val() + "', contenido: '" + $('#contenido').val() + "', fecha: '" + Date().val(null) + "', autorId: '" + 1 + "'}"

//Jquery get//

    //jQuery.get( url [, data ] [, success ] [, dataType ] )

    $.get("https://localhost:44383/api/Noticia/ObtenerNoticia", function(data){

    $.each(data, function(i,item){
        var userData = 
        "<H4>" + item.titulo + "</H4>" +
        "<h5>" + item.descripcion + "</h5>" +
        "<p>" + item.contenido + "</p>"

        $("#NoticiasDiv>div>div").append(userData);
    });
    });
*/




