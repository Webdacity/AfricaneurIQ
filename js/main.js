$("#nav-about").click(()=> {
    $(".about-section").animate({top: '0'}, 1000);
});

$("#nav-who").click(()=> {
    $(".who-section").animate({top: '0'}, 1000);
});

$("#nav-what").click(()=> {
    $(".what-section").animate({top: '0'}, 1000);
});

$("#nav-clients").click(()=> {
    $(".clients-section").animate({top: '0'}, 1000);
});

$("#nav-beneficiaries").click(()=> {
    $(".beneficiaries-section").animate({top: '0'}, 1000);
});


$(".top-section-close").click(()=>{
    $(".top-section").animate({top: '-100%'}, 1000);
});

$(".bottom-section-close").click(()=>{
    $(".bottom-section").animate({top: '100%'}, 1000);
});
