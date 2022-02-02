var uniqueInOrder=function(iterable){
    if(iterable.length == 0) return[];
    var stage= [iterable[0]];
    if(typeof iterable === 'string'){
        iterable = iterable.split('');
    }
    iterable.reduce(function(pre,cur){
        if(pre != cur) {
            stage.push(cur)
        }
        return cur;
    });
    return stage
}

function uniqueInOrder (it) {
    var result = []
    var last
    for (var i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            result.push(last = it[i])
        }
    }
    return result
}