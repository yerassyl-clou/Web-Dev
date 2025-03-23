def array123(a):
  for i in range(len(a)-2):
    if a[i]==1 and a[i+1]==2 and a[i+2]==3:
      return True
  return False