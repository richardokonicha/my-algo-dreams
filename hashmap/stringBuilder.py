def joinWords1(words):
  sentence = ""
  for i in words:
    sentence = sentence + i
  return sentence


def joinWords2(words):
  sentence = StringBuilder()

newSentence1 = joinWords1("euphemism")
print(newSentence1)