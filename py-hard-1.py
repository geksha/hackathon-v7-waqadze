def myfunc(word, a):
    newword = ""
    for i in word:
        if i != a:
            newword = newword + i
    return newword

print(myfunc("helllo", "l"))