export function validarLoginSucursalCentro(){
    let user = document.getElementById("txtUsuarioCentro").value;
    let password = document.getElementById("txtContrasenaCentro").value;
    
    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUsuarioCentro').required="required";
    }else if (password !== "1234"){
        alert("Contraseña Incorrecta");
        document.getElementById('txtContrasenaCentro').required="required";
    }else{
        window.location.href = 'Modules/SICEFASucursal/SucursalCentro/indexSucursalCentro.html';
    }
    
}

export function validarLoginSucursalCentroMax(){
    let user = document.getElementById("txtUsuarioCentroMax").value;
    let password = document.getElementById("txtContrasenaCentroMax").value;
    
    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUsuarioCentroMax').required="required";
    }else if (password !== "1234"){
        alert("Contraseña Incorrecta");
        document.getElementById('txtContrasenaCentroMax').required="required";
    }else{
        window.location.href = 'Modules/SICEFASucursal/SucursalCentroMax/indexSucursalCentroMax.html';
    }
    
}

export function validarLoginSucursalPlazaMayor(){
    let user = document.getElementById("txtUsuarioPlazaMayor").value;
    let password = document.getElementById("txtContrasenaPlazaMayor").value;
    
    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUsuarioPlazaMayor').required="required";
    }else if (password !== "1234"){
        alert("Contraseña Incorrecta");
        document.getElementById('txtContrasenaPlazaMayor').required="required";
    }else{
        window.location.href = 'Modules/SICEFASucursal/SucursalPlazaMayor/indexSucursalPlazaMayor.html';
    }
    
}
export function validarLoginCentral(){
    let user = document.getElementById("txtUsuario").value;
    let password = document.getElementById("txtContrasena").value; 
    
    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUsuario').required="required";
    }else if (password !== "1234"){
        alert("Contraseña Incorrecta");
        document.getElementById('txtContrasena').required="required";
    }else{
        window.location.href = 'Modules/SICEFACentral/indexSucursalCentral.html';
    }
   
}


