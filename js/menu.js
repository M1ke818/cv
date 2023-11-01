export function hamburgerBtn(contenedor,top,center,bottom){


  document.addEventListener("click",(e)=>{
    if(e.target.matches(contenedor)||e.target.matches(`${contenedor} *`)){
      document.querySelector(top).classList.toggle("top--isActive")
      document.querySelector(center).classList.toggle("center--isActive")
      document.querySelector(bottom).classList.toggle("bottom--isActive")
    }
  })

}


export function navMenu(contenedor,menu,elementos,top,center,bottom){
  document.addEventListener("click",e=>{
    if(e.target.matches(contenedor)||e.target.matches(`${contenedor} *`)){
      document.querySelector(menu).classList.toggle("menu-in")
    }
    if(e.target.matches(elementos)){
      document.querySelector(menu).classList.remove("menu-in")
      document.querySelector(top).classList.remove(`top--isActive`)
      document.querySelector(center).classList.remove(`center--isActive`)
      document.querySelector(bottom).classList.remove(`bottom--isActive`)
    }
  })
}