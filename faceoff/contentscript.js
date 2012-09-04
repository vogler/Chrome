var pos = $(document).scrollTop();
console.log("start scrolling to bottom of page");
var i = 0;
var timer = setInterval(function() { // TODO events instead of timer?
    // usually it loads automatically at the bottom of the page
    // but sometimes there's a "More Stories" link...
    var moreStories = $("a.uiMorePagerPrimary");
    if(moreStories.length){
        moreStories.click();
    }
    // TODO only works for english interface
    if($("div.uiMorePagerPrimary:contains('There are no more posts to show right now.')").length){
        console.log("done - scrolled to bottom " + i + " times");
        console.log("view all comments");
        $('input[name="view_all[1]"]').click();
        $(document).scrollTop(pos); // restore scroll position
        clearInterval(timer);
    }else{
        $(document).scrollTop($(document).height());
        i++;
    }
}, 100);
// $(window).load(function() { // ajax calls? (JS of page is separate)
    // console.log("done loading");
// });