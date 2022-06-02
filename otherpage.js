const sidespan=document.querySelectorAll('.side1 span');
const music=document.querySelector('audio');

$('.navoption').on('click',function(){
    if($('.side').hasClass('show')){
        $('.side').toggleClass('moveout');
    }
    else
    {
        $('.side').toggleClass('show');
    }
})



for(let i=0;i<sidespan.length;i++){
    sidespan[i].addEventListener('mouseover',Showmore);
}





function Showmore(e){
    if(e.target.textContent=='信息'){
        $('.side2').css("display","flex");
        $('.member').css("display","none");
        $('.picture').css("display","none");
    }
    else if(e.target.textContent=='照片'){
        $('.side2').css("display","none");
        $('.member').css("display","none");
        $('.picture').css("display","flex");
        $('.picture').addClass('show2');
    }
}

$('.fa-pause').on('click',function(){
    $('.fa-pause').hide();
    $('.fa-play').show();
    music.pause();
})

$('.fa-play').on('click',function(){
    $('.fa-pause').show();
    $('.fa-play').hide();
    music.play();
})