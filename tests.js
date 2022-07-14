const { ModuleWithRoles, Module } = require("@3rdweb/sdk");

checkDuplicate();
function checkDuplicate(element, index) {
    let arr = ["abc", "xy", "bb", "abc"];
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        // nested loop
        for (let j = 0; j < arr.length; j++) {
            // do not compare same elements
            if (i !== j) {
                // check if elements match
                if (arr[i] === arr[j]) {
                    // duplicate element found
                    sum += 1
                    result = true;
                    // terminate inner loop

                }
            }
        }
        // terminate outer loop
        if (result) {
            continue
        }
    }
    if (result) {
        console.log(sum);
    } else {
        console.log('Array does not contain duplicate elements');
    }
}

function compareTriplets(a, b) {
    // Write your code here
    let alice = 0
    let bob = 0
    for (let i = 0; i < a.length; i++) {
        for (let n = 0; n < b.length; n++) {
            if (i == n) {
                if (a[i] > b[n]) alice += 1
                if (a[i] < b[n]) bob += 1
                if (a[i] === b[n]) break
            }
        }
    }
    console.log(`${alice} ${bob}`)

}
compareTriplets([5, 6, 7, 1, 3, 2, 8], [3, 6, 10, 2, 1, 6, 8])

let string = "word"
let strings = string.split("").reverse()
console.log(strings.join(""))


evenOdd = (num) => {
    if (num % 2 === 0) console.log("Even")
    else console.log("Odd")
}

evenOdd(15)
evenOdd(125)
evenOdd(24)

const isDivisible = (n, x, y) => {
    if (n % x === 0 && n % y === 0) console.log(true)
    else console.log(false)
}

isDivisible(12, 3, 5)
isDivisible(12, 3, 2)

const smallestNumber = (arr) => {
    let smallest = Math.min(...arr)
    console.log(smallest)
}

smallestNumber([9, 2, 3, 4])

const remove = (word) => {
    console.log(word)
    let wordArr = word.split("")
    wordArr.pop() && wordArr.shift()
    console.log(wordArr.join(""))
}
remove("ovusi")

const narc = (num) => {
    let sum = 0
    let numString = num.toString().split("")
    for (let i = 0; i < numString.length; i++) {
        sum += numString[i] ** numString.length
    }
    if (sum === num) console.log(true)
    else console.log(false)
}
const num = 3
console.log(num.toString() ** 3)

narc(1652)

const openOrSenior = (arrs) => {
    let output = []
    for (let arr of arrs) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[0] >= 55 && arr[1] >= 7) output.push("senior")
            else output.push("open")
            break
        }
    }
    console.log(output)
}
openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]])

const mid = (s) => {
    let sArr = s.split("")
    let midChar = sArr.length / 2
    if (sArr.length % 2 == 0) return `${sArr[(sArr.length / 2) - 1]}${sArr[midChar]}`
    else return s.substring(midChar, midChar + 1)
}
console.log(mid("jakpor"))
console.log(mid("ovusi"))

const maskify = (info) => {
    return info.slice(0, -4).replace(/[a-zA-Z]/g, '#').concat(info.slice(-4, info.len));
}
console.log(maskify("jakkk"))

const uniqueInOrder = (arr) => {
    const newArr = []
    if (Array.isArray(arr)) {
        for (a of arr) {
            if (newArr.includes(a)) continue
            else newArr.push(a)
        }
    } else {
        let wr = arr.split("")
        for (let a = 0; a < wr.length; a++) {
            if (newArr.includes(wr[a])) continue
            else newArr.push(wr[a])
        }
    }
    return newArr
}
console.log(uniqueInOrder("AABBCCCcDDDD"))

const text = "HvUsi is_king68887"
const pattern = /[a-z0-9_]/g
console.log(text.match(pattern))
console.log(pattern.test(text))
console.log(`${text.length} ${text.match(pattern).length}`)


const number = function (busStops) {
    // Good Luck!
    let total = 0
    for (arr of busStops) {
        total += (arr[0] - arr[1])
    }
    return total
}

console.log(number([[10, 0], [3, 5], [5, 8]]))

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

console.log(solution("abcd"))
console.log("\n\n")




const regex = /^([\d]{4}[ |-]{1}){4}([\d]{4}){1}$/;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('^([\\d]{4}[ |-]{1}){4}([\\d]{4}){1}$', '')

const str = `5199 3334 3333 3324 3334`;
let m;

if ((m = regex.exec(str)) !== null) {
    // The result can be accessed through the `m`-variable.
    console.log(regex.test(str))
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}



console.log("\n\n")



