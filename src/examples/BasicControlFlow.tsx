const ex = {
    lang: "python",
    code:
`
def foobaz(n):
@B    result = None
    if n < 0:
        result = "negative"
@B    else:
        if n == 0:
            result = "zero"
@B        else:
            if n < 1000:
                result = "positive"
@B            else:
                result = "super positive"
@B    return result
`,
    feedback: "Two changes would make this code simpler. First, instead of assigning to `result` we should return values immediately. Second, the nested ifs and elses are hard to read - flatten them into a single line of if, elif, elif, else.",
};

export default ex;

