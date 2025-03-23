def bigdiff(a):
    min = 100000
    max = 0
    for i in a:
        if i > max:max = i
        if i < min : min = i
    return max - min