def calculate_shipping(state):
    if not (state != 'AK' and state != 'HI'):
        return 30.0
    return 20.0 

""" Refactor: De Morgan's laws,
def calculate_shipping(country, state):
    if state in ['AK', 'HI']
        return 30.0
    return 20.0
"""

