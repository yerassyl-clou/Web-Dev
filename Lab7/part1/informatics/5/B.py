n = int(input())
a = [int(i) for i in input().split()]
for i in a:
    if not i % 2:
        print(i, end=' ')