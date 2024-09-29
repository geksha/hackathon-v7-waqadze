function matrica(arr){
    newarr = []
    for(let i of arr){
        for (let u of i){
            var summ = 0
            summ = summ + u;
        }
        newarr.push(summ)
    }
    let big = newarr[0]
    for(let a of newarr){
        

        
        if(newarr[a] > big){
            big = newarr[a]
        }
        
    }
    return big
}

console.log(matrica([[1,4,2],[5,3,9],[4,9,2],[6,7,8]]));