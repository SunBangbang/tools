function fstyle (obj,sty) {
	if (obj.currentStyle) {
		return obj.currentStyle[sty];//ie的
	} else {
		return getComputedStyle(obj.null)[sty];
	}
}
//var a=getComputedStyle(obj.':after').sty;获取元素伪类的方法
//fstyle(标签名,'获取的参数')//执行函数的时候必须这么写，参数要加引号