const msgs = [
  "Hello",
  "Hi",
  "How are you?",
  "I am fine",
]

// for (i = 0; i < msgs.length; i++){
//   console.log(i, msgs[i])
// }

// for arrays and objects
for(let index in msgs){
  console.log(index, msgs[index]);
}

// for-of only for arrays
for (let item of msgs){
  console.log(item)
}