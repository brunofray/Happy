const buttonBackToTop = document.getElementById('backToTop');

window.onscroll = () => { scrollFunction() };

function scrollFunction() {
    if ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ){
        buttonBackToTop.style.display = "block";
    }
    else {
        buttonBackToTop.style.display = "none";
    }
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}