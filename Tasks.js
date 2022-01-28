function getPINs(observed) {
    var map = {
        1 : [1,2,4],
        2 : [1,2,3,5],
        3 : [3,2,6],
        4 : [1,4,5,7],
        5 : [2,4,5,6,8],
        6 : [3,5,6,9],
        7 : [4,7,8],
        8 : [5,7,8,9,0],
        9 : [6,8,9],
        0 : [8,0]
    }
    function getNum(arr,index) {
        return arr.map( (item,i)=>{
            return item[index[i].start];
        }).join('');
    }
    function riseNum(index){
        let isUp = false;
        return index.reverse().map( (item,i)=> {
            let start = item.start,max = item.max;
            if(i ===0 ||isUp === true)start++;
            if(start === max){
                isUp = true;
                start = 0;
            }else{
                isUp = false;
            }
            return {start : start,max : max};
        }).reverse();
    }
    var arr = observed.split('').map( item => {
        return map[item];
    });
    var index = arr.map( item=> {
        return {start : 0,max : item.length}
    });
    var max = arr.reduce( (total,item)=> {
        return total * item.length;
    },1);
    var res = [];
    for(let i=0;i<max;i++){
        res.push(getNum(arr,index));
        index = riseNum(index);
    }
    return res;
}