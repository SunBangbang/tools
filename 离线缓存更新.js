window.onload=function() {
	window.applicationCache.update();
	window.applicationCache.addEventListener("updateready",function() {

		window.applicationCache.swapCache();
		alert("更新完成");
		if (confirm("有更新内容，是否重新加载页面")) {
			window.location.reload();//重新加载页面
		};

	},false)

	window.applicationCache.addEventListener("progress",function() {
		alert(window.applicationCache.status);
	},false)
};