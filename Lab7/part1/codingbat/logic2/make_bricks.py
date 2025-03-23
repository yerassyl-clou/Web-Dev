def make_bricks(small, big, goal):
  o = goal
  o -= 5*min(big,goal/5)
  return o-small <= 0