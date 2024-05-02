window.onload = function(){
    document.querySelector('.menu-toggle').onclick = function(){
        let menuItem = document.querySelector('div.menu');
        if (menuItem.classList.contains('opened')){
            menuItem.classList.remove('opened');
        }else{
            menuItem.classList.add('opened');
        }
    }
}