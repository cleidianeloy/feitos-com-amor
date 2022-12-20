
var brigadeiros = [
    {
        imagem: 'brigadeiros.png',
        nome: 'Brigadeiros Gourmet',
        descricao: 'Caixa com 20 brigadeiros com sabores de sua escolha'
    },
    {
        imagem: 'brigadeiros.png',
        nome: 'Brigadeiros Gourmet',
        descricao: 'Caixa com 10 brigadeiros com sabores de sua escolha'
    }

]
var macarons = [
    {
        imagem: 'macaron.png',
        nome: 'Macaron',
        descricao: 'Caixa com 20 macarons com sabores a sua escolha'
    }
]
var cupcakes = [
    {
        imagem: 'cupcake.png', 
        nome: 'Cupcake',
        descricao: 'Unidade de Cupcake com uma diversidade de sabores para escoolher'
    }
]
var produtos = [brigadeiros, macarons, cupcakes];
function selectProdutos(produto){
    var divs = [];
    for(var i = 0; i < produto.length; i++){
        // debugger;
        var div = $('<div/>');
        var divWrapper = $('<div/>').addClass('wrapper');
        var img = $('<img/>')
        var h2 = $('<h2/>')
        var p = $('<p/>')
        var button = $('<button/>');
        var titulo = produto[i].nome;
        var descricao = produto[i].descricao;
        var srcImagem = produto[i].imagem;

        button.text('QUERO ENCOMENDAR');
        p.text(descricao);
        h2.text(titulo);
        img.attr('src','imgs/'+ srcImagem);
        divWrapper.append(img);
        div.append(divWrapper);
        div.append(h2);
        div.append(p);
        div.append(button);
        divs.push(div);
    }
    return divs;
}

$('#selectProdutos').change(function(){
    switch($(this).find(':selected').text()){
        case 'Brigadeiros':
            $('#produtos').children('h1').text('Brigadeiros');
            $('.Brigadeiros').show();
            $('.Brigadeiros').siblings('.slide').hide();
            break;
        case 'Macarons':
            $('#produtos').children('h1').text('Macarons');
            $('.Macaron').show();
            $('.Macaron').siblings('.slide').hide();
            break;
        case 'Cupcakes':
            $('#produtos').children('h1').text('Cupcakes');
            $('.Cupcake').show();
            $('.Cupcake').siblings('.slide').hide();
            break;
    }
    
})
   
