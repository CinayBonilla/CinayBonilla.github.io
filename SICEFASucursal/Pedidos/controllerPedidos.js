console.log("Hola desde js aaa");

let pedidos = [];
fetch("../Pedidos/dataPedidos.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsonDatos) {
            pedidos = jsonDatos;
            console.log(pedidos);
            cargarTabla();
        }
        );

export function agregarPedido() {
    let     sucursal,
            empleado,
            fecha,
            hora,
            productos,
            cantidadP,
            estatus;

    sucursal = document.getElementById("txtSucursal").value;
    empleado = document.getElementById("txtEmp").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    productos = document.getElementById("txtProducto").value;
    cantidadP = document.getElementById("txtCanP").value;
 
    
    let pedido = {};
    pedido.sucursal = sucursal;
    pedido.empleado = empleado;
    pedido.fecha = fecha;
    pedido.hora = hora;
    pedido.productos = productos;
    pedido.cantidadP = cantidadP;
    pedido.estatus="Pendiente";
    pedidos.push(pedido);
    limpiarCampos();
    cargarTabla(); 
    
     Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Pedido Registrado',
  showConfirmButton: false,
  timer: 1500
})
}

export function cargarTabla(){
    let cuerpo = "";
    pedidos.forEach(function (pedido){
        let registro = 
                '<tr onclick="moduloPedidos.selectPedido(' + pedidos.indexOf(pedido) +');">'+
                '<td>' + pedido.sucursal + '</td>' +
                '<td>' + pedido.empleado + '</td>' +
                '<td>' + pedido.fecha+ '</td>' +
                '<td>' + pedido.hora + '</td>' +
                '<td>' + pedido.productos + '</td>' +
                '<td>' + pedido.cantidadP + '</td>' +
                '<td>' + pedido.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblPedidos").innerHTML = cuerpo;
}

let indexPedidoSeleccionado;
export function selectPedido(index){
    document.getElementById("txtSucursal").value = pedidos[index].sucursal;
    document.getElementById("txtEmp").value = pedidos[index].empleado;
    document.getElementById("txtFecha").value = pedidos[index].fecha;
    document.getElementById("txtHora").value = pedidos[index].hora;
    document.getElementById("txtProducto").value = pedidos[index].productos;
    document.getElementById("txtCanP").value = pedidos[index].cantidadP;

    
    document.getElementById("btnActualizar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    indexPedidoSeleccionado = index;
}

export function limpiarCampos() {
    document.getElementById("txtSucursal").value = "";
    document.getElementById("txtEmp").value = "";
    document.getElementById("txtFecha").value ="" ;
    document.getElementById("txtHora").value = "";
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCanP").value = "";
    
    
    document.getElementById("txtSucursal").focus();
    document.getElementById("btnActualizar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexPedidoSeleccionado = 0; 
}

export function actualizarPedido() {
   let sucursal,
            empleado,
            fecha,
            hora,
            productos,
            cantidadP,
            estatus;
    sucursal = document.getElementById("txtSucursal").value;
    empleado = document.getElementById("txtEmp").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    productos = document.getElementById("txtProducto").value;
    cantidadP = document.getElementById("txtCanP").value; 
    
    let pedido = {};
    pedido.sucursal = sucursal;
    pedido.empleado = empleado;
    pedido.fecha = fecha;
    pedido.hora = hora;
    pedido.productos = productos;
    pedido.cantidadP = cantidadP;
    pedido.estatus = "Pendiente";
    pedidos[indexPedidoSeleccionado] = pedido;
    limpiarCampos();
    cargarTabla(); 
    
     Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Pedido Actualizado',
  showConfirmButton: false,
  timer: 1500
})
}

export function eliminarPedido(){
Swal.fire({
  title: '¿Estás seguro?',
  text: 'Esta acción no se puede deshacer.',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Sí, eliminar'
}).then((result) => {
  if (result.isConfirmed) {
    // Aquí puedes realizar la acción de eliminación o cualquier otra acción deseada.
    Swal.fire(
            'Eliminado', 
            'El elemento ha sido eliminado.', 
            'success')
    pedidos[indexPedidoSeleccionado].estatus = "Cancelado";
    limpiarCampos();
    cargarTabla(); 
     
  } 
})
     
    
} 

export function buscarPedido() {
    Swal.fire({
                    title: '¡Hola!',
                    text: 'Aqui esta lo que buscas',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
    console.log(pedidos);
    let filtro = document.getElementById("txtBuscarPedidos").value.toString().toLowerCase();
    let resultados = pedidos.filter(element => {
        console.log(element.sucursal.toString().toLowerCase())
        console.log(filtro)
        if (filtro == element.sucursal.toString().toLowerCase()) {
            console.log("si esta")
            return element.sucursal.toString().toLowerCase() == filtro

        }
    });
    let cuerpo = "";
    console.log(resultados);
    resultados.forEach(function (pedido) {
        console.log(pedido);
        let registro =
              '<tr onclick="moduloPedidos.selectPedido(' + pedidos.indexOf(pedido) +');">'+
                '<td>' + pedido.sucursal + '</td>' +
                '<td>' + pedido.empleado + '</td>' +
                '<td>' + pedido.fecha+ '</td>' +
                '<td>' + pedido.hora + '</td>' +
                '<td>' + pedido.productos + '</td>' +
                '<td>' + pedido.cantidadP + '</td>' +
                '<td>' + pedido.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblPedidos").innerHTML = cuerpo;
}
