let moduloClientes;
alert("Hola");

function cargarModuloClientes(){
    fetch("../Clientes/clientesSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Clientes/controllerClientes.js").then(
                            function(controller){
                                moduloClientes = controller;
                            }
                            );
                }
            );
}
let moduloPedidos;


function cargarModuloPedidos(){
    fetch("../Pedidos/pedidosSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Pedidos/controllerPedidos.js").then(
                            function(controller){
                                moduloPedidos = controller;
                            }
                            );
                }
            );
} 
let moduloVentas;


function cargarModuloVentas(){
    fetch("../Ventas/ventasSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Ventas/controllerVentas.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}