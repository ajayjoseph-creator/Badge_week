/* let promise=new Promise((res,rej)=>{
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
}) */

    // Promise.all()
    /* let p1=Promise.resolve('one');
    let p2=Promise.resolve('two');
    let p3=Promise.resolve('three')

    Promise.all([p1,p2,p3]).then((res,rej)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    }) */

        //promise.any()
    /* let p1=Promise.reject('one');
    let p2=Promise.resolve('two');
    let p3=Promise.resolve('three')

    Promise.any([p1,p2,p3]).then((res,rej)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    }) */

        //promise.race()
        /*  let p1=Promise.resolve('one');
    let p2=Promise.resolve('two');
    let p3=Promise.resolve('three')

    Promise.race([p1,p2,p3]).then((res,rej)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    }) */


        //promise.allsettled()
       /*  let p1=Promise.resolve('one');
    let p2=Promise.resolve('two');
    let p3=Promise.resolve('three')

    Promise.allSettled([p1,p2,p3]).then((res,rej)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    }) */
        