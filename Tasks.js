function positiveSum(arr) {
    let result = 0;

    arr.forEach( (num) => {
        if (num > 0) {
            result += num;
        }
    })

    return result

}