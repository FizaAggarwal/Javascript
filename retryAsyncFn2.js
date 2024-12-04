// Do the same question without using promises

async function retry(asyncFn, retries, delay, finalError) {
  for (let i = 1; i <= retries; i++) {
    console.log("Retrying ....", i);

    try {
      const response = await asyncFn();
      return response;
    } catch {
      console.log("Failing");

      if (i === retries) {
        throw new Error(finalError);
      }

      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }
  }
}

const exampleAsyncFn = async () => {
  const values = [0, 1];
  const randomIndex = Math.floor(Math.random() * values.length);
  const random = values[randomIndex];

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  if (random === 0) {
    throw new Error("Random number is 0");
  } else {
    return "Success";
  }
};

retry(exampleAsyncFn, 3, 3000, "All retries failed")
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
