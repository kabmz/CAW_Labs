

function exf(s, n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += s + '\n';
    }
    return result.trim(); 
}

module.exports = exf;

