document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function() {
        const t = gsap.timeline({dafaults : {ease : "power1.out"}});
        t.to('.heading' , { x:"-4%",opacity:"100%", duration : 2 });
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.projects',{scrollTrigger:{
            trigger:".projects"
        }, x:"0%", opacity:"100%",duration:1});
        
        gsap.to('#Animated',{scrollTrigger:{
            trigger:"#Animated"        }, x:"0%", opacity:"100%",duration:1});
        gsap.to('#drone',{scrollTrigger:{
            trigger:"#drone"        }, x:"0%", opacity:"100%",duration:1});


    };
    
});
