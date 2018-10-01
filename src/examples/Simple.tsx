const ex = {
  lang: "python",
  code:
`
@Gdef birthday_greeting(year):
@B    print("happy " + str(x) + "th birthday")
`,
  solution:
`def birthday_greeting(year)
    return f"happy {year}th birthday"

print(birthday_greeting(5))
`
};

export default ex;
