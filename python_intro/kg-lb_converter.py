weight = float(input("weight " ))
converter = (input("kg or lb? " ))

if converter.find("lb"):
    weight /= 0.45
    print(weight)
elif converter.find("kg"):
    weight *= 0.45
    print(weight)
