bolaBase = document.querySelector('.ball-js').style;
let tiempo = 0;
let fotogramas = 60;
let variacion = 0;
let opacidad = 0;
let sombraBlur = 3;
let sombraExtension = 0.3;
let initialWidth = 400;

function animation (variacion, opacidad, blur, extension) {
  bolaBase.width = (initialWidth - variacion) + 'px';
  bolaBase.height = (initialWidth - variacion) + 'px';
  bolaBase.opacity = 1 - opacidad;
  bolaBase.boxShadow = `inset 0 0 ${10 + blur}px ${0 + extension}px rgb(0,255,255)`;
  // console.log(bolaBase.width);
}
function animation2 (variacion, opacidad, blur, extension) {
  bolaBase.width = (10 + variacion) + 'px';
  bolaBase.height = (10 + variacion) + 'px';
  bolaBase.opacity = 1 + opacidad;
  bolaBase.boxShadow = `inset 0 0 ${10 + blur}px ${0 + extension}px rgb(0,255,255)`;
}
function animation3 (variacion, opacidad, blur, extension) {
  bolaBase.width = (155 + variacion) + 'px';
  bolaBase.height = (155 + variacion) + 'px';
  bolaBase.opacity = 1 + opacidad;
  bolaBase.boxShadow = `inset 0 0 ${10 + blur}px ${0 + extension}px 0 rebeccapurple, 0 0 50px 50px rgba(102, 51, 153, 0.347)`;
  bolaBase.boxShadow = `0 0 50px 50px rgba(102, 51, 153, 0.347), inset 0 0 ${4 + blur}px ${7 + extension}px rebeccapurple`;
}
  
  
setInterval(() => {
  if (tiempo < 1000 * 0.9) {
    animation(variacion, opacidad, sombraBlur, sombraExtension);
    variacion += 100/(fotogramas * 0.9);
    opacidad += 0.5 / (fotogramas * 0.9);
    sombraBlur += 90 /(fotogramas * 0.9);
    sombraExtension += 10 /(fotogramas * 0.9);
  } else if (tiempo >= 900 && tiempo <= 951) {
    variacion = 0;
    opacidad = 0;
    sombraBlur = 0;
    sombraExtension = 0;
    animation2(variacion, opacidad, sombraBlur, sombraExtension)
    variacion += 100/(fotogramas * 0.02);
    opacidad += 1 / (fotogramas * 0.02);
    sombraBlur += 90 /(fotogramas * 0.02);
    sombraExtension += 10 /(fotogramas * 0.02);
  } else if (tiempo <= 1000) {
    console.log('Si es menor');
    animation3(variacion, opacidad, sombraBlur, sombraExtension)
    variacion += 390/(fotogramas * 0.08);
    opacidad += 1 / (fotogramas * 0.08);
    sombraBlur += 100 /(fotogramas * 0.08);
    sombraExtension += 60 /(fotogramas * 0.08);
  } else {
    clearInterval();
  }
  tiempo += 1000 / fotogramas;
}, 1000 / fotogramas);