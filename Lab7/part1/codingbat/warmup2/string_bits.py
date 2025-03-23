def string_bits(s):
  r=""
  for i in range(len(s)):
    if i % 2 == 0:
      r = r + s[i]
  return r