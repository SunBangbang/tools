var str=window.navigator.userAgent.toLowerCase();
if (str.indexOf(firefox)!=-1) {//判断是不是火狐浏览器
	obj.addEventListener('DOMMousescroll',function () {
		//滑轮动的时候执行的代码，-3为前滚，3为后滚
		//可以用'event.detail'大于0或者小于0判断前后滚动
	},false)
} else{//非火狐浏览器
	obj.onmousewheel=function () {
		//滑轮动的时候执行的代码，120为前滚，-120为后滚
		//可以用'event.wheelDelta'大于0或者小于0判断前后滚动
	}
};

