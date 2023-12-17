const wait = time => new Promise(
  (resolve, reject) => {
    if (time > 6000) reject("Sorry i can't wait");
    setTimeout(resolve, time)
  }
);


wait(2000)
.then(() => {
  console.log("Hello");
  return wait(1000);
})
.then(() => {
  console.log("World!")
})


new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
.then(resault => {
  console.log(resault);
  return resault * 2;
})
.then(resault => {
  console.log(resault);
  return resault * 2;
})
.then(resault => {
  console.log(resault);
  return resault * 2;
})