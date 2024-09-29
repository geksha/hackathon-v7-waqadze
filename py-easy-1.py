def max_num(x, y, k):
    if x > y and x > k:
        return x
    elif y > x and y > k:
        return y
    elif k > y and k > x:
        return k
print(max_num(1, 6, 4))