$(document).ready(function(){
  media();
  function media(){
    const ww = $(window).width();

    if(ww >= 760){
        //스와이퍼
        var imgSwiper = new Swiper(".img_slide", {
          loop: true,
          loopFillGroupWithBlank: false,
          // loopAdditionalSlides: 3,
          speed:500,//슬라이드 간 전환시간
          centeredSlides: true,
          // 중간 슬라이드를 강조해서 먼저 보여주도록 설정 / true일 경우 활성 슬라이드는 항상 왼쪽이 아닌 가운데 배치 
      
          initialSlide:0, //초기 슬라이드 색인 번호 / 브라우저 열었을떄 먼저 보여야하는 객체를 설정시켜줌(8번이 1번)  
          slidesPerView: 'auto', //coverflow 진행시 loop:true적용과 같이 꼭 auto로 설정해줌       
          slideToClickedSlide: true,//해당 슬라이드 클릭시 슬라이드 위치로 이동 
          spaceBetween:250,
          effect:'coverflow',
          coverflowEffect:{
              rotate:0,//슬라이드 회전각 : 클수록 슬라이딩시 커짐
              slideShadows:false,//슬라이드 그림자 : 3d 효과를 강조하기 위한 회전시 흐릿한 효과 
              stretch: 0,//슬라이더 간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
              depth: 150,//깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
              modifier:1,//효과 배수: 위 숫자값들의 이 값을 곱하기 처리하여 효과를 강하게 처리함
          },
          pagination: {        
            el: ".stick_wrap",
            clickable: true,         
            type: 'progressbar',
          },
          navigation: {
            nextEl: ".img-slide-n",
            prevEl: ".img-slide-p",
          },
      
          
          // autoplay:{
            
          //   delay:1500
          // }
        });
        $('.stop').on('click',function(){
          swiper.autoplay.stop();
        });
      
      
    }else{
      $('.hamburger').click(function(){
        $(this).toggleClass('on');
        $('.sub-menu-box').toggleClass('active');
      });
    }
}
    
  var swiper = new Swiper(".banner", {
    slidesPerView: 1,
    spaceBetween: 10,
              
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    },
    
    
  });

  var swiper = new Swiper(".new-seller-bar", {
    pagination: {
      el: ".round-btn",
    },
  });

  var verticalSwiper = new Swiper(".vertical_swiper", {
    // slidesPerView: 4,
    // // centeredSlides: true,
    // slidesPerGroup: 1,
    // spaceBetween: 12,
    grabCursor: true,   
    // loop:true,   
    navigation: {
      nextEl: ".vertical-btn-n",
      prevEl: ".vertical-btn-p",
    },
    breakpoints: {
      
        1500:{
                slidesPerView: 4,
                spaceBetween: 12,
        
                slidesPerGroup: 1,
        },
        1060:{
                slidesPerView: 2,
                spaceBetween: 12,
        
                slidesPerGroup: 1,
        },
        760: {
              slidesPerView: 1,
              spaceBetween: 8,
        
              slidesPerGroup: 1,
        },
        500: {
              slidesPerView: 1,
              spaceBetween: 0,
        
              slidesPerGroup: 1,
        }

      },
    
  });


  $('.vertivcal_bottom_wrap .vertical_right .vertical_swiper .vertical_slider .cart-btn .vertical-heart svg').click(function(){
    $(this).toggleClass('active');
  });

  

  
 
});