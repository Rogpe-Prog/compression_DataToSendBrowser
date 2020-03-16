const express = require('express')
const app = express()
const compression = require('compression')

let largeObject = []
for(let i =0; i < 10000; i++){
    largeObject.push({
        name: 'Alohas',
        address: 'Ruas address',
        anoterField: 'Chips potate'
    })
}

app.use(compression())

app.get('/', (req, res) => {
    res.header('Cache-Control', 'public, max-age= 3600')
    res.send(largeObject)
})


app.listen(3000, () => console.log('running....'))