/**
 * Created by lunguang on 2016/11/15.
 */
$(document).ready(function(){
    $(function(){
        $(".icon-2").addClass("icon-2-beforn");
        $('.icon-2').click(function(){
            $(this).toggleClass("icon-2-beforn").toggleClass("icon-2-after");
            if(
                $(".icon-2").hasClass("icon-2-after")
            ){
                $(".icon-2").click(function(){
                    $(this).addClass("icon-2-animate")
                })
            }
        })
    });
    $(function(){
        $(".icon-3").addClass("icon-3-beforn");
        $(".icon-3").click(function(){
            $(this).toggleClass("icon-3-beforn").toggleClass("icon-3-after");
            if(
                $(".icon-3").hasClass("icon-3-after")
            ){
                $(".icon-3").click(function(){
                    $(this).addClass("icon-3-animate")
                })
            }
        })
    });
    $(function(){

    })
})
//index½áÊø

//discover
$(document).ready(function(){
    $(".icon-jiahao").click(function(){
        $(this).toggleClass("icon-jiahao-beforn").toggleClass("icon-jiahao-after")
    })
});
$(document).ready(function(){
    $(".huise-guanzhu").click(function(){
        $(this).toggleClass("huise-guanzhu-beforn").toggleClass("huise-guanzhu-after")
    })
});


