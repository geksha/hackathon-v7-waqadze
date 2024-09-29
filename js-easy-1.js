let list1 = [ 5, 6, 1, 3, 20]


function minmax(list){
    let max = Math.max(...list)
    let min = Math.min(...list)

    console.log(max - min)
}

minmax(list1)

