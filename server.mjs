import express from 'express'
import path from 'path';
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors(cors));

app.get('/abc', (req, res) => {
  console.log("request ip: ", req.ip);
  res.send('Hello World! ');
})

app.get('/weather/', (req, res) => {
  console.log("request ip: ", req.ip);
  // console.log("param", req.params.cityName);

  res.send({
    // city: req.params.cityName,
    temp: 30,
    min: 22,
    max: 35,
    humidity: 72,
    serverTime: new Date().toString()
  });
})


app.get('/time', (req, res) => {
  console.log("request ip: ", req.ip);
  res.send(new Date().toString());
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './weatherapp-ui/build')))
app.use('*', express.static(path.join(__dirname, './weatherapp-ui/build')))

//app.use('/',express.static(path.join(path.resolve(_dirname),'./weatherapp-ui/build')))

// app.get('/', (reuqest, res) => {

// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//app.use('/',express.static(path.join(path.resolve(_dirname),'./weatherapp-ui/build')))

// app.get('/', (reuqest, res) => {

// })
