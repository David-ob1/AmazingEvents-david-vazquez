const contenedor = document.querySelector(".eventos")

const diaHoy = data.currentDate

 let listaIds = filtoPasado(data.events,diaHoy)
  let CartList =  arrayCart(listaIds)
  imprimirHtml(CartList)


function crearCart(id){
    return` <article class="cart">
    <img src="${data.events[id].image}" alt="${data.events[id].name}">
    <h2 class="titulo-dc">${data.events[id].name}</h2>
    <p>${data.events[id].description}</p>
    <div class="pre-anc">
      <h2>${data.events[id].price}</h2>
      <a href="./detail.html">Details</a>
    </div>
    </article>`
    }


    function filtoPasado(array,fecha){
        let arrayPasado = []

        for(let i= 0; i < array.length; i++ ){
            if(array[i].date >= fecha){
                arrayPasado.push(i)
            }

        }
        console.log(arrayPasado)
       
        return arrayPasado
    }


    function arrayCart(array){
        let cartas = []
    for(let i = 0; i<array.length; i++){
        cartas[i] = crearCart(array[i])
    }
    console.log(cartas)
    return cartas
        
    }
    
    
    function imprimirHtml(vector){
        contenedor.innerHTML = vector
    }

    