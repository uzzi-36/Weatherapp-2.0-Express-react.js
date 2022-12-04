
console.log("I am server file");

import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/', (reuqest, res) => {

    console.log("request ip:", reuqest.ip);

    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})