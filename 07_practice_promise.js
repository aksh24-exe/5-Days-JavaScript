// 1. Read the contents of file from hello.txt                const file = fs.ReadFileSync(hello)
// 2. Then create a new file named as backup.txt                fs.createFile(backup)
// 3. Copy the contents of hello file to backup file               fs.writeFile(backup, file)
// 4. delete the hello file                                         fs.delete(hello

//-----------------------Legacy Code-------------------------------------------
const fs = require("fs");

// fs.readFile("./hello.txt", "utf-8", (err, con) => {
//   if (err) {
//     console.log("Error in reading the file");
//   } else {
//     fs.writeFile("./backup.txt", con, (err) => {
//       if (err) {
//         console.log("Error in writing the file");
//       } else {
//         fs.unlink("./hello.txt", (err) => {
//           if (err) {
//             console.log("Error in deleting the file");
//           } else {
//             console.log("File delete success");
//           }
//         });
//       }
//     });
//   }
// });
//------------------------------------------------------------------

// Callback Hell

//----------------------Modern Code---------------------------------------------
// const fsv2 = require("fs/promises");

// fsv2
//   .readFile("./hello.txt", "utf-8")
//   .then((content) => fsv2.writeFile("./backup.txt", content))
//   .then(() => fsv2.unlink("./hello.txt"))
//   .catch((e) => console.log("Error found"));

//--------------------------------------------------------------------

//------------------------Promisification----------------------------------
// Convert legacy code into Modern Code
// Blubird doing same thing converting legacy code into Modern Code

function readFileWithPromise(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, contect) => {
      if (err) reject(err);
      else resolve(contect);
    });
  });
}

function writeFileWithPromise(filePath, contect) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, contect, (err) => {
      if (err) reject(err);
      else resolve(err);
    });
  });
}

function unlinkWithPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// readFileWithPromise("./hello.txt", "utf-8")
//   .then((content) => writeFileWithPromise("./backup.txt", content))
//   .then(() => unlinkWithPromise("./hello.txt"))
//   .catch((e) => console.log("Error hogya ", e))
//   .finally(() => console.log("All DOne"));


function wait(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), seconds * 1000);
    });
  }

  // ------------- Aura +99999999999 ----------- (Syntax Sugar)
async function doTasks() {
    try {
      const fileContent = await readFileWithPromise('./hello.txt', 'utf-8');
      console.log('All DOne');
      await writeFileWithPromise('./backup.txt', fileContent);
      await wait(10);
      await unlinkWithPromise('./hello.txt');
      throw new Error('');
    } catch (e) {
      console.log('Error', e);
    } finally {
      console.log('All DOne');
    }
  }
  console.log('Starting Program');
  
  doTasks().then(() => console.log('All Done'));
  
  console.log('End Of Program');