
const findMissing = (input) => {
    let mod = input.length % 2
    let len = input.length / 2

    if (mod == 1) { len - 1 }
    let right_side = input.slice(0, len)
    let left_side = input.slice(len)

    return result

}

console.log(findMissing([3, 7, 1, 2, 8, 4, 5]))