
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function() {
        const t = gsap.timeline({dafaults : {ease : "power1.out"}});
        t.to('.textspan1' , { y:"0%" , duration : 0.5   });
        t.to('.textspan2', {y:"0%" , duration : 0.5 });
        t.to('.helperSplashWindow', {y:"-100%" , duration :1.3 , delay : 0.5 });
        t.to('.initialSplashWindow',{ y:"-100%" , duration:1.5} , "-=1");
        t.to('.mainPagePhoto',{duration:1,y:"0%",opacity:"100%"} , "-=1");
        t.to('.text1',{ x:"0",opacity:"100%" , duration:1.5} , "-=1");
        t.to('.text2',{ x:"0" ,opacity:"100%", duration:1.5} , "-=1");
    };
  
});