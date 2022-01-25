
function digPow(n, p){
    var digits = n.toString().split('');
    var result = 0;
    for(var i=0; i<digits.length; i++){
        result = result + Math.pow(digits[i], p);
        p++;
    }
    var data = result/n;
    if(result % n === 0){
        return data;
    }else{
        return -1;
    }
}