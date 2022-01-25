
function deleteNth(arr,n){
    var count = 0;
    for(let i= arr.length; i > 0; i--){
        for(let j=0; j < arr.length; j++){
            if (arr[i] == arr[j]){
                count += 1
            }
        }
        if(count > n){
            arr.splice(i,1);
            i = arr.length;
        }
        count = 0;
    }
    return arr;
}
