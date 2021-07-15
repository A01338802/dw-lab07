$(document).ready(function(){
    $('.agregar').on('click', function(e){
        e.preventDefault();
        var newItem = $('input').val();
        addItem(newItem);
    });

    function addItem(newItem){
        var btnCheck = $('<button>');
        btnCheck.text('check');
        btnCheck.addClass('checar');
        var btnDel = $('<button>');
        btnDel.text('delete');
        btnDel.addClass('del');
        var item = $('<p>');
        item.text(newItem);
        item.addClass('itemShop');
        var items = $('<li>');
        items.addClass('lis');
        items.attr('data-check', false);
        items.append(item);
        items.append(btnCheck);
        items.append(btnDel);
        var x = $('.Lista');
        x.append(items);
    }

    $('.Lista').on('click', '.checar', function(){
        var padre = $(this).parent();
        padre.toggleClass('chec', padre.attr('data-check'));
    });

    $('.Lista').on('click', '.del', function(){
        $(this).parent().remove();
    });
});

