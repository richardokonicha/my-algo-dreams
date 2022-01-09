def twoSum(num: list, target: int) -> list:
    a_pointer = 0
    b_pointer = len(num) - 1
    while a_pointer < b_pointer:
        sum = num[a_pointer] + num[b_pointer]
        if sum == target:
            # print (num[a_pointer], num[b_pointer])
            return num[a_pointer], num[b_pointer]
        elif sum > target:
            b_pointer = b_pointer - 1
        elif sum < target:
            a_pointer = a_pointer + 1


twoSum([2, 2, 3, 7, 11, 15], 9)
