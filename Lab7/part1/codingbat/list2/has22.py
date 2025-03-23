def has22(a):
    for i in range(1,len(a)):
        if a[i-1]==2 and a[i]==2: return True
    return False