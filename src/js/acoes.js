function slide(){

    var slideBrigadeiros = $('<div/>').addClass('Brigadeiros');
    var slideMacarons = $('<div/>').addClass('Macarons');
    var slideCupcakes = $('<div/>').addClass('Cupcakes');
    slideBrigadeiros.addClass('slide');
    slideMacarons.addClass('slide');
    slideCupcakes.addClass('slide');

    slideBrigadeiros.append(selectProdutos(brigadeiros));
    slideMacarons.append(selectProdutos(macarons));
    slideCupcakes.append(selectProdutos(cupcakes));
    $('#produtos').append(slideBrigadeiros);
    $('#produtos').append(slideMacarons);
    $('#produtos').append(slideCupcakes);
    slideBrigadeiros.show();
    slideMacarons.hide();
    slideCupcakes.hide();
    selectProdutos(macarons);
    selectProdutos(cupcakes);
    $('.slide').append(' <svg class="seta-esquerda" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>');
    $('.slide').append('<svg class="seta-direita" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"  fill="#000000"><g>            <path d="M0,0h24v24H0V0z" fill="none"/>   </g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/>    </g></svg>');

    slideBrigadeiros.children('div').hide();
    slideBrigadeiros.children('div').first().show();
    slideMacarons.children('div').hide();
    slideMacarons.children('div').first().show();
    slideCupcakes.children('div').hide();
    slideCupcakes.children('div').first().show();

    $('.seta-esquerda').click((event)=>{
        var essaSeta = $(event.currentTarget);
        var paiDaSeta = essaSeta.parent();
        var filhos = paiDaSeta.children('div');
        var quantidadeSlides = filhos.length;
        var primeiro = filhos.first();

        if(primeiro.css('display') === 'none'){
            for(var i = 0; i < quantidadeSlides; i++){
                filhoAgora = $(filhos.get(i));
                if(filhoAgora.css('display') != 'none'){
                    filhoAgora.toggle( "slide");
                    filhoAgora.prev('div').toggle('slide');
                    break;
                }
            }
        }else{
            console.log('primeiro aparece, não faz nada');
        }

    })
    $('.seta-direita').click((event)=>{
        var essaSeta = $(event.currentTarget);
        var paiDaSeta = essaSeta.parent();
        var filhos = paiDaSeta.children('div');
        var quantidadeSlides = filhos.length;
        var ultimo = filhos.last();

        if(ultimo.css('display') ==='none'){
            for(var i = 0; i < quantidadeSlides; i++){
                filhoAgora = $(filhos.get(i));
                if(filhoAgora.css('display') != 'none'){
                    console.log('esta aparecendo');
                    filhoAgora.toggle( "slide");
                    filhoAgora.next('div').toggle('slide');
                    break;
                }
            }
        }else{
            console.log('ultimo está aparecendo PAROU');
        }

    })
}
function ondeEstou(){
    var sections = $('section');
    var realSections = $.makeArray(sections);
    var sectionsPositions = $.map(realSections, function (section){
        return $(section).position().top;
    });
    var sectionsAreas = $.map(realSections, function (section){
        return $(section).position().top + $(section).height() ;
    });
    console.log(sectionsAreas);
    var userPosition = $(this).scrollTop(); 
    console.log(userPosition);
    for(var i = 0; i < sectionsPositions.length; i++){
        if(userPosition === sectionsPositions[i]){
           sections.each(function(index){
                if(index === i){
                    estouAqui = $(this);

                }
           })
        }else if(userPosition > sectionsPositions[i] && userPosition < sectionsAreas[i] ){
            sections.each(function(index){
                if(index === i){
                    estouAqui = $(this);

                }
           })
        }
    } 
    
    return estouAqui;
}
function proximaPagina(){
    proxima = ondeEstou().next();
    return proxima;
}
function anteriorPagina(){
    proxima = ondeEstou().prev();
    return proxima;
}
function trocaMenu(){
    if(ondeEstou().attr('id') !== 'inicio'){
        $('#sessoes').removeClass('gradient');
        $('#sessoes').addClass('menuBranco');
    }else{
        $('#sessoes').removeClass('menuBranco');
        $('#sessoes').addClass('gradient');
    }
}
function retonarNav(n){
    var nav = undefined;
    $('nav a').each(function(index){
        if(index === n){
            nav = $(this);
        }
    })
    if(nav === undefined){
        nav = $('nav a');
    }
    return nav;
}
function retornaLink(n){
    var link = undefined
    $('#sessoes li a').each(function(index){
        if(index === n - 1){
            link = $(this);
        }
    });
    if(link === undefined){
        link = $('#sessoes li a');
    }
    return link;
}
function controlaNav(){
   var sessoesID = ['inicio','produtos','sobre','contatos'];
   switch (ondeEstou().attr('id')){
       case sessoesID[0]:
           retonarNav().removeClass('gradient');
           retonarNav().removeClass('selecionada');
           retonarNav(0).attr('class','gradient');
           retornaLink().removeClass('negrito')
        break;
       case sessoesID[1]:
            retonarNav().removeClass('gradient');
            retonarNav().removeClass('selecionada');
            retonarNav(1).addClass('selecionada');
            retornaLink().removeClass('negrito');
            retornaLink(1).addClass('negrito');
            break;
       case sessoesID[2]:
            retonarNav().removeClass('gradient');
            retonarNav().removeClass('selecionada');
            retonarNav(2).attr('class','gradient');
            retornaLink().removeClass('negrito');
            retornaLink(2).addClass('negrito');
            break;
       case sessoesID[3]:
            retonarNav().removeClass('gradient');
            retonarNav().removeClass('selecionada');
            retonarNav(3).attr('class','gradient');
            retornaLink().removeClass('negrito');
            retornaLink(3).addClass('negrito');
            break;
   }

}


function vaiParaProxima(proxima){
    window.location.href = proxima.attr('id') === undefined ? window.location.href : '#' + proxima.attr('id');

}
function vaiParaAnterior(anterior){
    window.location.href = anterior.attr('id') === undefined ? window.location.href : '#' + anterior.attr('id');

}
function scrollPeloTeclado(){
    $(document).keydown(function( event ) {
        if ( event.which == 40 ) { // arrow down
            vaiParaProxima(proximaPagina())
        }else if(event.which == 38){ // arrow top
            vaiParaAnterior(anteriorPagina())
        }
    });
}
function movimentaPeloMouse(){
    $(window).on('wheel', function(event){
        if (event.originalEvent.wheelDelta >= 0){
         vaiParaAnterior(anteriorPagina());
     
        } else {
         vaiParaProxima(proximaPagina());
         }  
     })
}
function acionaScroll(){
    $('html').css('overflow-y', 'auto');
}
var isMobile = false;
function mobileFunctions(){
    acionaScroll()
}
function desktopFunctions(){
    scrollPeloTeclado();
    movimentaPeloMouse();
}
$(window).scroll(function(){   
    trocaMenu();
    controlaNav();
   
}) 

$(document).ready(()=>{
    slide();
    trocaMenu();
    controlaNav()
    retornaLink()

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
    }
    isMobile ? mobileFunctions() : desktopFunctions();
    
})
