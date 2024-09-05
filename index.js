const {fooHelper} = require('./helper');
const http = require('node:http');
const path = require('node:path');
const os = require('os');
const readline = require('node:readline/promises');
const fsPromises = require('node:fs/promises');
const fs = require('fs');
const EventEmitter = require('node:events');
const foo = async () =>{
    //HTTP
    // const server = http.createServer((req, res) => {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({
    //         data: 'Hello World!'
    //     }));
    // });
    // server.listen(3000);

    //PATH
    // console.log(path.dirname(__filename));
    // console.log(path.parse(__filename));

    //READLINE
    // const rlInstance = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })
    // const name = await rlInstance.question('Name?');
    // console.log(`Your name is ${name}`)
    // process.exit(0)

    //FS
    // const pathToFile1 =path.join(__dirname,'text.txt');
    // const pathToFile2 =path.join(__dirname,'text2.txt');
    // const data = await fsPromises.readFile(pathToFile1,{encoding:"utf-8"});
    // console.log(data);

    // await fsPromises.writeFile(pathToFile2,'Hello from Okten',(err) =>{
    //     if(err) throw new Error();
    // });
    //
    //
    // await fsPromises.appendFile(pathToFile1,' Added some new data ');
    //
    // await fsPromises.mkdir(path.join(__dirname,'new-folder'));
    // await fsPromises.mkdir(path.join(__dirname,'new-folder'),{recursive:true});
    //await fsPromises.mkdir(path.join(__dirname,'new-folder','another-folder'),{recursive:true});
    //await fsPromises.rm(path.join(__dirname,'new-folder'),{recursive:true});
    // await  fsPromises.unlink(pathToFile1)
    // await  fsPromises.rename(path.join(__dirname,'text.txt'),path.join(__dirname,'newName.txt'));

    // const  stat = await fsPromises.stat(path.join(__dirname,'newName.txt'));
    // console.log(stat);

    //STREAM
    // const readStream = fs.createReadStream(path.join(__dirname,'fileWithData.txt'));
    // const writeStream = fs.createWriteStream(path.join(__dirname,'new-big-file.txt'));
    //
    // readStream.on('data',(chunk) =>{
    //     console.log('chunk', chunk.length);
    //     writeStream.write(chunk);
    // });

    //EVENTS

    // const emitter = new EventEmitter();
    //
    // emitter.once('event',() =>{
    //     console.log('Event  1  happened');
    // });
    // emitter.on('event',() =>{
    //     console.log('Event  2 happened');
    // });
    // emitter.emit('event');
    // emitter.emit('event');
    // emitter.emit('event');
    // emitter.emit('event');


    //OS
    // console.log(os.homedir());
    // console.log(os.freemem()/1024/1024/1024,'gb');
    // console.log(os.totalmem());
    // console.log(os.platform());
    // console.log(os.userInfo());
}
void foo();



