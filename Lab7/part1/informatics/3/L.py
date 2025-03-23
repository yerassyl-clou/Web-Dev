binary = input()
decimal = 0

for i in range(len(binary)):
    digit = int(binary[i])
    decimal += digit * (2 ** (len(binary) - i - 1))

print(decimal)
