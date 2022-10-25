$("#prev-btn").click(prevItem)
$("#next-btn").click(nextItem)

function prevItem(){
    var active = $(".active")
    var prev = active.prev()
    if(prev.length == 0){
        prev = $(".item-slider").last();
        $(".slider-content").animate({left:"-200vw"})
    }else{
        $(".slider-content").animate({left:"+=100vw"})
    }
    active.removeClass("active")
    prev.addClass("active")
}

function nextItem(){
    var active = $(".active")
    var next = active.next()
    if(next.length == 0){
        next = $(".item-slider").first();
        $(".slider-content").animate({left:"0px"}, 700)
    }else{
        $(".slider-content").animate({left:"-=100vw"}, 700)
    }
    active.removeClass("active")
    next.addClass("active")
}

setInterval(nextItem, 8000)


