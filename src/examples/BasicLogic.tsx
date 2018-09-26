const ex = {
    lang: "python",
    code:
`
def calculate_shipping(state):
@B    if not (state != 'AK' and state != 'HI'):
        return 30.0
    return 20.0 
`,
    feedback: "That logic up there is a bit hard to read. Fortunately, it's equivalent to check whether state is in the list ['AK', 'HI']. We think this is a lot easier to read.",
};

export default ex;
