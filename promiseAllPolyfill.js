//For loop waits for all promises to resolve before moving to next iteration but forEach doesn't

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved Promise 1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved Promise 2");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved Promise 3");
  }, 3000);
});

const promiseAll = async (promises) => {
  const results = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      try {
        const response = await promise;
        results[index] = response;

        if (count === promises.length - 1) {
          resolve(results);
        }

        count++;
      } catch (error) {
        reject(error);
      }
    });
  });
};

const runPolyfill = async () => {
  try {
    const result = await promiseAll([p1, p3, p2]);
    console.log(result, "##final result");
  } catch (error) {
    console.log(error, "###final error");
  }
};

runPolyfill();
