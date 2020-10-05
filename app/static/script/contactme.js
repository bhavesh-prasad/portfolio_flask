document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function() {
        const t = gsap.timeline({dafaults : {ease : "power2.out"}});
        t.to('.mainContent' , { x:"0%",opacity:"100%", duration : 2 });
    };
    
});
