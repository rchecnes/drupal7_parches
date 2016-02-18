jQuery(document).ready(function(){

    if(jQuery(window).width() > 768){

        wow = new WOW({
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
              //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
          });
  
        wow.init();
    }

    animationClick = function(element, animation, time){
        element = jQuery(element);
        element.click(
            function() {
                element.addClass('animated ' + animation);        
                //tiempo que demora la animación
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, time);         
      
        });
    }

    animationHover = function(element, animation, time){
        element = jQuery(element);
        element.hover(
            function() {
                element.addClass('animated ' + animation);        
            },
            function(){
                //tiempo que demora la animación
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, time);         
            });
    }

    animationAll = function(element, animation, time){

        element = jQuery(element);
        
        element.removeClass('animated '+animation);

        element.addClass('animated ' + animation);        
       
        //tiempo que demora la animación
        window.setTimeout( function(){
            element.removeClass('animated ' + animation);
        }, time);
    }

    afterGoSlider = function(){
        /**TENER EN CUENTA ANTES DE ANIMAR**/
        /***********************************/
        /*Para animar solo basta con tener una selección ya sea con una clase o id*/ 
        /*Luego usar las funciones animationAll, animationHover o animationClick*/
        /*Tambien antes de animar puedes decidir que tipo de animación usar y para ello revisar esta dirección*/
        /*http://daneden.github.io/animate.css*/
        /**************************************/

        //Animar contenido izquierdo del slider
        element = jQuery(".view-content .owl-carousel .owl-item.active .img-logo-slider img");
        animationAll(element, 'bounceInUp', 3000);

        //Animar al texto título del slider
        element = jQuery(".view-content .owl-carousel .owl-item.active .title-slider");
        animationAll(element, 'fadeInRightBig', 3000);

        //Animar al boton ver más del slider
        //element = jQuery(".view-content .owl-carousel .owl-item.active .content-informacion a");
        //animationAll(element, 'flip', 3000);
    }
    
});


