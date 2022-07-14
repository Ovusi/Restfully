const assert = require("chai").assert

const evenOdd = (num) => {
    if (num % 2 === 0) return"Even"
    else return "Odd"
}

const solution = (str) => {
    const pattern = /(\w){2}/g
    if (str.length == 0) {
        return []
    } else if (str.length % 2 == 1) {
        let newStr = str + "_"
        return newStr.match(pattern)
    } else {
        return str.match(pattern)
    }
}


describe("Ovusi", function () {
    describe("evenOdd(), solution()", function () {
        it("should do whatever", function () {
            assert.deepEqual(evenOdd(4), "Even", "should return even")
        })
        it("should do whatever", () => {
            assert.deepEqual(evenOdd(23), "Odd")
        })
        it("should do whatever", () => {
            assert.deepEqual(solution("abcde"), ["ab", "cd", "e_"])
        })
        it("should do whatever", () => {
            assert.deepEqual(solution("abcd"), ["ab", "cd"])
        })
    })
})





