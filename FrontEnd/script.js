///////////////////////////////////////////////
function verificar(){
    var verificar_poblacion = document.getElementById("poblacion").value
    var enviar = document.getElementById("enviar")
    
    if (verificar_poblacion < 0 || verificar_poblacion > 2500000000) {
        alert('La poblacion debe ser mayor que 0 pero menor que 2500 millones')
        enviar.style.visibility = "hidden";
    }else{
        enviar.style.visibility = "visible";
    }
}    

///////////////////////////////////////////
var url = "http://127.0.0.1:8000/api/paises"
paises = []
poblacion = []
paises_todos = []

fetch(url)
.then(datos => datos.json())
.then(procesar => {

    procesar.forEach(pais => {
        paises_todos.push(pais)
        paises.push(pais['nombre'])
        poblacion.push(pais['poblacion'])
    });

    var datos = [{

        x: poblacion,
        y: paises,
        marker: {
            color: "orange"
        },
        type: 'bar'

    }];

    var layout = {
        title: 'Población por Pais',
        height: 400,
        width: 1000, 
        xaxis: {
            title: "Población",
        },

        yaxis: {
            title: "Pais"
        }
    };

    Plotly.newPlot("paises", datos, layout);

});

console.log(paises_todos)

// document.getElementById("nombre_pais").innerText = paises[0]
// document.getElementById("capital_pais").innerText = ""
// document.getElementById("idioma_pais").innerText = ""
// document.getElementById("poblacion_pais").innerText = ""

tabla = document.getElementById("tabla")
tabla.innerHTML = `
    <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Idioma Oficial</th>
                        <th scope="col">Población</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td id="nombre_pais">dasda</td>
                        <td id="capital_pais"></td>
                        <td id="idioma_pais"></td>
                        <td id="poblacion_pais"></td>
                    </tr>
                </tbody>
            </table>`