const DEF_PREFIX = "openai"

export function validString(str) {
    const bannedWords = ["aaa", "xxx", "sss"] // edit this
    return !bannedWords.some(item => str.toLowerCase().indexOf(item) >= 0)
}

export function capitalizeString(str) {
    return str.split(" ").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ')
}

export function removeNumberBullet(str) {

    const validate = (s, n, m) => {
        if(isNaN(s[n])) {
            return s
        } else {
            if(s[n + 1] === '.') {
                return s.slice(n + 2).trim()
            } else {
                if(n < m) {
                    return validate(s, n + 1, m)
                } else {
                    return s
                }
            }
        }
    }

    return validate(str, 0, 1)
}

export function saveLocalStorage(key, data, prefix = DEF_PREFIX) {

    const saveData = JSON.stringify(data)
    
    localStorage.setItem(`${prefix}-${key}`, saveData)

}

export function loadLocalStorage(key, prefix = DEF_PREFIX) {

    return localStorage.getItem(`${prefix}-${key}`)

}

export function clearLocalStorage(key, prefix = DEF_PREFIX) {

    localStorage.removeItem(`${prefix}-${key}`)

}