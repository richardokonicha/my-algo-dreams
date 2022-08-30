# write a function to return values in common from two arrays
def common(a,b):
  hashtable = {}
  common = []

  for I in b:
    hashtable[I] = True

  for value in a:
    if value in hashtable:
      common.append(value)

  return common


lista = [2, 1, 3, 5, 8]
listb = [2, 4, 5, 1, 6, 8, 9]

value = common(lista, listb)
print(value)
