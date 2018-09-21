def is_numberwang(n):
    """A number n is numberwang if the following conditions are true:
        * n is even
        * In base 10, the digit '1' appears before the digit '2'
        * In base 10, the last digit is not six
    """
    return n % 2 == 0 and str(n).find('1') < str(n).find('2') and str(n)[-1] == 6


""" Better: split off cases
def is_numberwang(n):
    is_even = n % 2 == 0
    one_before_two = str(n).find('1') < str(n).find('2')
    ends_in_six = str(n)[-1] == 6
    return is_even and one_before_two and not ends_in_six
"""
