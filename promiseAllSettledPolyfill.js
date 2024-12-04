const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("2 rejected"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000);
});

const promiseAllSettledPolyfill = (promises) => {
  const results = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      try {
        const response = await promise;
        results[index] = { status: "fulfilled", value: response };

        if (count === promises.length - 1) {
          resolve(results);
        }

        count++;
      } catch (err) {
        results[index] = { status: "rejected", reason: err };
        count++;
      }
    });
  });
};

const runPolyfill = () => {
  promiseAllSettledPolyfill([p2, p1, p3])
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.error(err);
    });
};

runPolyfill();
