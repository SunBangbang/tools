function bubble (obj,ev,fn) {
	if (obj.addEventListener) {
		return obj.addEventListener(ev,fn,false);
	} else{
		return obj.attachEvent('on'+ev,fn);
	};
}