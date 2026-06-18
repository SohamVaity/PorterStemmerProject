

def porter_stemmer(word):
    '''main function for stemming.'''
    word = word.lower()
    word = step_1a(word)
    word = step_1b(word)
    word = step_1c(word)
    word = step_2(word)
    word = step_3(word)
    word = step_4(word)
    word = step_5a(word)
    word = step_5b(word)

    return word

def measure(word):
    '''gives the measure (sequence of vowel, then consonant) count of a word'''
    vowels = "aeiou"
    count = 0
    for i in range(len(word) - 1):
        if (word[i] in vowels) and (word[i+1] not in vowels):
            count += 1
        elif word[i] == "y":
             if i == 0:
                 count += 1
             elif word[i-1] not in vowels:
                 count += 1
    return count

def vowels(word):
    vowel = "aeiou"
    count = 0
    for i in range(len(word)):
        if word[i] in "aeiou":
            count += 1
        elif (i > 0) and (word[i - 1] not in vowel) and (word[i] == "y"):
            count += 1
    return count

def cvc(word):
    '''this function returns true if the given word ends with a consonant, a vowel, and a consonant in that sequence'''
    if vowels(word[-3:-1]) and (not vowels(word[-3])) and (not vowels(word[-1])):
        return
    return False

def step_1a(word):
    if(word[-4:] == "sses"):
        word = word[:-2]
    elif(word[-3:] == "ies"):
        word = word[:-2]

    if(word[-2:] == "ss"):
        print(word)
        return word
    elif(word[-1] == "s"):
        word = word[:-1]
    print(word)
    return word

def step_1b(word):
    vowel = vowels(word)
    rules_2_or_3 = False

    if measure(word) and (word[-3:] == "eed"):
        word = word[:-1]

    if vowel and (word[-2:] == "ed"):
        word = word[:-2]
        rules_2_or_3 = True

    if vowel and (word[-3:] == "ing"):
        word = word[:-3]
        rules_2_or_3 = True

    if rules_2_or_3:
        if (word[-2:] == "at") or (word[-2:] == "bl") or (word[-2:] == "iz"):
            word = word + "e"
        elif (word[-1] == word[-2]) and (word[-1] not in "lsz"):
                word = word[:-1]

    if (measure(word) == 1) and cvc(word):
        word = word + "e"

    return word

def step_1c(word):
    if vowels(word) and (word[-1] == "i"):
        word[-1] = y
    return word

def step_2(word):
    if measure(word) > 1:
        if (word[-4:] == "ational"):
            word = word[:-4]
            word = word + "ate"

            print(word)

        elif word[-6:] == "tional":
            word = word[:-6]
            word = word + "tion"

        if (word[-4:] == "enci"):
            word[-4:] = "ence"

        elif word[-4:] == "anci":
            word = word[:-4]
            word = word + "ance"

        elif word[-4:] == "izer":
            word = word[:-4]
            word = word + "ize"

        elif word[-4:] == "abli":
            word = word[:-4]
            word = word + "able"

        elif word[-4:] == "alli":
            word = word[:-4]
            word = word + "al"

        elif word[-5:] == "entli":
            word = word[:-5]
            word = word + "ent"

        elif word[-3:] == "eli":
            word = word[:-3]
            word = word + "e"

        elif word[-5:] == "ousli":
            word = word[:-5]
            word = word + "ous"

        elif word[-7:] == "ization":
            word = word[:-7]
            word = word + "ize"

        elif word[-5:] == "ation":
            word = word[:-5]
            word = word + "ate"

        elif word[-4:] == "ator":
            word = word[:-4]
            word = word + "ate"

        elif word[-5:] == "alism":
            word = word[:-5]
            word = word + "al"

        elif word[-6:] == "iveness":
            word = word[:-6]
            word = word + "ive"

        elif word[-6:] == "fulness":
            word = word[:-6]
            word = word + "ful"

        elif word[-6:] == "ousness":
            word = word[:-6]
            word = word + "ous"

        elif word[-5:] == "aliti":
            word = word[:-5]
            word = word + "al"

        elif word[-5:] == "iviti":
            word = word[:-5]
            word = word + "ive"

        elif word[-6:] == "biliti":
            word = word[:-6]
            word = word + "ble"
    return word

def step_3(word):
    print(word)
    if measure(word):
        if word[-5:] == "icate":
            word = word[:-2]
        elif word[-5:] == "ative":
            word = word[:-5]
        elif word[-5:] == "alize":
            word = word[:-2]
        elif word[-5:] == "iciti":
            word = word[:-2]
        elif word[-4:] == "ical":
            word = word[:-2]
        elif word[-3:] == "ful":
            word = word[:-3]
        elif word[-4:] == "ness":
            word = word[:-4]
    return word
def step_4(word):
    print(word)
    if measure(word) > 1:
        if word[-5:] == "ement":
            word = word[:-5]

        elif word[-4:] == "ance":
            word = word[:-4]

        elif word[-4:] == "ence":
            word = word[:-4]

        elif word[-4:] == "able":
            word = word[:-4]

        elif word[-4:] == "ible":
            word = word[:-4]

        elif word[-4:] == "ment":
            word = word[:-4]

        elif word[-3:] == "ant":
            word = word[:-3]

        elif word[-3:] == "ent":
            word = word[:-3]

        elif word[-3:] == "ism":
            word = word[:-3]

        elif word[-3:] == "ate":
            word = word[:-3]

        elif word[-3:] == "iti":
            word = word[:-3]

        elif word[-3:] == "ous":
            word = word[:-3]

        elif word[-3:] == "ive":
            word = word[:-3]

        elif word[-3:] == "ize":
            word = word[:-3]

        elif word[-2:] == "al":
            word = word[:-2]

        elif word[-2:] == "er":
            word = word[:-2]

        elif word[-2:] == "ic":
            word = word[:-2]

        elif word[-2:] == "ou":
            word = word[:-2]
    return word

def step_5a(word):
    if(measure(word) > 1) and (word[-1] == "e"):
        word = word[:-1]

    if(measure(word) == 1) and (not cvc(word)) and (word[-1] == "e"):
        word = word[:-1]

    return word

def step_5b(word):
    if(measure(word) > 1) and (word[-1] == word[-2]) and (word[-1] == "l"):
        word = word[:-1]
    return word
