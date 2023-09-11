const contenedor = document.querySelector(".eventos")
const contenedorCheck = document.querySelector(".checked")
const diaHoy = data.currentDate
const listaEventos = data.events
const lupita = document.getElementById("lupa")
const buscar = document.getElementById("busqueda")


  let listaIds = filtroPasado(listaEventos,diaHoy)
  let CartList =  arrayCart(listaIds)
  imprimirHtml(CartList,contenedor)

    function crearCart(id){
        return` <article class="cart">
        <img src="${data.events[id.image}" alt="${data.events[id].name}">
        <h2 class="titulo-dc">${data.events[id].name}</h2>
        <p>${data.events[id].description}</p>
        <div class="pre-anc">
          <h2>${data.events[id].price}</h2>
          <a href="./detail.html?parametro=${data.events[id]._id}">Details</a>
        </div>
        </article>`
    }
    
    const crearCheckbox = (nombre,indice) =>{
        return`<label><input type="checkbox" value="${nombre}" id="${indice}">${nombre}</label>`
        }

    function filtroPasado(array,fecha){
        let arrayPasado = []
        for(let i = 0; i < array.length; i++ ){
            if(array[i].date >= fecha){
                arrayPasado.push(i)
            }
        }
      //  console.log(arrayPasado)
        return arrayPasado
    }

    function arrayCart(array){
        let cartas = []
        for(let i = 0; i<array.length; i++){
            cartas[i] = crearCart(array[i])
        }

    //console.log(cartas)
    return cartas
    }

    function imprimirHtml(vector,elemento){
        elemento.innerHTML = vector.join("")
        if(vector.length == 0){
            elementoHtml.innerHTML = `<h2 class="no-resul"> No se encontro ningun resultado</h2>`
          }
    }

        //poner checkbox

    //2
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

     imprimirHtml(PrepararCheck(data.events),contenedorCheck)

    //1
    function PrepararCheck(lista){
        let cadaCat = Array.from(lista)
        let categorias = sinRepetidos(cadaCat,"category")
          listaToCode(categorias)
    
          return categorias
      }

      //3
      function listaToCode(array){
        for(let i = 0; i< array.length; i++){
             array[i] = crearCheckbox(array[i], i)
     
        }
     
       }


        contenedorCheck.addEventListener("change",()=>{
        let checked = document.querySelectorAll("input[type=checkbox]:checked")
        const checkedValues = Array.from(checked).map( checkbox => checkbox.value)
        //console.log(checkedValues)
  
        let catUsuario = filtrarXCat(listaEventos,checkedValues)
         //   console.table(catUsuario)

         let buscarEvento = buscar.value
         let encontrado = filtrarXnombre(catUsuario,buscarEvento) 
         let newListaIds = filtrarXfecha(encontrado,diaHoy)
        let prueba = crearCart(newListaIds)
        objetoToHtml(home(newListaIds),contenedorEv)
            console.log(prueba)

        
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





// filtrado 1
    function filtrarXCat(eventos,catSeleccionadas){
        if(catSeleccionadas.length == 0){
          return eventos
        }
        let filtrado = eventos.filter((evento) =>  catSeleccionadas.includes(evento["category"]))
        
      //  console.table(filtrado)
        return filtrado
      }
    
      //filtrado 2
      function filtrarXnombre (eventos,valorUsuario){
        //console.table(valorUsuario)
        let valorUsuarioM = valorUsuario.toLowerCase()
    
          if(valorUsuarioM.length == 0){
            return eventos
          }
    
        let filtrado = eventos.filter((evento) => evento["name"].toLowerCase().includes(valorUsuarioM))
        return filtrado
      }

      //filtrado x fecha
      function filtrarXfecha(array,fecha){
        let arrayPasado = array.filter(evento => evento.date >= fecha)
       // console.log(arrayPasado)
        return arrayPasado
    }


 