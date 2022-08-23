def twoSum(num: list, target: int) -> list:
    nums = num.copy()
    nums.sort()
    a_pointer = 0
    b_pointer = len(nums) - 1
    while a_pointer < b_pointer:
        sum = nums[a_pointer] + nums[b_pointer]
        if sum == target:
            return [num.index(nums[a_pointer]) , num.index(nums[b_pointer])]
        elif sum > target:
            b_pointer = b_pointer - 1
        elif sum < target:
            a_pointer = a_pointer + 1

print(twoSum([3, 2, 4], 6))
