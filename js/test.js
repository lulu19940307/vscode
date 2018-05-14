

//这里添加一个注释
window.onload = function(){
    var div=document.getElementById("div1");
    div.onclick=function(){
        alert("hello world");
    }

    var btn=document.getElementById("reverse");
    var outputtxt=document.getElementById("output-txt");
    btn.onclick=function(){
       var arr=[];
       outputtxt.value=" ";
       var str=document.getElementById("input-txt");
       var val=str.value;
       //alert(val);
        for(var i=val.length-1;i>=0;i--){
            arr.push(val[i]);
        }
        //alert(arr);
        
        outputtxt.value=arr;
       
    };
    
    
}

