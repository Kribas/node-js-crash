// import fs from 'fs'
import fs from "fs/promises";

// fs.readFile('./test.txt', 'utf-8', (err,data) => {
//     if(err) throw err
//     console.log(data)
// })

// //Read file for synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8')
// console.log(data)

//Read file Promise.then()
fs.readFile("./test.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//readFile() aysnc/await
const readFile = async () => {
    try {
      const data = await fs.readFile('./test.txt', "utf-8")
      console.log(data)
    } catch (error) {
        console.log(error)        
    }
   
}
//Write File async await
const writeFile = async () => {
    try {
        const data = await fs.writeFile('./test.txt', 'Hello I am writing to this file')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Append File async await
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is an appended text')
        console.log('Text file appended...')
    } catch (error) {   
        console.log(error)
    }
}
 
writeFile()
appendFile()
readFile()
