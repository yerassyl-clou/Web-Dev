def array_front9(a):
  end = len(a)
  if end > 4:
    end = 4  
  for i in range(end):  
    if a[i] == 9:
      return True
  return False