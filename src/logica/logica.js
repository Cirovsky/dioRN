function novaPalavra (){
    array = []
    for(let i = 0; i < 8; i++){
        array.push(parseInt(Math.random()*9+1))
    } 
    return array
}

console.log(novaPalavra())