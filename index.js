const fsPromises = require('node:fs/promises');
const path = require('node:path')
const fs = require('node:fs');


const task = async () =>{
    // await fsPromises.mkdir(path.join(__dirname,'baseFolder'));
    for (let i = 1; i < 6; i++) {
        await fsPromises.mkdir(path.join(__dirname,'baseFolder',`miniFolder${i}`,`test${i}.txt`),{recursive:true})
        console.log(`path to folder miniFolder${i}   `+ path.dirname(path.join(__dirname,'baseFolder',`miniFolder${i}`)));
        let stat1 = await fsPromises.stat(path.join(__dirname,'baseFolder',`miniFolder${i}`));
        console.log('is Directory = '+stat1.isDirectory());
        console.log('is File = '+stat1.isFile());

        console.log(`path to file test${i}  `+ path.dirname(path.join(__dirname,'baseFolder',`miniFolder${i}`,`test${i}.txt`)));
        let stat2 = await fsPromises.stat(path.join(__dirname,'baseFolder',`miniFolder${i}`,`test${i}.txt`));
        console.log('is Directory = '+stat2.isDirectory());
        console.log('is File = '+stat2.isFile());
    }

}

task();