mostrarProductos();

function mostrarProductos() {
    var url = "api/producto";
    $.getJSON(url)
        .done(function (data) {            
            $.each(data, function (key, item) {
                if (item.activoproducto) {
                    $('#contenedorProducto').append(
                        '<div class="6u 12u(narrower)">' +
                        '<section class="box special">' +
                        '<span class="image featured"><img src="' + item.imagenproducto + '"/></span>' +
                        '<h3>' + item.nombreproducto + '</h3>' +
                        '<p>' + item.descripcionproducto + '</p>' +
                        '<ul class="actions">' +
                                '<li><a href="#" class="button alt">Precio: S/.' + item.precioproducto + '</a></li>' +
                                '<li><a href="#" class="button alt">Cantidad: ' + item.cantidadproducto + '</a></li>' +
                        '</ul>' +
                        '</section>'+
                        '</div>'
                    )
                };
	        })                
        })
        .fail(function (xhr, textStatus, err) {
            console.log("Oops...", "El servidor esta temporalmente inactivo!", xhr)
        });

    //$.ajax({
    //    url: 'http://sheeploopswebservice.azurewebsites.net/api/producto',
    //    type: 'GET',
    //    Cache: false,
    //    contentType: 'application/json;charset=utf-8',
    //    data:'',
    //    dataType: 'json',
    //    success: function (response) {
    //        console.log(response)
    //    }
    //}).fail(
    //function (xhr, textStatus, err) {
    //    console.log("Oops...", "El servidor esta temporalmente inactivo!", xhr);
    //}
    //);
}
function registrarUsuario() {
    var email = $('#email').val();
    var cliente = {
        emailcliente: email
    };
    var objetoJSON = JSON.stringify(cliente);
    $.ajax({
        url: 'api/cliente',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: objetoJSON,
        datatype: 'json',
        success: function () {
            swal("Registrado Correctamente");
            $('#email').val('');
        }
    }).fail(
        function (xhr,txt,err) {
            swal("No Registrado", "El usuario ya existe", "error");
        }
    );
}