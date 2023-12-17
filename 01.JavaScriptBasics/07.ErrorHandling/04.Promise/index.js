const wait = time => new Promise(
  (resolve, reject) => {
    if (time > 6000) reject("Sorry i can't wait");
    setTimeout(resolve, time)
  }
);

wait(7000)
.then(() => console.log("Hello"))
.catch(err => console.log(err))


