// sorted

const twoSum = (num: Array<number>, target: number) => {
    let a_pointer = 0;
    let b_pointer = num.length - 1;
    while (a_pointer < b_pointer) {
        let sum = num[a_pointer] + num[b_pointer];
        if (sum === target) {
            return [a_pointer, b_pointer];
        } else if (sum > target) {
            b_pointer--;
        } else {
            a_pointer++;
        }
    }
}

twoSum([2, 7, 11, 15], 9);  