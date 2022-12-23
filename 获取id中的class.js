function byclass1 (id1,clname) {
	var tags1=document.getElementById(id1);
	var tags2=tags1.getElementsByTagName('*');
	var cl1=[];
	for (var i = 0; i < tag2s.length; i++) {
		if (tag2s[i].className==clname) {
			cl1.push(tag2[i]);
		};
	};
	return cl1;
}
