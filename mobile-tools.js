;(function () {
    var targets = document.querySelectorAll("[data-anti-shake]");
    if (targets.length===0){
        console.error("no element to anti-shake");
        return;
    }

    function antiShake(target) {
        var touchStart = {x: 0, y: 0};
        var touchDis = {x: 0, y: 0};
        var antiDir = target.dataset.antiShake;
        var isFirst = true;
        var isAnti = true;
        target.addEventListener("touchstart", function (ev) {
            var touchC = ev.changedTouches[0];
            touchStart.y = touchC.clientY;
            touchStart.x = touchC.clientX;
            this.dataset.antiStatus = "no";
            isAnti = true;
            isFirst = true;
        });
        target.addEventListener("touchmove", function (ev) {
            if (isAnti){
                this.dataset.antiStatus = "ok";
            }

            var touchC = ev.changedTouches[0];
            var touchNowY = touchC.clientY;
            var touchNowX = touchC.clientX;
            touchDis.y = touchNowY - touchStart.y;
            touchDis.x = touchNowX - touchStart.x;

            if (isFirst){
                isFirst=false;
                if (antiDir==="x"&&(Math.abs(touchDis.x) < Math.abs(touchDis.y))) {
                    this.dataset.antiStatus = "no";
                    isAnti = false;
                    return;
                }else if (antiDir === "y" && (Math.abs(touchDis.x) > Math.abs(touchDis.y))) {
                    this.dataset.antiStatus = "no";
                    isAnti = false;
                    return;
                }
            }
        });

    }

    for (var i = 0; i < targets.length; i++) {
        antiShake(targets[i]);
    }
})();