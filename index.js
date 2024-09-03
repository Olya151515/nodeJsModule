const {fooHelper} = require('./helper');
const http = require('node:http');
const path = require('node:path');
const readline = require('node:readline');
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
void foo();