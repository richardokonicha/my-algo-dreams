# runtime of 0(N)
def isUnique(string):
  stringList = ''
  for i in string:
    if i not in stringList:
      stringList = stringList + i
    else:
      return False
  return True

  # runtime of lessthan 0(N)
def isUniqueD(string):
  for i in range(len(string)):
    if string[i] in string[i+1:]:
      return False
    else:
      True
  return True


print(isUniqueD("ff"))
print(isUniqueD("asdfgha"))
print(isUniqueD("goated"))
print("...............")

print(isUnique("ff"))
print(isUnique("asdfgha"))
print(isUnique("goated"))