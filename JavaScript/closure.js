function outer(){
    let name='ajay';
    function inner(){
        console.log('hello ',name)
    }
    return inner;
}

let greet=outer();
greet()