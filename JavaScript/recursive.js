function countDown(num){
    if(num <=0){
        console.log('recursive function vilichu')
        return;
    }
    console.log(num)
    countDown(num-1)
}

countDown(5)