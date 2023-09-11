//capturar el objeto
let parametro = location.search

let params = new URLSearchParams(parametro)

let idEvento = params.get("parametro")

let evento = data.events.find(evento => evento._id  === idEvento)

console.log(evento)

//Dom 

 let contenedorMain = document.getElementById("contenedorDetalles")
    
    generarHtml(contenedorMain,evento)

    
 function generarHtml(contenedor,objeto){
    contenedor.innerHTML  +=`
        <img src="${objeto.image}" alt="${objeto.name}" class="col-6">
            
    <div class="info">
        <h2>${objeto.name}</h2>
        <p>date: ${objeto.date}</p>
        <p>description: ${objeto.description}</p>
        <p>category: ${objeto.category}</p>
        <p>place: ${objeto.place}</p>
        <p>capacity: ${objeto.capacity}</p>
        <p>assistance: ${objeto.assistance}</p>
        <p>price: ${objeto.price}</p>
    
    </div>`
 }

