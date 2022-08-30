def findPairs(array, k):
  newList = []
  hashtable = dict()
  for i in array:
    hashtable[i] = True
  for c in array:
    x = c + k
    if x in hashtable:
      newList.append((c, x))
  return newList

array1 = [ 1, 7, 5, 9, 2, 12, 3 ]
k1 = 2

chance1 = findPairs(array1, k1)
print(chance1)