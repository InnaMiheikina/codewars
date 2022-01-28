function nbYear(p0, percent, aug, p) {

    var i = 0;
    while (true) {
        if (p0 >= p) {return i;}
        p0 = p0 * (1 + percent/100) + aug; i++;
    }
}
nbYear(1000, 2, 50, 1200