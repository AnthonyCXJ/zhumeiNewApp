/**
 * Created by Administrator on 2016/5/20.
 */
/*JavaScript��̬���������С*/

    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
//�����  375  ������Ƹ�����  ������Ƹ��ǻ���iPhone6��  ��ô��Ļ�ߴ����375
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

/*������font-size: 100px;*/
