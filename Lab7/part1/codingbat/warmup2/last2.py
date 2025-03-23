def last2(s):
  if len(s) < 2:
    return 0
  last2 = s[len(s)-2:]
  cnt = 0
  for i in range(len(s)-2):
    sub = s[i:i+2]
    if sub == last2:
      cnt = cnt + 1
  return cnt