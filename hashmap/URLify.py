# write a method to replace all spaces in a string with "%20"

def urlify(string):
  newString = ""
  for i in string:
    if i == " ":
      newString += "%20"
    else:
      newString += i
  return newString


# def urlify2(string):
#   for index, i in enumerate(string):
#     if i == " ":
#       string[index] = "%20"
#   return string

print(urlify("Mr John Smith"))