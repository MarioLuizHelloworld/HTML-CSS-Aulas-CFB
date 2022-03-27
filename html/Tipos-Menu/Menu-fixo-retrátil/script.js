const menus= document.querySelectorAll('[data-menu]');
const cssAtivo='ativo';

menus.forEach(function(e){
    e.addEventListener('click', function(){
        for(i=0;i<menus.length;i++){
            menus[i].classList.remove(cssAtivo); //POSSO USAR CSSATIVO OU 'ATIVO';
        }
        e.classList.add(cssAtivo); //POSSO USAR CSSATIVO OU 'ATIVO';
    })
});

// PARA ESCONDER O MENU - ICONE RETRATIL

const btnMenu=document.getElementsByClassName('btnMenu')[0];
const menu=document.getElementsByClassName('menu')[0];
btnMenu.addEventListener('click', function(){
    menu.classList.toggle('menuAberto');
});