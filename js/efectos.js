$(document).ready(function(){
  /* EFECTO DE LOS MENUS  */
  $('.menu a').each(function(index, elemento){
    
    //this => hacer referencia al elemento actual
    $(this).css({
      'top': '-200px' 
    });

    $(this).animate({
      top:'0'

    }, 1000 + (index * 500))
  });
})

/* para el texto de header */

/* mostrar el ancho de la pantalla 
console.log($(window).width()); */

if($(window).width() > 800){
  $('header .textos').css({
    opacity:0,
    marginTop:0,
  });

  $('header .textos').animate({
    opacity:1,
    marginTop: '-52px'
  }, 1500);
    
}

//ENLACES DEL MENU

//offset() busca la posicion del en la pantalla con el scroll

const acercaDe = $('#acerca-de').offset().top;
const menu = $('#productos').offset().top;
const galeria = $('#galeria').offset().top;
const ubicacion = $('#ubicacion').offset().top;

$('#btn-acerca-de').on('click', function(event){
  event.preventDefault();
  //console.log('click en acerca de');
  //console.log(acercaDe);
  $('html, body').animate({
    scrollTop: acercaDe
  }, 500)
});

$('#btn-menu').on('click', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: menu
  }, 500);
});
 
$('#btn-galeria').on('click', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: galeria
  }, 500);
});

$('#btn-ubicacion').on('click', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: ubicacion
  }, 500);
});

