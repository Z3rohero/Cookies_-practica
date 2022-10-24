import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.get('/setcookie', (req, res) => {
  res.cookie('micokiie', 'xD', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
    //maxAge: 7000,
    //expires: new Date("2022-12-31"),

  })
  res.send('Hello Express app!')
});

app.get('/getcookie', (req, res) => {
  console.log(req.cookies)
  
  res.send('leyendo cookies')
});

app.listen(3000, () => {
  console.log('server started');
});

app.get('/deletecookie', (req, res) => {
  console.log(req.cookies)
  res.clearCookie("micokiie")
  res.send('leyendo cookies')
});

