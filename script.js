// Crie um array que receba 5 itens e exiba no console.
let dados = ['Renan', 'Larissa', 'Helio', 'Vitoria', 'Leonardo', 'Jordan']
console.log(dados)
// Utilize um método para adicionar um nome ao inicio do array.
dados.unshift('F é a resposta da vida')
console.log(dados)
// Utilize um método para remover o último nome do array.
dados.pop()
console.log(dados)
// Utilize um método para adicionar dois nomes ao fim do array.
dados.splice(5,2,'MEMES','VIDA')
console.log(dados)
// Utilize um método para remover o primeiro nome do array.
dados.shift()
console.log(dados)
// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a, b){
    return(a-b)
})
console.log(numbers.sort())