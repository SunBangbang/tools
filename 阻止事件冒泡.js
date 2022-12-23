//阻止事件冒泡
function (ev) {
	event=window.event||ev;
	if (event.stopPropagation) {
		event.stopPropagation()//非ie阻止事件冒泡的方法
	}else{
		event.cancelBubble=true;//ie阻止事件冒泡的方法
	}
}