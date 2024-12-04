// Function to write to the output div
function writeToOutput(text) {
  const output = document.getElementById("output");
  output.innerHTML += text + "<br>";
}

// Example usage
// console.log("Welcome to JavaScript Practice!");
// writeToOutput("Welcome to JavaScript Practice!");

// // Example: Basic JavaScript operations
// let number = 42;
// console.log("Working with number:", number);
// writeToOutput(`Working with number: ${number}`);

// You can practice your JavaScript code here!
// Examples:
// - Use console.log() to output to browser console
// - Use writeToOutput() to display on the page
// - Try DOM manipulation
// - Practice functions, loops, conditionals, etc.

// const retry = (promise, retryCount, delay) => {
//   const hello = new Promise((resolve, reject) => {
//     for (let i = 1; i <= retryCount; i++) {
//       setTimeout(() => {
//         console.log("...Retrying Before Promise", i);

//         if (i === retryCount) {
//           reject("Finally Failed Promise");
//           return;
//         }

//         promise
//           .then((value) => {
//             resolve(value);
//             return;
//           })
//           .catch((error) => {
//             reject(error);
//             return;
//           });
//       }, delay * i);
//     }
//   });

//   hello
//     .then((value) => console.log(value, "###Final Then"))
//     .catch((error) => console.log(error, "###Final Catch"));
// };

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Failed Promise"), 5000);
//   console.log("###fiza");
// });

// retry(p1, 3, 1000);

async function retry(asyncFn, retries = 3, delay = 50, finalError = "Failed") {
  return new Promise(async (resolve, reject) => {
    for (let i = 1; i <= retries; i++) {
      console.log("Retrying ....", i);

      try {
        const response = await asyncFn();

        resolve(response);
        return;
      } catch {
        console.log("Failing");

        if (i === retries) {
          reject({ message: finalError });
        }

        await new Promise((resolve, reject) => {
          setTimeout(resolve, delay);
        });
      }
    }
  });
}

const exampleAsyncFn = async () => {
  const values = [0, 1];
  const random = Math.floor(Math.random() * values.length);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random === 0) {
        reject("Failed");
        return;
      } else {
        resolve("Success");
        return;
      }
    }, 2000);
  });
};

retry(exampleAsyncFn, 3, 3000, "All retries failed")
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
