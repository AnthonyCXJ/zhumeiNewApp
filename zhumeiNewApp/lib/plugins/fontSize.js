/**
 * Created by Administrator on 2016/5/20.
 */
/*JavaScript动态控制字体大小*/

    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
//这里的  375  根据设计稿来定  比如设计稿是基于iPhone6的  那么屏幕尺寸就是375
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

/*根字体font-size: 100px;*/
