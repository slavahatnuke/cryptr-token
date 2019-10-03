const Cipher = require('..')

const assert = require('assert')

describe('cryptr-token', function () {

    it('test', function () {
        const secret = 'secret$$$$here'
        const {encrypt} = Cipher(secret)
        const {decrypt} = Cipher(secret)

        const input = {message: 'hello'}

        const token = encrypt(input);

        console.log('input', input);
        console.log('token', token);

        const ouptput = decrypt(token)
        console.log('ouptput', ouptput);
        
        assert.deepEqual(input, ouptput)
    })
})