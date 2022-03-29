function mostrarDropDown(){
    document.getElementsByClassName("menudropdown-conteudo")[0].classList.toggle("mostrarMenuDropdown");
}

window.onclick=function(event){
    if(!event.target.matches('.btndropdown')){
        var dropdowns=document.getElementsByClassName("menudropdown-conteudo");
        var i;
        for(i=0;i<dropdowns.length;i++){
            var abertodropdown=dropdowns[i];
            if(abertodropdown.classList.contains('mostrarMenuDropdown')){
                abertodropdown.classList.remove('mostrarMenuDropdown');
            }
        }
    }
}