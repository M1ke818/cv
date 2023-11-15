export default function responsiveMedia(id,query,celular,escritorio){
  let breakpoint=window.matchMedia(query)

  const responsable=(e)=>{
    if(e.matches){
      document.getElementById(id).innerHTML=escritorio
    }else{
      document.getElementById(id).innerHTML=celular
    }
  }


  breakpoint.addEventListener("change",responsable)
  responsable(breakpoint)
}