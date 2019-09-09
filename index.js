const Cryptr = require('cryptr');
const zlib = require('zlib');
const base64url = require('base64url');

module.exports = (secret) => {
    const cryptr = new Cryptr(secret);

    function encrypt(object = {}) {
        const compressed = zlib.gzipSync(JSON.stringify(object), { level: zlib.constants.Z_BEST_COMPRESSION }).toString('binary');
        const encryptedHex = cryptr.encrypt(compressed);
        const buffer = Buffer.from(encryptedHex, 'hex');
        return base64url(buffer);
    }

    function decrypt(encryptedText) {
        try {
            const decrypted = cryptr.decrypt(base64url.toBuffer(encryptedText).toString('hex'));
            return JSON.parse(zlib.gunzipSync(Buffer.from(decrypted, 'binary')));
        } catch (error) {
            throw new Error('Invalid data');
        }
    }

    return {
        encrypt,
        decrypt
    }
};