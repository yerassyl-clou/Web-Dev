a = list()

n = int(input())

for i in range(n):
    inp = input()

    res = inp.split() 
    
    res[1] = int(res[1])
    res[2] = int(res[2])

    if (res[0] == 'insert'):
        a.insert(res[1], res[2])
    elif (res[0] == 'print'):
        print(a)
    elif (res[0] == 'remove'):
        a.remove(res[1])
    elif (res[0] == 'append'):
        a.append(res[1])
    elif (res[0] == 'sort'):
        a.sort()
    elif (res[0] == 'pop'):
        a.pop()
    else:
        a.reverse()