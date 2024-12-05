gsap.to('.image-section',{
    transform:'translateX(-70%)',
    scrollTrigger:{
        trigger:'.image-section',
        scroller:'body',
        start:'top 55%',
        end:'top -100%',
        scrub:true
    }
})