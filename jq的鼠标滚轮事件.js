$('#wrap').on("mousewheel DOMMouseScroll", function (e) {
var delta =(e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))||  (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));// firefox
 	if (delta > 0) {
		// 向上滚
	} else if (delta < 0) {
		// 向下滚
	}
});