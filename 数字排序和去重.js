//数组排序和去掉重复数字
	function sortNum(a,b){//从小到大排序，b-a是从大到小排序
                 return a-b;
    } 
    arr1=arr1.sort(sortNum);//给数组进行排序


    Array.from(new Set(arr))//es6数组去重;
    

    Array.prototype.unique1 = function(){//给数组添加一个方法
        var n = []; //一个新的临时数组
        for(var i = 0; i < this.length; i++){ //遍历当前数组
            //如果当前数组的第i已经保存进了临时数组，那么跳过，
            //否则把当前项push到临时数组里面
            if (n.indexOf(this[i]) == -1){
                n.push(this[i])
            };
        }
        return n;
    }