// async / await ==> EC7

const wait = time => new Promise(
  (resolve, reject) => {
    if (time > 6000) reject("Sorry i can't wait");
    setTimeout(resolve, time)
  }
);

// wait(2000)
// .then(() => {
//   console.log("Hello");
//   return wait(1000);
// })
// .then(() => {
//   console.log("World!")
// })


async function doWork() {
  try {
    await wait(7000);
    console.log("Hello");
    await wait(1000);
    console.log("World!");
  } catch (error) {
    console.log(error);
  }
}

doWork();

console.log("End");