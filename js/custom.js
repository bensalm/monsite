//LOADER
const loaderEl = document.getElementsByClassName('fullpage-loader')[0];
$(document).ready(() => {
    setTimeout(()=>{
        loaderEl.classList.add('fullpage-loader--invisible');
        loaderEl.parentNode.removeChild(loaderEl);
    }, 1000)
})