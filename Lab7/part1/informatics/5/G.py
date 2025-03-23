n = int(input())
a = [int(i) for i in input().split()]
max_s = -1000
idx = -1
for i in range(0,n):
    if a[i]>max_s:
        max_s = a[i]
        idx = i

print (max_s, idx)
