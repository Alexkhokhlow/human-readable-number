module.exports = function toReadable(number) {

    let num1 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let num2 = ["ten", "eleven", "twelve", "thirteen", 'fourteen',
        "fifteen", "sixteen", "seventeen", 'eighteen',
        "nineteen"
    ]
    let num3 = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    if (number == 0) {
        return "zero"
    } else if (number < 10) {
        return num1[number - 1]
    } else if (number < 20) {
        return num2[(number) % 10]
    } else if (number < 100) {
        let a = Math.floor(number / 10)
        let b = number % 10
        let c = ""
        if (b == 0) {
            return (c + num3[a - 1])
        } else {
            return (c + num3[a - 1] + " " + num1[b - 1])
        }
    } else {
        let c = ""

        let a1 = Math.floor(number / 100)
        number = number - a1 * 100
        let a2 = Math.floor(number / 10)
        if (a2 == 1) {
            return (c + num1[a1 - 1] + " hundred " + num2[(number) % 10])
        }
        let a3 = number % 10

        if (a2 == 0) {
            if (a3 == 0) {
                return (c + num1[a1 - 1] + " hundred")
            } else {
                return (c + num1[a1 - 1] + " hundred " + num1[a3 - 1])
            }
        } else {
            if (a3 == 0) {
                return (c + num1[a1 - 1] + " hundred " + num3[a2 - 1])
            } else {
                return (c + num1[a1 - 1] + " hundred " + num3[a2 - 1] + " " + num1[a3 - 1])
            }
        }
        return 0


    }
}