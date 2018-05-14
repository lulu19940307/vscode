var arr=[];
//这里添加一个注释
window.onload = function(){
    var div=document.getElementById("div1");
        div.onclick=function(){
        alert("hello world");
    }
    var btn=document.getElementById("reverse");
    btn.onclick=function (){
       var str=document.getElementById("input-txt");
       var val=str.value;
        //alert(val.length);
        //alert(str_test.length);
        
        for(var i=val.length-1;i>=0;i--){
            arr.push(val[i]);
        }
        alert(arr.length);
        var outputtxt=document.getElementById("output-txt");
        outputtxt.value=arr;
       
    };
    
}
