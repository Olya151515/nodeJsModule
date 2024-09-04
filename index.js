const {fooHelper} = require('./helper');
const http = require('node:http');
const path = require('node:path');
const os = require('os');
const readline = require('node:readline');
const fs = require('fs');
const foo = async () =>{
    //http
    // const server = http.createServer((req, res) => {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({
    //         data: 'Hello World!'
    //     }));
    // });
    // server.listen(3000);

    //path
    // console.log(path.dirname(__filename));
    // console.log(path.parse(__filename));

    //Readline

    // const rlInstance = readline.createInterface({
    //     input:process.stdin,
    //     output:process.stdout
    // });
    //
    // rlInstance.question('Name?')
}
// void foo();

//PATH
// const fullPathName = path.join(__dirname,'test','helper.js');
// console.log(fullPathName);


//OS
// console.log(os.arch());
// console.log(os.cpus());


//FS

fs.readFile(path.join(__dirname,'text.txt'),{encoding:"utf-8"},(err, data) =>{
    if(err) throw new Error();
    console.log(data);
});

fs.writeFile(path.join(__dirname,'text2.txt'),'Hello from Okten',(err) =>{
    if(err) throw new Error();
})
