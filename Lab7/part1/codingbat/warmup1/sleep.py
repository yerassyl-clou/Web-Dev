def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False
  
x = bool(input())
y = bool(input())
print(sleep_in(x,y))