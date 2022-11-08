const crypto = require('crypto');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');
    hash.update(inputs.join(' '));
    // hash.update(inputs.sort().join(''));

    return hash.digest('hex');
}

// result = cryptoHash("Hello", "World");
// console.log(result);

module.exports = cryptoHash;