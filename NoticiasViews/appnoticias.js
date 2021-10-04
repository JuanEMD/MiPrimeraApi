$(document).ready(function () {  
    
    ObtenerNoticias();

    function ObtenerNoticias(params) {
        $("#NoticiasDiv").empty();
    $.ajax({  
        type: "GET", 
        url: "https://localhost:44383/api/Noticia/ObtenerNoticia",  
        dataType: "json", 
        success: function (data) {  
              $.each(data, function(i,item){
                    var userData = 
            "<div class= 'card mb-3'>"+
                "<div class= 'card-body'>" +
                    "<H4>" + item.titulo + "</H4>" +
                    "<h5>" + item.descripcion + "</h5>" +
                    "<p>" + item.contenido + "</p>"	+
                    "<div>" +
                   "<a class = 'btn btn-primary m-1' id = 'EditButton'>Editar</a>" +
                   "<a class = 'btn btn-danger m-1' id = 'DeleteButton'>Eliminar</a>"+
                   "</div>" +
                "</div>"+
            "</div>"
                   $("#NoticiasDiv").append(userData);	
               }); 
        }, //End of AJAX Success function  
    });   
} 

    $('#SubmitButton').click(function(){

        var formData = {

                titulo: $('#titulo').val(),
                descripcion: $('#descripcion').val(),
                contenido: $('#contenido').val(),
                fecha: "2021-09-23T00:00:00",
                autorId: 1,
            };

        var JSONformData = JSON.stringify(formData);

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




