def front3(s):
  front_end = 3
  if len(s) < front_end:
    front_end = len(s)
  front = s[:front_end]
  return front*3