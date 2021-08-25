new Vue({
    el: '#app',
    data: {
        screenX: 0,
        screenY: 0,
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        insideOffsetX: 0,
        insideOffsetY: 0,
    },
    methods: {
        // 第1引数には自動的に Eventオブジェクト が渡される
        onMouseMove: function(e) {
            this.screenX = e.screenX;
            this.screenY = e.screenY;
            this.pageX = e.pageX;
            this.pageY = e.pageY;
            this.clientX = e.clientX;
            this.clientY = e.clientY;
            // dev内での相対位置
            // 正確には「現在マウスポインターが乗っている要素」内での相対位置。
            // したがって、内部divに乗っているときはその要素内での相対位置となる！
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;
        },

        onMouseMoveInside: function (e) {
            this.insideOffsetX = e.offsetX;
            this.insideOffsetY = e.offsetY;
        },
        onClick: function(message, e){
            // 第1引数でメッセージを渡せるようにした。
            // それに伴い、第2引数で Eventオブジェクト を明示的に渡して貰うようにした。
            console.log(message);
            console.log(e);
        }
    }
});
