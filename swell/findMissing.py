
def find_missing(input):
 #TODO: Write - Your - Code
  max = 0
  min = 1
  sumof = 0
  diff = 1
  input_len = len(input)
  for i in input:
      sumof = sumof + i
      if max < i:
          max = i
  smax = ((input_len + 1)/2) * (2*min + (input_len * diff))
  result = smax - sumof
  return result

print(find_missing([3,7,1,2,8,5,9,10,6]))