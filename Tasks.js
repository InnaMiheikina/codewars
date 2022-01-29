var recoverSecret = function(triplets) {
    let dedupTriplet = [];
    triplets.forEach(triplet => dedupTriplet = [...triplet, ...dedupTriplet]);
    dedupTriplet = Array.from(new Set(dedupTriplet));

    checkPosition(triplets, dedupTriplet);
    return dedupTriplet.join('');
}

function checkPosition(triplets, dedupTriplet) {
    let flag = false;
    let i = 1;
    for (let tri of triplets) {
        if (changePosition(dedupTriplet, tri[1], tri[2]) || changePosition(dedupTriplet, tri[0], tri[1])) {
            flag = true;
        }

        if (flag && (i >= triplets.length)) {
            checkPosition(triplets, dedupTriplet);
        }

        i += 1;
    }
}

function changePosition(arr, a, b) {
    let aIndex = arr.indexOf(a);
    let bIndex = arr.indexOf(b);
    if (aIndex > bIndex) {
        arr.splice(aIndex, 1, b);
        arr.splice(bIndex, 1, a);
        return true;
    }
}