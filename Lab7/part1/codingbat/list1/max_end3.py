def max_end(a):
    c = []
    if(a[0]>a[2]):
        for i in range(0,3):
            c.append(a[0])
    else:
        for i in range (0,3):
            c.append(a[2])
    return c