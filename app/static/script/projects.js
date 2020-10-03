document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function() {
        const t = gsap.timeline({dafaults : {ease : "power1.out"}});
        t.to('.heading' , { x:"-4%",opacity:"100%", duration : 2 });
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.mainContent',{scrollTrigger:{
            trigger:".mainContent",scrub:1,start:"top 80%",end:"top 20%",toggleActions: "play none restart none"
        }, x:"0%", opacity:"100%",duration:2});
        gsap.to('.mainContent2',{scrollTrigger:{
            trigger:".mainContent2",scrub:1,end:"top 20%",toggleActions: "play none restart none"
        }, x:"0%", opacity:"100%",duration:2});
        gsap.to('.button',{scrollTrigger:{
            trigger:".button",scrub:1,end:"top 90%%",toggleActions: "play none restart none"
        }, x:"0%", opacity:"100%",duration:2});
        
    };
  
});
