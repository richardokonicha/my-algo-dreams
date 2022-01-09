var twoSum = function (num, target) {
    var nums = num.slice();
    nums.sort(function (a, b) { return a - b; });
    var a_pointer = 0;
    var b_pointer = nums.length - 1;
    while (a_pointer < b_pointer) {
        var sum = nums[a_pointer] + nums[b_pointer];
        if (sum === target) {
            return [num.indexOf(nums[a_pointer]), num.indexOf(nums[b_pointer])];
        }
        else if (sum > target) {
            b_pointer--;
        }
        else {
            a_pointer++;
        }
    }
};
console.log(twoSum([3, 3], 6));
//# sourceMappingURL=two-sums.js.map