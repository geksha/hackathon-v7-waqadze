function pluss(string){
    let nuli = 0;
    for(let i of string){
        if (i == "+"){
            nuli++
        }
        if (i=="-"){
            nuli--
        }
    }
    return nuli
}

console.log(pluss("+-++-+++-----"))