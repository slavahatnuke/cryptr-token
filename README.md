# cryptr-token

cryptr-token is a simple aes-256-ctr token module for node.js

```javascript
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
```

### Output

```
input { message: 'hello' }
token tP1hwqUMOsj3dkltHQOxPNFn19bRnosVxRdvmKew-2Rcvf-Z
ouptput { message: 'hello' }
```

