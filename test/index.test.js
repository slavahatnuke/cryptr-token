const Cipher = require('..')

const assert = require('assert')

describe('cryptr-token', function () {

    it('test', function () {
        const {encrypt, decrypt} = Cipher('secret1')

        const input = {message: 'hello1'}

        const encrypted = encrypt(input);
        const ouptput = decrypt(encrypted)

        console.log('input', input);
        console.log('encrypted', encrypted);
        console.log('ouptput', ouptput);
        
        assert.deepEqual(input, ouptput)
    })
})