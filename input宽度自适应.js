//获取文本宽度
    var textWidth = function(text){ 
        var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'}); 
        $('body').append(sensor); 
        var width = sensor.width();
        sensor.remove(); 
        return width;
    };
 

// 有了上面这个函数，input标签根据输入字符动态自适应宽度的实现就简单了：
 

//input宽度自适应
    $("input").on('keyup', function(){
        $(this).width(textWidth($(this).val()));
    });