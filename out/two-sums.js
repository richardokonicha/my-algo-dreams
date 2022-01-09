// sorted
var twoSum = function (num, target) {
    var a_pointer = 0;
    var b_pointer = num.length - 1;
    while (a_pointer < b_pointer) {
        var sum = num[a_pointer] + num[b_pointer];
        if (sum === target) {
            return [a_pointer, b_pointer];
        }
        else if (sum > target) {
            b_pointer--;
        }
        else {
            a_pointer++;
        }
    }
};
twoSum([2, 7, 11, 15], 9);
//# sourceMappingURL=two-sums.js.map