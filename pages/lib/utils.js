export function validateString(str) {
    const sampleBannedWords = ['sick', 'bad'] // add more banned words
    return !checkString(str.toLowerCase(), sampleBannedWords)
}

export function checkString(str, keys) {
    return keys.some(key => new RegExp('\\b' + key + '\\b').test(str))
}

export function capitalizeString(str) {
    return str.split(" ").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ')
}