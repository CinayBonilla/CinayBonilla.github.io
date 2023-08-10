console.log("Hola desde js aaa");

let clientes = [];
fetch("../Clientes/dataClientes.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsonDatos) {
            clientes = jsonDatos;
            console.log(clientes);
            cargarTabla();
        }
        );

export function agregarCliente() {
    let nombre,
            apePa,
            apeMa,
            genero,
            fNacimiento,
            rfc,
            curp,
            ciudad,
            estado,
            telefono,
            domicilio,
            cPostal,
            fRegistro,
            email,
            estatus;

    nombre = document.getElementById("txtNombreCli").value;
    apePa = document.getElementById("txtApePCli").value;
    apeMa = document.getElementById("txtApeMCli").value;
    genero = document.getElementById("txtGenero").value;
    fNacimiento = document.getElementById("txtFechaNacCli").value;
    rfc = document.getElementById("txtRFCCli").value;
    curp = document.getElementById("txtCURPCli").value;
    ciudad = document.getElementById("txtCiudadCli").value;
    estado = document.getElementById("txtEstadoCli").value;
    telefono = document.getElementById("txtTelCli").value;
    domicilio = document.getElementById("txtDomCli").value;
    cPostal = document.getElementById("txtCPCli").value;
    fRegistro = document.getElementById("txtFechaReg").value;
    email = document.getElementById("txtEmailCli").value;
    
    let cliente = {};
    cliente.nombre = nombre;
    cliente.apePa = apePa;
    cliente.apeMa = apeMa;
    cliente.genero = genero;
    cliente.fNacimiento = fNacimiento;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.ciudad = ciudad;
    cliente.estado = estado;
    cliente.telefono = telefono;
    cliente.domicilio = domicilio;
    cliente.cPostal = cPostal;
    cliente.fRegistro = fRegistro;
    cliente.email = email;
    clientes.push(cliente);
    limpiarCampos();
    cargarTabla();
    
    Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Cliente Registrado',
  showConfirmButton: false,
  timer: 1500
})
}

export function cargarTabla(){
    let cuerpo = "";
    clientes.forEach(function (cliente){
        let registro = 
                '<tr onclick="moduloClientes.selectCliente(' + clientes.indexOf(cliente) +');">'+
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apePa + '</td>' +
                '<td>' + cliente.apeMa + '</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.fNacimiento + '</td>' +
                '<td>' + cliente.rfc + '</td>' +
                '<td>' + cliente.curp + '</td>' +
                '<td>' + cliente.ciudad + '</td>' +
                '<td>' + cliente.estado + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.domicilio + '</td>' +
                '<td>' + cliente.cPostal + '</td>' +
                '<td>' + cliente.fRegistro + '</td>' +
                '<td>' + cliente.email + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
}

let indexClienteSeleccionado;
export function selectCliente(index){
    document.getElementById("txtNombreCli").value = clientes[index].nombre;
    document.getElementById("txtApePCli").value = clientes[index].apePa;
    document.getElementById("txtApeMCli").value = clientes[index].apeMa;
    document.getElementById("txtGenero").value = clientes[index].genero;
    document.getElementById("txtFechaNacCli").value = clientes[index].fNacimiento;
    document.getElementById("txtRFCCli").value = clientes[index].rfc;
    document.getElementById("txtCURPCli").value = clientes[index].curp;
    document.getElementById("txtCiudadCli").value = clientes[index].ciudad;
    document.getElementById("txtEstadoCli").value = clientes[index].estado;
    document.getElementById("txtTelCli").value = clientes[index].telefono;
    document.getElementById("txtDomCli").value = clientes[index].domicilio;
    document.getElementById("txtCPCli").value = clientes[index].cPostal;
    document.getElementById("txtFechaReg").value = clientes[index].fRegistro;
    document.getElementById("txtEmailCli").value = clientes[index].email;
    
    document.getElementById("btnActualizar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    indexClienteSeleccionado = index;
}

export function limpiarCampos() {
    document.getElementById("txtNombreCli").value = "";
    document.getElementById("txtApePCli").value = "";
    document.getElementById("txtApeMCli").value ="" ;
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtFechaNacCli").value = "";
    document.getElementById("txtRFCCli").value = "";
    document.getElementById("txtCURPCli").value ="" ;
    document.getElementById("txtCiudadCli").value = "";
    document.getElementById("txtEstadoCli").value = "";
    document.getElementById("txtTelCli").value = "";
    document.getElementById("txtDomCli").value = "";
    document.getElementById("txtCPCli").value = "";
    document.getElementById("txtFechaReg").value = "";
    document.getElementById("txtEmailCli").value = "";
    
    document.getElementById("txtNombreCli").focus();
    document.getElementById("btnActualizar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexClienteSeleccionado = 0; 
}

export function actualizarCliente() {
    let nombre,
            apePa,
            apeMa,
            genero,
            fNacimiento,
            rfc,
            curp,
            ciudad,
            estado,
            telefono,
            domicilio,
            cPostal,
            fRegistro,
            email,
            estatus;
    
    nombre = document.getElementById("txtNombreCli").value;
    apePa = document.getElementById("txtApePCli").value;
    apeMa = document.getElementById("txtApeMCli").value;
    genero = document.getElementById("txtGenero").value;
    fNacimiento = document.getElementById("txtFechaNacCli").value;
    rfc = document.getElementById("txtRFCCli").value;
    curp = document.getElementById("txtCURPCli").value;
    ciudad = document.getElementById("txtCiudadCli").value;
    estado = document.getElementById("txtEstadoCli").value;
    telefono = document.getElementById("txtTelCli").value;
    domicilio = document.getElementById("txtDomCli").value;
    cPostal = document.getElementById("txtCPCli").value;
    fRegistro = document.getElementById("txtFechaReg").value;
    email = document.getElementById("txtEmailCli").value;
    
    let cliente = {};
    cliente.nombre = nombre;
    cliente.apePa = apePa;
    cliente.apeMa = apeMa;
    cliente.genero = genero;
    cliente.fNacimiento = fNacimiento;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.ciudad = ciudad;
    cliente.estado = estado;
    cliente.telefono = telefono;
    cliente.domicilio = domicilio;
    cliente.cPostal = cPostal;
    cliente.fRegistro = fRegistro;
    cliente.email = email;
    cliente.estatus = "Activo";
    clientes[indexClienteSeleccionado] = cliente;
    limpiarCampos();
    cargarTabla(); 
    
   Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Cliente modificado',
  showConfirmButton: false,
  timer: 1500
})
}

 
export function eliminarCliente(){ 
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
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    limpiarCampos();
    cargarTabla(); 
     
  } 
})
     
    
}