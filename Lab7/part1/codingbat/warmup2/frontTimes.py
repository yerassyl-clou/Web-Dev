def frontTimes(s,x):
    if 3 > len(s):
        return s*x
    else:
        return s[:3]*x

print(frontTimes("asdff", 4))