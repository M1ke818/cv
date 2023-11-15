import {hamburgerBtn, navMenu} from "./js/menu.js"
import {autodidacta} from "./js/autodidacta.js"
import responsiveMedia from "./js/responsiveMedia.js"
import cv from "./js/cv.js"
const d=document

d.addEventListener("DOMContentLoaded",e=>{
  hamburgerBtn(".hamburger",".hamburger__top",".hamburger__center",".hamburger__bottom")
  navMenu(".hamburger",".menu",".menu h2",".hamburger__top",".hamburger__center",".hamburger__bottom")
  autodidacta("autodidacta","Jan 02,2023 08:00:00","1 año")
  cv(".cv--icono","modal",".modal__cerrar")
  responsiveMedia("enlace--maps","(min-width:992px)",`<a href="https://maps.app.goo.gl/shu86FRoi29uSU5v9" target="_blank" rel="noopener" class="enlace--maps" style="color: inherit;"><i class="fa-solid fa-location-dot"></i></a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.084235833253!2d-99.12217952425056!3d19.495011381797767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f99719fcac0b%3A0x64301a93a0779440!2sIndios%20Verdes!5e0!3m2!1ses-419!2smx!4v1699739887779!5m2!1ses-419!2smx" style=" width:100%; border:0; aspect-ratio:16/9;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)

})