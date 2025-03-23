def round_sum(a, b, c):
  def round10(n):
    if (n - n//10) > 5:
      return (n // 10 + 1) * 10
    else:
      return (n // 10) * 10
  return round10(a) + round10(b) + round10(c)
