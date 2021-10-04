$(document).ready(function () {  
    $.ajax({  
        type: "GET",  
        url: "https://localhost:44383/api/Noticia/ObtenerNoticia",  
        dataType: "json", 
        success: function (data) {  
              $.each(data, function(i,item){
                    var userData = 
                    "<H4>" + item.titulo + "</H4>" +
                    "<h5>" + item.descripcion + "</h5>" +
                    "<p>" + item.contenido + "</p>"						 
                   $("#NoticiasDiv>div>div").append(userData);
               }); 
        }, //End of AJAX Success function  
    });    
}); 
    
/*

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




