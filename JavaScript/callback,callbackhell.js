function greet(name){
    console.log("hello "+ name)
}

function dream(callback){
  let username = 'ajay'
  callback(username)
}

dream(greet)