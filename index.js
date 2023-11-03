import {hamburgerBtn, navMenu} from "./js/menu.js"
import {autodidacta} from "./js/autodidacta.js"
const d=document

d.addEventListener("DOMContentLoaded",e=>{
  hamburgerBtn(".hamburger",".hamburger__top",".hamburger__center",".hamburger__bottom")
  navMenu(".hamburger",".menu",".menu h2",".hamburger__top",".hamburger__center",".hamburger__bottom")
  autodidacta("autodidacta","Jan 02,2023 08:00:00","1 año")
})