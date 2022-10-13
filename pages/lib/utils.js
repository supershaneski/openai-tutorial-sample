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