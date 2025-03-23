def parrotTrouble(parrot,hour):
    if(parrot == True and 7 > hour > 20):
        return True
    else:return False
x = bool(input())
hour = int(input())
parrotTrouble(x,hour)