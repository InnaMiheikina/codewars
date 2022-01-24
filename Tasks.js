function isTriangle(a,b,c){
    if((Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) ||
        (Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) ||
        (Math.pow(c, 2) + Math.pow(a, 2) ===Math.pow(b, 2))) {
        return true;
    } else {
        return false;
    }
}