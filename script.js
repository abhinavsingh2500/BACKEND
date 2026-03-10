var arr=[1,2,3,4,5];
arr.forEach(function(val){
    console.log(val + "Hello");
});
 var newarr=arr.filter(function(val){ 
    if(val%2==0){
        return true;
    }
    return false;
 })
    console.log(newarr);

    var newarr2=arr.map(function(val){
        return val*2;
    });