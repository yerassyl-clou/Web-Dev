v = int(input())
t = int(input())

res = (v*t - 109) % 109

if (res < 0):
    while(res < 0):
        res += 109
else:
    print(res)