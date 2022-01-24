function longest(s1, s2) {
    let a = [...new Set(s1.split(""))];
    let b = [...new Set(s2.split(""))];
    for (let i=0; i<b.length; i++) {
        a.push(b[i]);
    }
    let init_combo = [...new Set(a)];
    let combo = init_combo.sort().join("");
    return combo;
}