function cakes(recipe, available) {
    var n=[];
    for( key in recipe){
        if (key in available){
            var num=Math.floor(available[key]/recipe[key]);
            n.push(num);
        }
        else{ return 0;}
    }
    return parseInt(n.sort((x,y)=>x-y).slice(0,1));
}