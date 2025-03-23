def not_string(s):
    if len(str) >= 3 and str[:3] == "not":
        return s
    return "not "+s