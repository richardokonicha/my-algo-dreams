

def countWords(sentence):
    count = 0
    for word in sentence:
        if word == "\0":
            count = count + 1


    return count



sentence = "jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj."
sentence1 = "he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?"
print(countWords(sentence))