	function nexts(obj) {
		if (obj.nextElementSibling) {
			return obj.nextElementSibling;
		}else{
			return obj.nextSibling;
		}
	};
//这里的if只能判断obj.nextElementSibling语句