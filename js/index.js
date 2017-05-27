$(function () {

//定位属性转换
    $(window).on('wheel',function (e) {
        // console.log(e)
        if(e.originalEvent.wheelDeltaY <0){

            var scrollTop=$(window).scrollTop(),wh=$(window).height();
            if(scrollTop+100>= wh ){
                // console.log(scrollTop);
                // console.log(wh);
                $('.centent .centent1').addClass('cent_pos1');
                $('.centent .centent2').addClass('cent_pos2');
                $('.centent .centent3').addClass('cent_pos3');
                $('.centent .centent4').addClass('cent_pos4');
            }
        } else if(e.originalEvent.wheelDeltaY >=0){
            // console.log($(window).scrollTop());
            // console.log($(window).height()+40);
            var scrollTop=$(window).scrollTop(),wh=$(window).height();
            if(scrollTop<= wh ){
                $('.centent .centent1').removeClass('cent_pos1');
                $('.centent .centent2').removeClass('cent_pos2');
                $('.centent .centent3').removeClass('cent_pos3');
                $('.centent .centent4').removeClass('cent_pos4');
            }
        }

    })

//centent1的定位
    var scrollTop=$(window).scrollTop(),wh=$(window).height();
    // if(scrollTop>wh){
    //     $('.centent .centent1').addClass('cent_pos');
    // }

//转盘
    var zhuanpan=$('.fixTop .center2');
    var num=1;
    $(window).on('wheel',function (e) {

        if(e.originalEvent.wheelDeltaY <0){
            num+=1;
            // console.log(num)
            $(zhuanpan).css({'transform':'rotate('+2*num+'deg)'});
            return;
        }else if(e.originalEvent.wheelDeltaY >0){
            num-=1;
            $(zhuanpan).css({'transform':'rotate('+2*num+'deg)'});
            return;
        }
    })


//点击换图片：
    $('.fixTop a').on('click',function () {
        $('.fixTop p').removeClass('anifix');
        $(this).children('p').addClass('anifix');
    })



})