def foobaz(n):
    result = None
    if n < 0:
        result = "negative"
    else:
        if n == 0:
            result = "zero"
        else:
            if n < 1000:
                result = "positive"
            else:
                result = "super positive"
    return result

"""Convert to

def foobaz(n):
    if n < 0:
        return "negative"
    elif n == 0:
        return "zero"
    elif n < 1000:
        return "posiitve"
    else:
        return "super positive"
"""
