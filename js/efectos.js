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