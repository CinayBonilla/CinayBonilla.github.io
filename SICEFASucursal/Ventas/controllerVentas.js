console.log("Hola desde js aaa");

let ventas = [];
fetch("../Ventas/dataVentas.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsonDatos) {
            ventas = jsonDatos;
            console.log(ventas);
            cargarTabla();
        }
        );

export function agregarVenta() {
    let     nombre,
            empleado,
            fecha,
            hora,
            productos,
            cantidadP,
            precio,
            estatus;

    nombre = document.getElementById("txtNombre").value;
    empleado = document.getElementById("txtEmp").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    productos = document.getElementById("txtProducto").value;
    cantidadP = document.getElementById("txtCanP").value; 
    precio = document.getElementById("txtPrecio").value;
 
    
    let venta = {};
    venta.nombre = nombre;
    venta.empleado = empleado;
    venta.fecha = fecha;
    venta.hora = hora;
    venta.productos = productos;
    venta.cantidadP = cantidadP;
    venta.precio=precio;
    venta.estatus="Activa";
    ventas.push(venta);
    limpiarCampos();
    cargarTabla(); 
    
     Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Venta Registrada',
  showConfirmButton: false,
  timer: 1500
})
}

export function cargarTabla(){
    let cuerpo = "";
    ventas.forEach(function (venta){
        let registro = 
                '<tr onclick="moduloVentas.selectVenta(' + ventas.indexOf(venta) +');">'+
                '<td>' + venta.nombre + '</td>' +
                '<td>' + venta.empleado + '</td>' +
                '<td>' + venta.fecha+ '</td>' +
                '<td>' + venta.hora + '</td>' +
                '<td>' + venta.productos + '</td>' +
                '<td>' + venta.cantidadP + '</td>' + 
                '<td>' + venta.precio + '</td>' + 
                '<td>' + venta.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
}

let indexVentaSeleccionado;
export function selectVenta(index){
    document.getElementById("txtNombre").value = ventas[index].nombre;
    document.getElementById("txtEmp").value = ventas[index].empleado;
    document.getElementById("txtFecha").value = ventas[index].fecha;
    document.getElementById("txtHora").value = ventas[index].hora;
    document.getElementById("txtProducto").value = ventas[index].productos;
    document.getElementById("txtCanP").value = ventas[index].cantidadP;
    document.getElementById("txtPrecio").value = ventas[index].precio;
    
    document.getElementById("btnActualizar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    indexVentaSeleccionado = index;
}

export function limpiarCampos() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtEmp").value = "";
    document.getElementById("txtFecha").value ="" ;
    document.getElementById("txtHora").value = "";
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCanP").value = "";
    document.getElementById("txtPrecio").value = "";
    
    
    document.getElementById("txtNombre").focus();
    document.getElementById("btnActualizar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexVentaSeleccionado = 0; 
}

export function actualizarVenta() {
 let     nombre,
            empleado,
            fecha,
            hora,
            productos,
            cantidadP,
            precio,
            estatus;

    nombre = document.getElementById("txtNombre").value;
    empleado = document.getElementById("txtEmp").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    productos = document.getElementById("txtProducto").value;
    cantidadP = document.getElementById("txtCanP").value; 
    precio = document.getElementById("txtPrecio").value;
    
    let venta = {};
    venta.nombre = nombre;
    venta.empleado = empleado;
    venta.fecha = fecha;
    venta.hora = hora;
    venta.productos = productos;
    venta.cantidadP = cantidadP; 
    venta.precio = precio;
    venta.estatus = "Activa";
    ventas[indexVentaSeleccionado] = venta;
    limpiarCampos();
    cargarTabla(); 
    
   Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Venta Actualizada',
  showConfirmButton: false,
  timer: 1500
})
}

export function eliminarVenta()
{
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
    ventas[indexVentaSeleccionado].estatus = "Cancelada";
    limpiarCampos();
    cargarTabla(); 
     
  } 
})
     
    
} 

export function buscarVenta() {
    Swal.fire({
                    title: '¡Hola!',
                    text: 'Aqui esta lo que buscas',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
    console.log(ventas);
    let filtro = document.getElementById("txtBuscarVentas").value.toString().toLowerCase();
    let resultados = ventas.filter(element => {
        console.log(element.fecha.toString().toLowerCase())
        console.log(filtro)
        if (filtro == element.fecha.toString().toLowerCase()) {
            console.log("si esta")
            return element.fecha.toString().toLowerCase() == filtro

        }
    });
    let cuerpo = "";
    console.log(resultados);
    resultados.forEach(function (venta) {
        console.log(venta);
        let registro =
               '<tr onclick="moduloVentas.selectVenta(' + ventas.indexOf(venta) +');">'+
                '<td>' + venta.nombre + '</td>' +
                '<td>' + venta.empleado + '</td>' +
                '<td>' + venta.fecha+ '</td>' +
                '<td>' + venta.hora + '</td>' +
                '<td>' + venta.productos + '</td>' +
                '<td>' + venta.cantidadP + '</td>' + 
                '<td>' + venta.precio + '</td>' + 
                '<td>' + venta.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
}