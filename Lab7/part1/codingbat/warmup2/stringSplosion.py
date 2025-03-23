def string_splosion(s):
  t = ""
  for i in range(len(s)):
    t = t + s[:i+1]
  return t