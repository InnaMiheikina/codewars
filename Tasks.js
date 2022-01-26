function score(dice) {
    // Fill me in!
    let arr = [0, 0, 0, 0, 0, 0]
    dice.forEach((item) => {
        arr[item - 1] = arr[item - 1] + 1
    })
    const all = arr.reduce((total, item, index) => {
        if (index === 0) {
            const i = item%3
            const j = (item - item%3)/3
            return total + 100*i + 1000*j
        }
        if (index === 4 && item < 3) {
            return total + item * 50
        }
        if (item < 3) {
            return total
        }
        return total + (index+1) * 100
    }, 0)
    return all
}