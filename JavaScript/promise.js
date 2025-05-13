let promise=new Promise((res,rej)=>{
    let arr=[1,2,3,4,5,6,7,8,9];
    let target=4;
    if(arr.includes(target)){
        res(true)
    }else{
        rej(false)
    }
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})