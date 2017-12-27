var menu = document.getElementsByClassName('menu-icon')

menu.on('click', function(e) {
    e.prevetDefault();
    alert('clicou');
});