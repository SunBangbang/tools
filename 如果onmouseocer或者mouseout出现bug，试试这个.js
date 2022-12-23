// ------------------鼠标移上时候的代码
		obj.onmouseover=function(ev) {
		 	var event=window.event||ev;
			var from=event.relatedTarget||event.fromElement;
			while(from){
				if (from==this) {
					return false;//终止函数
				};
				from=from.parentNode;
			}
//-----------------------鼠标移出时候的代码
		obj.onmouseout=function(ev) {
			var event=window.event||ev;
			var to=event.toElement||event.relatedTarget;
			while(to){
				if (to==this) {
					return false;
				};
				to=to.parentNode;
			}
//出现这种情况的原因是冒泡，尤其是在图片上移动的时候会闪，
//onmouseenter和onmouseleave可以解决这种情况，这两个事件不支持冒泡