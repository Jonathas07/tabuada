function tabuada(){
    let txtnumero = document.getElementById('numero')
    let n = Number(txtnumero.value)
    let res = document.getElementById('res')

    if(txtnumero.value.length==0||n<0){
        alert('[ERRO] digite um numero maior ou igual a 0!')
    }else

    res.innerHTML = ''
    
    for(let c=1; c<=10 ;c++){
        let item = document.createElement('option')
        let r = c*n
        item.text = `${c}x${n}=${r}`
        res.appendChild(item)
    }
}