def catdog(s):
    cat =0
    dog = 0
    for i in range(len(s)-2):
        if s[i:i+3]=="dog":dog+=1
        elif s[i:i+3]=="cat":cat+=1
    return cat == dog