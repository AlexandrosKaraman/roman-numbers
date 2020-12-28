function convertRomanNumbers(s) {
    const chars = s.split("")
    const nums = chars.map((char, i) => {
        const next = chars[i + 1]
        if (char == "M") {
            return 1000
        }
        else if (char == "D") {
            return 500
        }
        else if (char == "C") {
            if (next == "D" || next == "M") {
                return -100
            } else {
                return 100
            }
        }
        else if (char == "L") {
            return 50
        }
        else if (char == "X") {
            if (next == "L" || next == "C") {
                return -10
            } else {
                return 10
            }
        } else if (char == "V") {
            return 5

        } else if (char == "I") {
            if (next == "V" || next == "X") {
                return -1
            } else {
                return 1
            }
        }
    })
    const sum = nums.reduce((sum, num) => sum + num)
    return sum
}



