function byclass(as) {//全局获取类名
		var tags=document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].className==as) {
				arr.push(tags[i]);
			};
		};
		return arr;
	};

	function byclass1(p,tc) {//局部获取类名
		var par=document.getElementById(p);
		var tags=par.getElementsByTagName('*');
		// alert(tags.length);
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].className==tc) {
				arr.push(tags[i]);
			};
		};
		return arr;
	};

	function offsetTL(obj) {//获取元素到浏览器的距离
			var l=0;
			var t=0;
			while(obj){
				l+=obj.offsetLeft;
				t+=obj.offsetTop;
				obj=obj.offsetParent;
			}
			return {'left':l,'top':t};
		};

	function fstyle(obj,sty) {//获取非行间样式
		if (obj.currentStyle) {
			return obj.currentStyle[sty];
		}else{
			return getComputedStyle(obj,null)[sty];
		}
	};