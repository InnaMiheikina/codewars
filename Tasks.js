function dblLinear(n) {
    let u = [1], x = 0, y = 0
    for (let i = 0; i < n; i++) {
        let nextX = 2 * u[x] + 1, nextY = 3 * u[y] + 1
        if (nextX <= nextY) {
            u.push(nextX)
            x++
            if (nextX == nextY)
                y++
        } else {
            u.push(nextY)
            y++
        }
    }
    return u[n]
}

console.log(dblLinear(10) + " = " + 22)
console.log(dblLinear(20) + " = " + 57)
console.log(dblLinear(30) + " = " + 91)
console.log(dblLinear(50) + " = " + 175)
console.log(dblLinear(100) + " = " + 447)
