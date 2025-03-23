def centered(a):
    min = 100000
    max = 0
    sum = 0
    for i in a:
        if i > max:max = i
        if i < min: min = i
        sum+=i
    return (sum-min-max)/(len(a)-2)

    