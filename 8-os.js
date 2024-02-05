const os = require('os')
const currOS = {


    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem()
}

console.log (currOS)