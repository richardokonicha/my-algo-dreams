const twoSum = (num: Array<number>, target: number) => {
    let nums = num.slice()
    nums.sort(function (a, b) { return a - b });
    let a_pointer = 0;
    let b_pointer = nums.length - 1;
    while (a_pointer < b_pointer) {
        let sum = nums[a_pointer] + nums[b_pointer];
        if (sum === target) {
            return [num.indexOf(nums[a_pointer]), num.indexOf(nums[b_pointer])];
        } else if (sum > target) {
            b_pointer--;
        } else {
            a_pointer++;
        }
    }
}

console.log(twoSum([3, 3], 6))