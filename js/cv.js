export default function cv(iconos,modal,btncerrar){
  const $modal=document.getElementById(modal)
  
  document.addEventListener("click",e=>{
    if(e.target.matches(iconos)){
      let $seccion=document.createElement("section")
      $seccion.classList.add("modal__seccion")
      $modal.showModal()
      $modal.insertAdjacentElement("beforeend",$seccion)
      let texto,
      contenedorImg,
      contenedorPorcentaje
      

      const agregarImagenes=(app)=>{
        app.forEach(el=>{
         texto=`<img src="${el.imagen.toString()}">`
         let $codigoSalida=document.getElementsByName("codigo-salida")[0]
         $codigoSalida.insertAdjacentHTML("beforeend",texto)
        })    
      }

      const agregarPorcentajes=(apps)=>{
        let app=Object.values(apps)
        let app2=Object.keys(apps)[0]
        let $codigoSalida=document.getElementsByName("codigo-salida")[0]
        app.forEach(ele=>{
          contenedorImg=document.createElement("figure")
          $codigoSalida.insertAdjacentElement("beforeend",contenedorImg)
          texto=`<img src="${ele.imagen.toString()}">`
          contenedorImg.insertAdjacentHTML("beforeend",texto)
          contenedorPorcentaje=document.createElement("div")
          $codigoSalida.insertAdjacentElement("beforeend",contenedorPorcentaje)
          if(ele.hasOwnProperty("lugar")){
            contenedorPorcentaje.classList.add("modal--cursos")
            contenedorPorcentaje.insertAdjacentHTML("beforeend",`
            <h4>${ele.nombre}</h4>
            <p>${ele.lugar}</p>
            `)
            contenedorPorcentaje.style.color="#275950"
          }else{
            contenedorPorcentaje.classList.add("modal__contenedor-porcentaje")
          let llenadoPorcentaje=document.createElement("div")
          contenedorPorcentaje.insertAdjacentElement("beforeend",llenadoPorcentaje)
          llenadoPorcentaje.classList.add("modal__barra-porcentaje")
          llenadoPorcentaje.animate([
            {transform:`scaleX(0)`},
            {transform:`scaleX(0.${ele.porcentaje})`}           
          ],{
            duration: 2000,
            iterations: 1,
            easing:'linear',
            fill:`both`
          }) 
          contenedorPorcentaje.insertAdjacentHTML("beforeend",`<p style="position:relative; top:-20px; left:5px;"><b>${ele.porcentaje}%</b></p>`)
        
          }
        })
      }



      const agregar=(etiqueta="",nombreClase="",contenido="",data="")=>{
        let $etiqueta=document.createElement(`${etiqueta}`)
            $etiqueta.classList.add(`${nombreClase}`)
            $etiqueta.innerHTML=`${contenido}`
            $etiqueta.setAttribute("name",`${data}`)
            $seccion.insertAdjacentElement("beforeend",$etiqueta)
      }



      fetch("./baseDatos.json")
      .then(res=>res.ok?res.json():Promise.reject(res))
      .then(json=>{
        json.forEach(el=>{
          if(e.target.dataset.description===el.nombre&&el.codigo!==null){
            agregar("h2","modal__titulo",el.nombre)
            agregar("h4","modal__nivel",el.nivel)
            agregar("pre","modal__codigo-entrada",el.codigo)
            agregar("article","modal__codigo-salida","","codigo-salida")
            agregarImagenes(Object.values(el.apps))
            
          }else if(e.target.dataset.description===el.nombre&&el.codigo===null){
            $seccion.style.setProperty("background-color","#F0FFFF")
            agregar("h2","modal__titulo",el.nombre)
            agregar("article","modal--porcentajes","","codigo-salida")
            agregarPorcentajes(el.apps)

          
          }
        })
      })
    }

    if(e.target.matches(btncerrar)){

      let borrar=$modal.getElementsByTagName("section")[0]
      borrar.parentNode.removeChild(borrar)
      $modal.close()
    }
  })
} 
