import {hamburgerBtn, navMenu} from "./js/menu.js"
const d=document

d.addEventListener("DOMContentLoaded",e=>{
  navMenu(".hamburger",".menu",".menu a",".hamburger__top",".hamburger__center",".hamburger__bottom")
  hamburgerBtn(".hamburger",".hamburger__top",".hamburger__center",".hamburger__bottom")
})