/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

{
    // Selected/Active stage for the left nav
    let nav = document.getElementById("sidebar-wrapper");
    let btns = document.querySelectorAll('ul.navigation>li');
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("selected");
    if (current.length > 0) {
        if(!(current[0].classList.contains == 'selected')) {
            current[0].classList.remove('selected');
        }else if (current[0].classList.contains == 'selected') {
            current[0].className = current[0].className.replace(" selected", "");
        }
    }
    this.className += " selected";
    });
    }
}


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('left-nav-float');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('left-nav-float');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('left-nav-float'));
        });
    }

});

document.querySelector('#page-content-wrapper').addEventListener('click', (e) => {
    if (innerWidth < 1024 && document.body.matches('.left-nav-float')) document.body.classList.toggle('left-nav-float');
})


// window.addEventListener('DOMContentLoaded', event => {

//     // Toggle the side navigation only for the arrow that 
//     // appear in the Header, the html is hidden currently in the HTML
//     const sidebarToggle = document.body.querySelector('#sidebarToggle1');
//     if (sidebarToggle) {
        
//         if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
//             document.body.classList.toggle('left-nav-float');
//         }
//         sidebarToggle.addEventListener('click', event => {
//             event.preventDefault();
//             document.body.classList.toggle('left-nav-float');
//             localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('left-nav-float'));
//         });
//     }

// });
