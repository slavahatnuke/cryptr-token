const Cryptr = require('cryptr');
const base64url = require('base64url');

function defaultStrinfigy(object = {}) {
    return JSON.stringify(object);
}

function defaultDestringify(decrypted) {
    return JSON.parse(decrypted);
}

function defaultSign(text, secret) {
    return text;
}

function defaultVerify(text, secret) {
    return text;
}

function TokenCryptr(
    // required
    secret,

    // options
    {
        stringify: stringifyOptions = [defaultStrinfigy, defaultDestringify],
        sign: signOptions = [defaultSign, defaultVerify]
    } = {}
) {

    const [strinfigy, destringify] = stringifyOptions;
    const [sign, verify] = signOptions;

    const cryptr = new Cryptr(secret);

    function encrypt(object) {
        const stringified = strinfigy(object);
        const encryptedHex = cryptr.encrypt(stringified);
        const buffer = Buffer.from(encryptedHex, 'hex');
        return sign(base64url(buffer), secret);
    }

    function decrypt(encryptedText) {
        try {
            const verified = verify(encryptedText, secret);
            const decrypted = cryptr.decrypt(base64url.toBuffer(verified).toString('hex'));
            return destringify(decrypted);
        } catch (error) {
            throw new Error('INVALID_TOKEN');
        }
    }

    return {
        encrypt,
        decrypt
    }
};

module.exports = TokenCryptr;
