
/* <input type="checkbox" id="cat-1"><label for="">Category</label> */
const contenedorEv = document.querySelector(".eventos")
const contenedorCheck = document.querySelector(".checked")
const totalEventos = data.events
const lupita = document.getElementById("lupa")
const buscar = document.getElementById("busqueda")


const crearCart = (event)=>{

    return` <article class="cart">
    <img src="${event.image}" alt="${event.name}">
    <h2 class="titulo-dc">${event.name}</h2>
    <p>${event.description}</p>
    <div class="pre-anc">
      <h2>${event.price}</h2>
      <a href="./detail.html?parametro=${event._id}">Details</a>
    </div>
    </article>`
}

const crearCheckbox = (nombre,indice) =>{
return`<label><input type="checkbox" value="${nombre}" id="${indice}">${nombre}</label>`
}

  const arrayCart = (listaEventos)=>{
    let cartas = []
    for(let i = 0; i<listaEventos.length; i++){
        cartas[i] = crearCart(listaEventos[i])
    }

    return cartas
}


  const imprimirHtml = (vector,elementoHtml)=>{
 
    elementoHtml.innerHTML = vector.join("")
    if(vector.length ==0){
      elementoHtml.innerHTML = `<h2 class="no-resul"> No se encontro ningun resultado</h2>`

    }
    
}

  imprimirHtml(arrayCart(totalEventos),contenedorEv)

  const sinRepetidos = (array,metodo) => {
    let arrayFinal = []

    for (let item of array){
      if (!arrayFinal.includes(item[metodo])){
          arrayFinal.push(item[metodo])
         // console.log(arrayFinal)
      }
    }

    return arrayFinal
 }


  function PrepararCheck(lista){
    let cadaCat = Array.from(lista)
    let categorias = sinRepetidos(cadaCat,"category")
   // console.table(categorias)
      listaToCode(categorias)

      return categorias
  }

  function listaToCode(array){
   for(let i = 0; i< array.length; i++){
        array[i] = crearCheckbox(array[i], i)

   }

  }
  imprimirHtml(PrepararCheck(data.events), contenedorCheck)

  contenedorCheck.addEventListener("change",()=>{
      let checked = document.querySelectorAll("input[type=checkbox]:checked")
      const checkedValues = Array.from(checked).map( checkbox => checkbox.value)
      console.log(checkedValues)

      let catUsuario = filtrarXCat(data.events,checkedValues)
      let buscarEvento = buscar.value
      let encontrado = filtrarXnombre(catUsuario,buscarEvento)
      console.table(encontrado)
      imprimirHtml(arrayCart(encontrado),contenedorEv)
      
  })
  
  lupita.addEventListener("click",()=>{
    let checked = document.querySelectorAll("input[type=checkbox]:checked")
    const checkedValues = Array.from(checked).map( checkbox => checkbox.value)
    console.log(checkedValues)

    let catUsuario = filtrarXCat(data.events,checkedValues)
    let buscarEvento = buscar.value
    let encontrado = filtrarXnombre(catUsuario,buscarEvento)
    console.log(encontrado)
    imprimirHtml(arrayCart(encontrado),contenedorEv)
  })
  



  function filtrarXnombre (eventos,valorUsuario){
    console.table(valorUsuario)
    let valorUsuarioM = valorUsuario.toLowerCase()

      if(valorUsuarioM.length == 0){
        return eventos
      }

    let filtrado = eventos.filter((evento) => evento["name"].toLowerCase().includes(valorUsuarioM))
    return filtrado
  }


  function filtrarXCat(eventos,catSeleccionadas){
    if(catSeleccionadas.length == 0){
      return eventos
    }
    let filtrado = eventos.filter((evento) =>  catSeleccionadas.includes(evento["category"]))
    return filtrado
  }
