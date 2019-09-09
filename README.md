# cryptr-token

cryptr is a simple aes-256-ctr token module for node.js

```javascript
        const Cipher = require('cryptr-token')
        const {encrypt, decrypt} = Cipher('secret1')

        const input = {message: 'hello1'}

        const encrypted = encrypt(input)
        const ouptput = decrypt(encrypted)

        console.log('input', input)
        console.log('encrypted', encrypted)
        console.log('ouptput', ouptput)
        
        assert.deepEqual(input, ouptput)
```

### Output

```
input { message: 'hello1' }
encrypted ddKtb4jjaqoWcXFwWYNxBFgM4mAeKrWoWyjyxfS-W-9O85Vm9oIinHb1SUXhiHGMJc5XxVeTEl0Xl1HCxMlbMyNi58U
ouptput { message: 'hello1' }
```

