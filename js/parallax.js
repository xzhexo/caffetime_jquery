$('document').ready(function(){
  //calcular el ancho pantalla
  const windowWidth = $(window).width();

  if(windowWidth >800){

  
    //console.log(width);
    //cuando el usuario haga scroll en la pagina
    $(window).scroll(function(){
      const scroll = $(window).scrollTop();
     //console.log(scroll);

     $('header .textos').css({
       // translate (horizontal, vertical)
       'transform': 'translate(0px,'+ scroll/2 +'%)'
     });

     $('.acerca-de article').css({
       'transform': 'translate(0px,-' + scroll/4 +'%)'
     });

    });
  }
});