let moduloLoginSicefaCentral;

function cargarLoginSicefaCentral() {
    fetch("Modules/Login/loginSicefaCentral.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenedorLogin").innerHTML = html;
                import("../Login/controladorLogin.js").then(
                        function (controller) {
                            moduloLoginSicefaCentral = controller;
                        }
                );

            }

    );
}

let moduloLoginSicefaSucursal;

function cargarLoginSicefaSucursal() {
    fetch("Modules/Login/loginSicefaSucursal.html").then(
            function (response) {
                return response.text();
            }
    ).then(
            function (html) {
                document.getElementById("contenedorLogin").innerHTML = html;
                import("../Login/controladorLogin.js").then(
                        function (controller) {
                            moduloLoginSicefaSucursal = controller;
                        }
                );
            }
    );
}