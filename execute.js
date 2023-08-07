import express from 'express'
import { exec } from 'child_process';
import fileUpload from 'express-fileupload';
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.EXECUTE_PORT;

app.use(fileUpload());

app.post('/execute', (req, res) => {
  const cppCode = req.files.file.data;
  fs.writeFileSync('test.cpp', cppCode)
  exec(`g++ -o test test.cpp`, (error, stdout, stderr) => {
    if (error) {
      res.send(`${stderr}`);
    } else {
      exec('./test', (error, stdout, stderr) => {
        if(error) {
          res.send(`${stderr}`)
        } else {
          res.send(`${stdout}`);
        }
      })
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})