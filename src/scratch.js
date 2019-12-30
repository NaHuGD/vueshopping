    alert('ready');
    let useNumber = 0;
    let luckNumber = [];
    let mousedown;
    let w = 400;
    let h = 200;
    let bottomCanvas = document.querySelector("#bottom");
    let topCanvas = document.querySelector('#top');
    topCanvas.width = bottomCanvas.width = w;
    topCanvas.height = bottomCanvas.height = h;
    let ctxBot = bottomCanvas.getContext("2d");
    let ctxTop = topCanvas.getContext('2d');
    // bottomCanvas.style.background = "#f40";

    document.querySelector('#bottom').style.backgroundImage = `url(https://img.lovfee.com/mobile/2019/mob190107/images/pop/btm2-4.gif)`;
    ctxBot.font = "30px 微軟雅黑";

    function drawBot() {
        //清除區域，為了點擊再來一次進行頁面重繪
        ctxBot.clearRect(0, 0, w, h);
        luckNumber.push(random());
        //fillText(填充)實心數字 改為strokeText(描邊)為空心數字
        // ctxBot.fillText( luckNumber[luckNumber.length-1],70,55);
    };

    //獲取1-1000隨機數
    function random() {
        return Math.ceil(Math.random() * 1000);
    };

    drawBot();
    drawTop();

    function drawTop() {
        ctxTop.canvas.style.opacity = 1;
        ctxTop.fillStyle = '#cdcdcd';
        ctxTop.fillRect(0, 0, w, h);

        //判斷當前是否為第一次刮開，不是則清除上一次區域
        if (ctxTop.globalCompositeOperation != 'destination-out') {
            ctxTop.globalCompositeOperation = 'destination-out';
        } else {
            ctxTop.clearRect(0, 0, w, h);
        };
    };

    //鼠標移動開始刮圖層
    topCanvas.addEventListener('touchstart', eventDown);
    topCanvas.addEventListener('touchend', eventUp);
    topCanvas.addEventListener('touchmove', eventMove);
    topCanvas.addEventListener('mousedown', eventDown);
    document.addEventListener('mouseup', eventUp);
    topCanvas.addEventListener('mousemove', eventMove);

    function eventDown(ev) {
        console.log(ev);
        console.log(event);
        ev = ev || event;
        ev.preventDefault();
        mousedown = true;
    };

    function eventUp(ev) {
        ev = ev || event;
        ev.preventDefault();
        mousedown = false;
    };

    function eventMove(ev) {
        ev = ev || event;
        ev.preventDefault();
        if (mousedown) {
            if (ev.changedTouches) {
                ev = ev.changedTouches[ev.changedTouches.length - 1];
            };
            let x = ev.pageX - this.offsetLeft;
            let y = ev.pageY - this.offsetTop;
            ctxTop.beginPath();
            ctxTop.arc(x, y, 30, 0, Math.PI * 2);
            ctxTop.fill();
            alertInfo();
        };
    };


    // 判斷刮開區域大於60%時，頂層canvas消失，顯示底層數據
    function alertInfo() {
        let data = ctxTop.getImageData(0, 0, w, h).data;
        let n = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] == 0) {
                n++;
            };
        };
        if (n >= data.length * 0.6) {
            ctxTop.globalCompositeOperation = 'destination-over';
            ctxTop.canvas.style.opacity = 0;
            // document.querySelector("button").style.display="block";
            alert(luckNumber[luckNumber.length - 1]);
        };
    };
