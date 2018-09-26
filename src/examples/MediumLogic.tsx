const ex = {
    lang: "python",
    code:
`
@Gdef is_numberwang(n):
@G    """A number n is numberwang if the following conditions are true:
        * n is even
        * In base 10, the digit '1' appears before the digit '2'
        * In base 10, the last digit is not six
    """
@B    return n % 2 == 0 and str(n).find('1') < str(n).find('2') and not str(n)[-1] == 6
`,
    feedback: "This is hard to read. We recommend splitting into multiple named subexpressions, then combining them at the end with something like 'return is_even and one_before_two and not ends_in_six'.",
};

export default ex;
