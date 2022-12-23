window.onload=function () {
	//JS效果，这样写js效果代表js效果会在页面加载完成之后加载js，
}



document.addEventListener('DOMContentLoaded',function () {
	//js效果，这样写js是在页面中的所有标签加载完成后加载js，ie678不支持
},false);



//例如：img的src标签是储存图片路径的，第一种写法会在src加载完成之后加载js如果网速很慢会影响效果，
//第二种方法在加载完img标签后就加载js，不会等src加载完，即dom节点加载完成后加载js