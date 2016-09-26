mostrarProductos();

function mostrarProductos() {
    var url = "http://sheeploopswebservice.azurewebsites.net/api/producto";
    $.getJSON(url)
        .done(function (data) {
            console.log(data);
            /*$.each(data, function (key, item) {
                console.log(item.nombreproducto);
                $('#users').append(
				    '<li>' + item.nombre + ' ' + item.email + '</li>'
			    );
	        })
            */
	    console.log(data);
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