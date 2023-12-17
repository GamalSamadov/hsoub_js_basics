const msgs = [
  "Hello",
  "Hi",
  "How are you?",
  "I am fine",
]

let index = 0;
while(index < msgs.length){
  console.log(index, msgs[index]);
  index++;
}

for (i = 0; i < msgs.length; i++){
  console.log(i, msgs[i])
}

index = msgs.length - 1;
while(index >= 0){
  console.log(index, msgs[index]);
  index--;
}

for (i = msgs.length - 1; i >= 0; i--){
  console.log(i, msgs[i]);
}