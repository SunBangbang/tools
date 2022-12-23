//求数组的最大值
var arr=[1,2,3,4,5,6,7,8,9]
function () {
	var max=arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (max<arr[i]) {
			max=arr[i];
		};
	};
	return max;
}