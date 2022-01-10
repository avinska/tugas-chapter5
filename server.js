const os = require('os')
const fs = require('fs')

const myOs = os.cpus()

fs.writeFile ('cpu.json', JSON.stringify(myOs), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
