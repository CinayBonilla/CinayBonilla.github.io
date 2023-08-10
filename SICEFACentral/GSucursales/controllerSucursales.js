console.log("Hola desde js aaa");

let sucursales = [];
fetch("GSucursales/dataSucursales.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsonDatos) {
            sucursales = jsonDatos;
            console.log(sucursales);
            cargarTabla();
        }
        );

export function agregarSucursal() {
    let nombreS,
         nombreT,
          domicilio,
          rfcT,
            colonia,
            ciudad,
            estado,
            cPostal,
            telefono,
            longitud,
            latitud,
            estatus;

    nombreS = document.getElementById("txtNombreS").value;
    nombreT = document.getElementById("txtNombreT").value;
    domicilio = document.getElementById("txtDom").value;
    rfcT = document.getElementById("txtRfcT").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    cPostal = document.getElementById("txtCP").value;
    telefono = document.getElementById("txtTel").value;
    longitud = document.getElementById("txtLongitud").value;
    latitud= document.getElementById("txtLatitud").value;
    
    let sucursal = {};
    sucursal.nombreS = nombreS;
    sucursal.nombreT = nombreT;
    sucursal.domicilio = domicilio;
    sucursal.rfcT = rfcT;
    sucursal.colonia = colonia ;
    sucursal.ciudad = ciudad;
    sucursal.estado = estado;
     sucursal.cPostal = cPostal;
    sucursal.telefono = telefono;
    sucursal.longitud = longitud;
    sucursal.latitud = latitud;
    sucursales.push(sucursal);
    limpiarCampos();
    cargarTabla(); 
    
  Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Sucursal Registrada',
  showConfirmButton: false,
  timer: 1500
})

}

export function cargarTabla(){
    let cuerpo = "";
    sucursales.forEach(function (sucursal){
        let registro = 
                '<tr onclick="moduloSucursales.selectSucursal(' + sucursales.indexOf(sucursal) +');">'+
                '<td>' + sucursal.nombreS + '</td>' +
                '<td>' + sucursal.nombreT + '</td>' +
                 '<td>' + sucursal.domicilio + '</td>' +
                '<td>' + sucursal.rfcT + '</td>' +
                '<td>' + sucursal.colonia + '</td>' +
                '<td>' + sucursal.ciudad + '</td>' +
                '<td>' + sucursal.estado + '</td>' +
                 '<td>' + sucursal.cPostal + '</td>' +
                '<td>' + sucursal.telefono + '</td>' +
                '<td>' + sucursal.longitud + '</td>' +
                '<td>' + sucursal.latitud + '</td>' +
                '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursal").innerHTML = cuerpo;
}

let indexSucursalSeleccionado;
export function selectSucursal(index){
    document.getElementById("txtNombreS").value = sucursales[index].nombreS;
    document.getElementById("txtNombreT").value = sucursales[index].nombreT;
    document.getElementById("txtDom").value = sucursales[index].domicilio;
    document.getElementById("txtRfcT").value = sucursales[index].rfcT;
    document.getElementById("txtColonia").value = sucursales[index].colonia;
    document.getElementById("txtCiudad").value = sucursales[index].ciudad;
    document.getElementById("txtEstado").value = sucursales[index].estado;
    document.getElementById("txtCP").value = sucursales[index].cPostal;
    document.getElementById("txtTel").value = sucursales[index].telefono;
    document.getElementById("txtLongitud").value = sucursales[index].longitud;
    document.getElementById("txtLatitud").value = sucursales[index].latitud;
    
    document.getElementById("btnActualizar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    indexSucursalSeleccionado = index;
}

export function limpiarCampos() {
    document.getElementById("txtNombreS").value = "";
    document.getElementById("txtNombreT").value = "";
    document.getElementById("txtDom").value = "";
    document.getElementById("txtRfcT").value ="" ;
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
      document.getElementById("txtCP").value = "";
    document.getElementById("txtTel").value = "";
    document.getElementById("txtLongitud").value = "";
    document.getElementById("txtLatitud").value = "";
    
    document.getElementById("txtNombreS").focus();
    document.getElementById("btnActualizar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexSucursalSeleccionado = 0; 
}

export function actualizarSucursal() {
    let nombreS,
         nombreT,
         domicilio,
          rfcT,
            colonia,
            ciudad,
            estado,
            cPostal,
            telefono,
            longitud,
            latitud,
            estatus;

    nombreS = document.getElementById("txtNombreS").value;
    nombreT = document.getElementById("txtNombreT").value;
    domicilio = document.getElementById("txtDom").value;
    rfcT = document.getElementById("txtRfcT").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value; 
    cPostal = document.getElementById("txtCP").value;
    telefono = document.getElementById("txtTel").value;
    longitud = document.getElementById("txtLongitud").value;
    latitud= document.getElementById("txtLatitud").value;
    
    
    let sucursal = {};
    sucursal.nombreS = nombreS;
    sucursal.nombreT = nombreT;
     sucursal.domicilio = domicilio;
    sucursal.rfcT = rfcT;
    sucursal.colonia = colonia ;
    sucursal.ciudad = ciudad;
    sucursal.estado = estado;
    sucursal.cPostal = cPostal;
    sucursal.telefono = telefono;
    sucursal.longitud = longitud;
    sucursal.latitud = latitud;
    sucursal.estatus = "Activo";
    sucursales[indexSucursalSeleccionado] = sucursal;
    limpiarCampos();
    cargarTabla(); 
    
    Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Sucursal Modificada',
  showConfirmButton: false,
  timer: 1500
})
}
 
export function eliminarSucursal(){ 
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
    sucursales[indexSucursalSeleccionado].estatus = "Inactivo";
    limpiarCampos();
    cargarTabla(); 
     
  } 
})
     
    
} 

export function buscarSucursal() {
    Swal.fire({
                    title: '¡Hola!',
                    text: 'Aqui esta lo que buscas',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
    console.log(sucursales);
    let filtro = document.getElementById("txtBuscarSucursal").value.toString().toLowerCase();
    let resultados = sucursales.filter(element => {
        console.log(element.nombreS.toString().toLowerCase())
        console.log(filtro)
        if (filtro == element.nombreS.toString().toLowerCase()) {
            console.log("si esta")
            return element.nombreS.toString().toLowerCase() == filtro

        }
    });
    let cuerpo = "";
    console.log(resultados);
    resultados.forEach(function (sucursal) {
        console.log(sucursal);
        let registro =
              '<tr onclick="moduloSucursales.selectSucursal(' + sucursales.indexOf(sucursal) +');">'+
                '<td>' + sucursal.nombreS + '</td>' +
                '<td>' + sucursal.nombreT + '</td>' +
                 '<td>' + sucursal.domicilio + '</td>' +
                '<td>' + sucursal.rfcT + '</td>' +
                '<td>' + sucursal.colonia + '</td>' +
                '<td>' + sucursal.ciudad + '</td>' +
                '<td>' + sucursal.estado + '</td>' +
                 '<td>' + sucursal.cPostal + '</td>' +
                '<td>' + sucursal.telefono + '</td>' +
                '<td>' + sucursal.longitud + '</td>' +
                '<td>' + sucursal.latitud + '</td>' +
                '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursal").innerHTML = cuerpo;
}
