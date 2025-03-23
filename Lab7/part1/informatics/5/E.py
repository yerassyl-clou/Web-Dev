n = int(input())
a = [int(i) for i in input().split()]

for i in range(n - 1):
    if a[i] * a[i + 1] > 0:
        print(a[i], a[i + 1])
        break
