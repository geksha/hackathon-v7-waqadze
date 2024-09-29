function fact(n){
    let a = 1;
    for(let i=2; i < n+1; i++ ){
        a = a*i;
        

    }
    return a
}

console.log(fact(5));