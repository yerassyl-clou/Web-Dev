def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
x = int(input())
y = int(input())
b = bool(input())
pos_neg(x,y,b)