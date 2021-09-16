var listaPecas=[]
var nomePeca= 'Peça teste'
var pesoPeca=300
var podeCadastrar=true

if (pesoPeca<100){
    console.log('Não há possibilidade de cadastrar')
    podeCadastrar=false
}

if (listaPecas>10){
        console.log('Limite de peças atingido')
        podeCadastrar=false
}

if (nomePeca.length<3){
    console.log('Tamanho de letras inferior ao permitido')
    podeCadastrar=false
}

if (podeCadastrar){
        listaPecas.push(nomePeca)
        console.log('Cadastro feito com sucesso')
} else {
    console.log('Houve um problema ao cadastrar a peça')
}

console.log('Listando as peças cadastradas.')
for (var i=0;i<listaPecas.length;i++){
    console.log(listaPecas[i])
}
