def paliindromePermutation(string):
  dictionary = {}
  newList = []
  bList = []

  for i in string:
    if i not in newList:
      newList.append(i)
    else:
      bList.append(i)
  for j in newList.copy()[::-1]:
    if j in bList:
      newList.append(j)

  return newList


palin1 = paliindromePermutation("tact coa")
print(palin1)
