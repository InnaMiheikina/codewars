function isValidWalk(walk) {
    var Es = walk.filter(a => a == 'e')
    var Ws = walk.filter(b => b == 'w')
    var Ns = walk.filter(c => c == 'n')
    var Ss = walk.filter(d => d == 's')

    if (Es.length == Ws.length && Ns.length == Ss.length && walk.length == 10) {
        return true
    } else {
        return false
    }
}