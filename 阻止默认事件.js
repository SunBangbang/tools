function (ev) {
	var event=window.event||ev;
	if (event.preventDefanlt) {
		event.preventDefanlt();
	} else{
		event.returnValue=false;
	};
}