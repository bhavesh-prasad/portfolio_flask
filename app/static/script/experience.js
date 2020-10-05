document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function() {
        const t = gsap.timeline({dafaults : {ease : "power1.out"}});
        t.to('.heading' , { x:"0%",opacity:"100%", duration : 2 });
        t.to('.heading1' , { x:"-4%",opacity:"100%", duration : 2 } ,"-=2");
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.projects',{scrollTrigger:{
            trigger:".projects"
        }, x:"0%", opacity:"100%",duration:1});

    };
    
});
