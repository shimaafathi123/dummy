const path = require('path')


console.log (path.sep)


const filePath = path.join('\content', '', 'file.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absoulute = path.resolve(__dirname,'content', 'subContent', 'file.txt' )
console.log(absoulute)