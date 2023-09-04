
/* <article class="cart">
<img src="./assets/food_fair.jpg" alt="food_fair">
<h2 class="titulo-dc">Festival of the collectivities</h2>
<p>Enjoy your favorite dishes from different countries in a unique event for the whole family.</p>
<div class="pre-anc">
  <h2>Price 5</h2>
  <a href="./detail.html">Details</a>
</div>
</article> */
const contenedor = document.querySelector(".eventos")
const totalEventos = data.events.length


const crearCart = (id)=>{

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

const arrayCart = (cantidad)=>{
    let cartas = []
    for(let i = 0; i<cantidad; i++){
        cartas[i] = crearCart(i)
    }
    console.log(cartas)
    return cartas
}


const imprimirHtml = (vector)=>{
    contenedor.innerHTML = vector
}
imprimirHtml(arrayCart(totalEventos),contenedor)

