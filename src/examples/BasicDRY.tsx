const ex = {
    lang: "python",
    code:
`
# convert temperatures from farenheit to celsius

@Btemperature1 = 40.0
@Btemperature2 = 50.0
@N
@Bconverted_temperature1 = (temperature1 - 32) * 5.0/9
@Bprint(temperature1, "degrees farenheit is", converted_temperature1, "degrees Celsius")
@N
@Bconverted_temperature2 = (temperature2 - 32) * 5.0/9
@Bprint(temperature2, "degrees farenheit is", converted_temperature2, "degrees Celsius")
`,
    feedback: "Two changes would make this code simpler. First, we could put the logic for converting from Farenheit to Celsius and printing the result into its own function. Second, we could store temperatures in a list, and use a for loop to call the function on each temperature.",
};

export default ex;
