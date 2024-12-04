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
  const randomIndex = Math.floor(Math.random() * values.length);
  const random = values[randomIndex];

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
