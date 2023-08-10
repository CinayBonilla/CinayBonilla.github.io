let moduloSucursales;
alert("Hola desde Controller Main");

function cargarModuloSucursales(){
    fetch("GSucursales/sucursales.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorCentral").innerHTML = html;
                    import ("./GSucursales/controllerSucursales.js").then(
                            function(controller){
                                moduloSucursales = controller;
                            }
                            );
                }
            );
} 