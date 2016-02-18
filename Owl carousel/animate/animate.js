jQuery(document).ready(function(){

    /*if(jQuery(window).width() > 768){

        wow = new WOW({
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
              //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
          });
  
        wow.init();
    }*/

    var animate= {
        //Se desliza hacia arriba
        fadeInUpBig: function(element, time){
            element = jQuery(element);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated fadeInUpBig');
            window.setTimeout( function(){
                element.removeClass('animated fadeInUpBig');
            }, (1000 * time)+100);
        },
        //Se desliza hacia abajo
        fadeInDownBig: function(element,time){
            element = jQuery(element);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated fadeInDownBig');
            window.setTimeout( function(){
                element.removeClass('animated fadeInDownBig');
            }, (1000 * time)+100);
        },
        //Se hace pequeño luego hace zoom
        bounceOut: function(element,time){
            element = jQuery(element);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated bounceOut');
            window.setTimeout( function(){
                element.removeClass('animated bounceOut');
            }, (1000 * time)+100);
        },
        //Se desliza hacia arriba y luego hace un movimiento
        bounceInUp: function(element,time){
            element = jQuery(element);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated bounceInUp');
            window.setTimeout( function(){
                element.removeClass('animated bounceInUp');
            }, (1000 * time)+100);
        },
        //Se desliza desde la derecha
        bounceInRight: function(element,time){
            element = jQuery(element);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated bounceInRight');
            window.setTimeout( function(){
                element.removeClass('animated bounceInRight');
            }, (1000 * time)+100);
        },                                                                                                                                                                                     
        //Se desliza desde la izquierda
        bounceInLeft: function(element,time){
            element = jQuery(element);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated bounceInLeft');
            window.setTimeout( function(){
                element.removeClass('animated bounceInLeft');
            }, (1000 * time)+100);
        },
        //Hace una animacion de flash muestra oculta
        flash: function(element,time){
            element = jQuery(element);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated flash');
            window.setTimeout( function(){
                element.removeClass('animated flash');
            }, (1000 * time)+100);
        },
        animationClick: function(element, animation, time){
            element = jQuery(element);
            element.click(
                function() {
                    element.addClass('animated ' + animation);        
                    //tiempo que demora la animación
                    window.setTimeout( function(){
                        element.removeClass('animated ' + animation);
                    }, time);         
          
            });
        },
        animationHover: function(element, animation, time){
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
        },
        animationAll: function(element, animation, time){

            element = jQuery(element);
            
            //element.removeClass('animated '+animation);
            element.css({'animation-duration':time+'s'});
            element.addClass('animated ' + animation);      
           
            //tiempo que demora la animación
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, (1000*time)+100);
        }
    }

    afterGoSlider = function(){

        //Para animar rapidamente podemos usar las funciones por defecto como por ejemplo:
        //1.fadeInUpBigSe: Desliza al nodo de abajo hacia arriba
        //2.fadeInDownBig: Desliza al nodo de arriba hacia abajo
        //3.bounceOut: Anima al nodo reduce el tamaño y hace zoom
        //4.bounceInUp: Desliza al nodo de abajo hacia arriba y luego hace un movimiento
        //5.bounceInRight: Desliza al nodo desde la derecha
        //6.bounceInLeft: Desliza al nodo desde la izquierda
        //7.flash: Aculta y muestra al nodo, tipo flash
        // Como implementar:
        //animate.fadeInDownBig(jQuery('#div'),2);
        /*******************************************************************************************************/
        /*Si queremos hacer otros animaciones podemos usa la función: animateAll(nodo, tipo_animacion, tiempo);*/
        /*Más informacion sobre animacion: http://daneden.github.io/animate.css/
        /*******************************************************************************************************/

        //Animando con las funciónes existentes a los logos del slider
        element1 = jQuery(".view-content .owl-carousel .owl-item.active .img-logo-slider img");
        animate.fadeInUpBig(element1,2);
        //Animando a mi gusto al titulo del slider
        element2 = jQuery(".view-content .owl-carousel .owl-item.active .title-slider");
        animate.animationAll(element2, 'fadeInUpBig', 2);
        //Animando a mi gusto al titulo del slider
        element3 = jQuery(".view-content .owl-carousel .owl-item.active .content-informacion a");
        animate.animationAll(element3, 'fadeInUpBig', 3);
        
    }

    //Iniciamos con la animacion al cargar la págia
    afterGoSlider();
    
});


