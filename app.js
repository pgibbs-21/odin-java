let stringExample = 'fIONa'

function capitalize (string){
let stringSeperate = string.split('')
let firstLetter = stringSeperate[0].toUpperCase()
let allButTheFirstLetter = stringSeperate.slice(1).join('')
let lowerCase = allButTheFirstLetter.toLowerCase()
return firstLetter + lowerCase
}
console.log((capitalize(stringExample)))

let lastLetterString = 'Madison'

function lastLetter (string){
    let stringSeperate = string.split('')
    let lastLetterOfString = stringSeperate[string.length - 1]
    return lastLetterOfString
}

console.log(lastLetter(lastLetterString))