export function autodidacta(contenedor,fechaInicio,mensaje){
  const $contenedorTiempo=document.getElementById(contenedor),
  contador=new Date(fechaInicio).getTime()

  let contadorTimeOut=setTimeout(()=>{
    let hoy=new Date().getTime(),
    tiempoHaPasado=hoy-contador,
    meses=Math.floor(tiempoHaPasado/(1000*60*60*24*30.416666666666668)),
    dias=Math.floor(tiempoHaPasado%(1000*60*60*24*30.416666666666668)/(1000*60*60*24))
    $contenedorTiempo.innerHTML=`<b>⌨️</b><br> ${meses} mese(s) y ${dias} día(s) aprendiendo sobre FRONT-END`
    
    if(meses>11){
      clearTimeout(contadorTimeOut)
      $contenedorTiempo.innerHTML=`<b>⌨️</b> más de <b>${mensaje}</b><br> aprendiendo sobre FRONT-END</h3>`
    }
  },0)
  
}