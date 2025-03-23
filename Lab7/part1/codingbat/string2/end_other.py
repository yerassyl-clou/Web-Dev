def end_other(s,t):
    if(len(s)>len(t)):
        if(t==s[len(s)-len(t):]):return True
        return False
    return s == t[len(t)-len(s):]
s = "dffsa"
print(end_other("fg","asdf"))