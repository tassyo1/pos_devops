// const express = require("express");
// const app = express();
// app.use(express.json());

// app.post('/', (req, res) => {
//     try {
//         let num = parseInt(req.body.numero)
//         const divisores = [];

//         for (let i = 2; i < num; i++) {
//             while (num % i === 0) {
//                 divisores.push[i]
//                 num /= i;
//             }
//         }

//         res.json({ mdc: divisores });
//     } catch (err) {
//         res.status(400).json({ error: err.toString() });
//     }
// });


const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

