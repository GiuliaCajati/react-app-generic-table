import React from 'react'

const Wow = () =>{
    const funFunction = () => {

    }
    // Given a directory of directories and other files, return an array of arrays which contains file paths of files with similar content.
// const fs = require("fs")
// const { promisify } = require('util')
// const readFile = promisify(fs.readFile)

// const isDirectoryHelper = (path) => {
//   try {
//     return fs.lstatSync(path).isDirectory()
//   } catch(e) {
//     return false
//   } 
// } 

// const returnFirstWord = async (fileName) => {
//   const content = await readFile(fileName, 'utf8')
//   return content.split(' ')[0]
// }

// const  findDuplicatePath = async (filePaths) => {
//   //let filePathMap = {} 
  
//   // 2. Call helper function 
//   const _findDuplicatePath = async (singlePath) => {
    
//     // 3. Check if singlePath is a file 
//     if (!isDirectoryHelper(singlePath)) {
//       // 4. If singlePath is a file save the first word & path
//       console.log(">>> Path " + singlePath + " is a File")
//       let firstWord = await returnFirstWord(singlePath)
//       console.log(">>> First Word " + firstWord )
//       // if (filePathMap[firstWord] === undefined) {
//       //   filePathMap[firstWord] = [singlePath]
//       // } else {
//       //   filePathMap[firstWord].push(singlePath)
//       // }
//       // console.log(">>> filePathMap")
//       // console.log(filePathMap)
//       return 0
//       //return firstWord
//     }
    
//     // 3. If singlePath is directory 
//     await fs.readdir(singlePath, async (err, directoryChildren) => {
//       // 4. Iterating each child of the directory 
//       for (let child of directoryChildren) {
//         relativePath = singlePath + "/" + child
//         await _findDuplicatePath(relativePath)
//       }
//     }) 
//   }

//   // 1. Iterate through list of paths 
//   for(let paths of filePaths) {
//     await _findDuplicatePath(paths) 
//   }

//   //return [...Object.values(filePathMap).filter(path => path.length > 1)]
// }

// findDuplicatePath([ 'test/root'])

return(
    <div>
       <butto OnClick = {funFunction()}/>
    </div>
)
}

export default Wow