def count_hi(s):
    cnt = 0
    for i in range(len(s))-1:
        if(s[i]+s[i+1]=="hi"):
            cnt+=1
    return cnt

