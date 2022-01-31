var spiralize = function(size) {

    // insert code here
    let dir=[
        {
            x:0, y:1},
        {
            x:1, y:0},
        {
            x:0, y:-1},
        {
            x:-1,y:0},
    ];
    let dir_times = 0;
    let res = [];
    for(let i=0;i<size;i++){

        res.push([]);
        for(let j=0;j<size;j++)
            res[i].push(0);
    }
    let pos = {
        x:0,y:0};
    let next,dnext,cur_dir;
    let flag = 0;
    while(true){


        if(flag ==2)break;
        res[pos.x][pos.y] = 1;
        cur_dir = dir[dir_times%4];
        next = {
            x:pos.x+cur_dir.x ,y:pos.y+cur_dir.y};
        if(!(next.x >=0 && next.x < size && next.y >=0 && next.y < size)){

            dir_times++;
            flag++;
            continue;
        }
        dnext =  {
            x:next.x + cur_dir.x ,y:next.y+cur_dir.y};
        if(dnext.x >=0 && dnext.x < size && dnext.y >=0 && dnext.y < size && res[dnext.x][dnext.y] == 1){


            dir_times++;
            flag++;
            continue;
        }

        dnext =  {
            x:next.x + dir[(dir_times+1)%4].x ,y:next.y + dir[(dir_times+1)%4].y};
        if(res[dnext.x][dnext.y] == 1){


            break;
        }
        pos = next;
        flag = 0;
    }
    return res;
}

let a = 3;
