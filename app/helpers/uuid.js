import crypto from 'crypto'

const generateRandomId = (val1, val2) => {
    const hash = crypto.createHash('sha256');
    hash.update(val1);
    hash.update(val2);
    return hash.digest('hex');
};


export default generateRandomId