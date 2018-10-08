window.onload=function(){
      $("#jia").click(function(){
        var num = $(".input1").val();
        num++;
        $(".input1").val(num);
    })
    
    $("#jian").click(function(){
        var num = $(".input1").val();
        num--;
        if(num<1){
            num=1
        }
        $(".input1").val(num);
    })
    $("#jia").click(function(){
    var vm = $(".input1").val();
        var nu=336
        nu*=vm;
        $(".input2").val(nu);
    
    $("#jian").click(function(){
        var vm = $(".input1").val();
        var nu=336
        nu*=vm;
        $(".input2").val(nu);

    })
})
$('#box2').click(function(){
    $('.input2').val('968')
    $("#jia").click(function(){
    var vm = $(".input1").val();
        var nu1=968
        nu1*=vm;
        $(".input2").val(nu1);
    })

    $("#jian").click(function(){
        var vm = $(".input1").val();
        var nu1=968
        nu1*=vm;
        $(".input2").val(nu1);

    })
    
})

$('#box3').click(function(){
    $('.input2').val('1680')
     $("#jia").click(function(){
    var vm = $(".input1").val();
        var nu2=1680
        nu2*=vm;
        $(".input2").val(nu2);
    })

    $("#jian").click(function(){
        var vm = $(".input1").val();
        var nu2=1680
        nu2*=vm;
        $(".input2").val(nu2);

    })
})
}