
$(function(){

    //img懒加载
    // Echo.init({
    //     offset: 0,
    //     throttle: 0
    // });

    //下拉刷新
      $(document.body).pullToRefresh().on("pull-to-refresh", function() {
        setTimeout(function() {
            $(document.body).pullToRefreshDone();
        }, 2000);
      });

    //滚动加载
    var loading = false;  //状态标记
    $(document.body).infinite(100).on("infinite", function() {
        if(loading) return;
        loading = true;
        setTimeout(function() {
            var html = '';
            html += '<li class="border-b-10">'+
                '<div class="items-top pl10 pr10 pb10 clearfix">'+
                '<span class="img"><img src="images/head.jpg" alt=""></span>'+
                '<div class="dec fl pt10">'+
                '<p class="f15">Anthony</p>'+
                '<p class="gray f12">2017-07-10</p>'+
                '</div>'+
                '<a href="#" class="fr red f15 pt20"><i class="iconfont icon-tag f12 pr5"></i>玻尿酸隆鼻</a>'+
                '</div>'+
                '<a class="items-mid block pl10 pr10">'+
                '<p class="intwoline f15">我想你是爱我的，我猜你也舍不得，但是怎么说总觉得，我们之间 留了太多空白格，也许你不是我的，爱你却又该割舍，分开或许是选择，但它也可能是我们的缘分</p>'+
                '<div class="img-contrast clearfix">'+
                '<span><b class="before">Before</b><img src="images/list_img02.png" alt=""></span>'+
                '<span><b class="after">After</b><img src="images/list_img02.png" alt=""></span>'+
                '</div>'+
                '</a>'+
                '<div class="items-bottom flex-center border-href-t tc f15 pl10 pr10 relative">'+
                '<a href="javascript:" class="flex-items pt10 pb10 gray">'+
                '<i class="iconfont icon-look v-2"></i>浏览(289)'+
                '</a>'+
                '<a href="javascript:" class="flex-items pt10 pb10 gray">'+
                '<i class="iconfont icon-look v-2"></i>浏览(289)'+
                '</a>'+
                '<a href="javascript:" class="flex-items pt10 pb10 gray">'+
                '<i class="iconfont icon-look v-2"></i>浏览(289)'+
                '</a>'+
                '</div>'+
                '</li>';
            $('.j-beauty-list-infinite').append(html);
            loading = false;
        }, 1500);   //模拟延迟
    });

    // banner
    var jBanner = new Swiper('.j-banner',{
        loop: true,
        autoplay: 5000,//可选选项，自动滑动
        pagination : '.swiper-pagination'
    });
    //头条
    var jTopLine = new Swiper('.j-top-line',{
        direction : 'vertical',
        loop: true,
        onlyExternal : true,
        autoplay: 5000//可选选项，自动滑动
    });
    //限时特惠 轮播
    var preferential = new Swiper('.j-lay-preferential',{
        loop: true,
        //autoplay: 3000,//可选选项，自动滑动
        pagination : '.swiper-pagination'
    });

    // 限时特惠
    $('.j-countdown01').downCount({
        date: '2017/07/15 00:00:00',
        offset: +7
    }, function () {
        $('.j-countdown01').children('.j-time').css('background', '#666');
    });
    $('.j-countdown02').downCount({
        date: '2017/07/16 00:00:00',
        offset: +7
    }, function () {
        $('.j-countdown02').children('.j-time').css('background', '#666');
    });
    $('.j-countdown03').downCount({
        date: '2017/07/11 00:00:00',
        offset: +7
    }, function () {
        $('.j-countdown03').children('.j-time').css('background', '#666');
    });

    //nav 更多
    $('.j-navbar-more').on('click', function(){
        var $parent = $(this).parent(),
            $dataC = $(this).attr('data-click');
        if($dataC){
            $parent.css({
                height: '11.55rem',
                transition: 'height 0.5s ease'
            });
            $(this).attr('data-click', '');
        }else{
            $parent.css({
                height: '7.7rem',
                transition: 'height 0.5s ease'
            });
            $(this).attr('data-click', 'on');
        }

    });

    //列表切换
    $('.j-list-nav').on('click', 'a', function(){
        var index = $(this).index(),
            parent = $(this).parents('.j-all-list-wrap'),
            cont = parent.find('.j-list-cont').children();
        $(this).addClass('active').siblings().removeClass('active');
        cont.eq(index).removeClass('none').siblings().addClass('none');
    });

    //sub 优选 列表切换
    $('.j-sub-list-nav').on('click', 'li', function(){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('div').eq(index).removeClass('none').siblings('div').addClass('none');
    });

    // 平滑滚动
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 45;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },200);
                return false;
            }
        }
    });
})
