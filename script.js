const change=document.querySelectorAll('.changeimg img');
const sidespan=document.querySelectorAll('.side1 span');


$('.navoption').on('click',function(){
    if($('.side').hasClass('show')){
        $('.side').toggleClass('moveout');
    }
    else
    {
        $('.side').toggleClass('show');
    }
})

$(window).scroll(function(){
    
        if(window.pageYOffset>=400){
            $(".navbottom").css('visibility','hidden');
            $('header').addClass('showbackground');
        }
        else{
            $(".navbottom").css('visibility','visible');
            $('header').removeClass('showbackground');
        }
    
});



for(let i=0;i<sidespan.length;i++){
    sidespan[i].addEventListener('mouseover',Showmore);
}

function Showmore(e){
    if(e.target.textContent=='信息'){
        $('.side2').css("display","flex");
        $('.member').css("display","none");
        $('.picture').css("display","none");
    }
    else if(e.target.textContent=='團員'){
        $('.side2').css("display","none");
        $('.member').css("display","flex");
        $('.picture').css("display","none");
        $('.member').addClass('show2');
        
    }
    else if(e.target.textContent=='照片'){
        $('.side2').css("display","none");
        $('.member').css("display","none");
        $('.picture').css("display","flex");
        $('.picture').addClass('show2');
    }
}


let z=1;
let i=0;

setTimeout(changeimg,5000);

function changeimg(){
    change[i].style.zIndex=z;
    i=(i+1)%4;
    z=z+1;
    setTimeout(changeimg,5000);
}

