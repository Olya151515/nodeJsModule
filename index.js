const fs = require('node:fs/promises');
const path = require('node:path')


const task = async () =>{
    const pathToMainDir = path.join(__dirname,'baseFolder')
    await fs.mkdir(pathToMainDir,{recursive:true});

    const folderNames = ['folder1','folder2','folder3','folder4','folder5'];
    const fileNames = ['file1.txt','file2.txt','file3.txt','file4.txt','file5.txt'];

    await Promise.all(folderNames.map(async (folder) =>{
        const folderPath = path.join(pathToMainDir,folder);
        await fs.mkdir(folderPath,{recursive:true});

        await Promise.all(fileNames.map(async (file) =>{
            const filePath = path.join(folderPath,file);
            await fs.writeFile(filePath,"Hello world");
        }))
    }))


    const data = await fs.readdir(pathToMainDir);
    for (const folder of data) {
        const folderPath = path.join(pathToMainDir,folder);
        const stat = await fs.stat(folderPath);
        console.log(`Folder ${folder} is directory : ${stat.isDirectory()}`);
        console.log(`Folder ${folder} is file : ${stat.isFile()}`);

        const files = await fs.readdir(folderPath);
        for (const file of files) {
            const filePath = path.join(folderPath,file);
            const  stat = await fs.stat(filePath);
            console.log(`File ${file} is directory :${stat.isDirectory()}`);
            console.log(`File ${file} is file :${stat.isFile()}`);
        }
    }
}

task();