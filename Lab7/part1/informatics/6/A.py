def min_four(a: int, b: int, c: int, d: int) -> int:
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())

print(min_four(a, b, c, d))