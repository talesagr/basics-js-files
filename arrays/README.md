# AlurabackendJS
O que são arrays

Ao contrário de uma variável, um array (ou lista) pode armazenar diversos valores. Pode ser usada, por exemplo, para agrupar diversos dados que tem relação entre si.

Um array pode ser definido como:
Uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, e cada elemento se localiza numa posição na lista chamada de índice.

    Uma lista ordenada de valores enumerados:
Quando falamos de valores, nos referimos a dados de algum tipo: string, number, boolean, ou outros dados reconhecidos pelo JavaScript.
Quando falamos de lista ordenada, nos referimos a uma ordem enumerada, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista.

    Cada valor é chamado de elemento:
Cada elemento corresponde a um dado, separado por vírgula.

    Cada elemento está localizado em uma posição na lista, chamado de índice:
Chamamos de índice o número que identifica a posição de um valor em um array (em inglês chamasse index).
OBS: A contagem dos indices não começa no numero 1, e sim no numero 0.

A propriedade length:
Essa propriedade especifica o tamanho de um array, mostra o número de elementos.

    
Métodos de array
Um método é uma função que serve como uma propriedade do array ou de um objeto. Ele pode realizar tarefas pré-definidas usando os dados do array e dos parametros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Alguns métodos:
concat()
Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
filter()
Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
find()
Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
findIndex()
Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
indexOf()
Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna -1.
lastIndexOf()
Funciona da mesma forma que o indexOf(), porém retorna o índice referente à última ocorrência de um valor em um array, varrendo o array de trás para frente.
forEach()
Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
pop()
Retira o último elemento do array.
Altera o array original removendo o elemento.
shift()
Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
push()
Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.
unshift()
Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.
reduce()
Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
reduceRight()
Funciona igual o reduce() porém começa do final do array e segue até o início.
reverse()
Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
slice()
Copia uma parte do array para outro array.
sort()
Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
splice()
Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original


03. Laços de repetição

Podemos usar o forEach para acessar todos os elementos em um array, o único parâmetro obrigatório que temos que fornecer é uma função que recebe um elemento.
<Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente>


04. Métodos Callback


map() vs foreach()
Ambos os métodos recebem uma função callback e ela, por sua vez, pode realizar qualquer conjunto de operações, sejam matemáticas, com alguma tomada de decisão e assim por diante
Ambos os métodos aceitam apenas uma função como parâmetro, e passam o elemento, o índice e o array atual como parâmetros disponíveis para a função informada
Os métodos não tem limites mínimos para o tamanho dos arrays, podendo ser executados inclusive em arrays que não tenham nenhum elemento, também conhecidos como arrays vazios, []. Porém, nesse caso não será realizada nenhuma iteração

map(): 
O método map pode retornar um array se a função informada tiver um return em seu escopo

forEach:
Não existe retorno


Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos.

Para utilizarmos o método map() não precisamos passar uma arrowfunction, pois o map itera e percorre todos os itens da array, então se quisermos, por exemplo, multiplicar os numeros de um array por 10, podemos fazer uma function que realize essa multiplicacao e então passar ela para o map

por exemplo

const arrayDeInts = [1,2,3,4,5,6]

function multiplicaPorDez(num) {
return num*10 
}

arrayDeInts.map(multiplicaPorDez)

Perceba, que não precisamos nem passar parametro


05. Mais métodos de array


filter() 
O filter precisa que nós retornemos booleanos, ou seja, true, false, verdadeiro ou falso. Se for verdadeiro o elemento que vamos trabalhar, ele vai ser incluído nessa lista que estamos montando. Se for falso vai ser descartado

Tudo que vai dentro dos parênteses são parâmetros, o filter é um método que exige, que pede que o primeiro parâmetro seja uma função, aquilo que chamamos de função call-back

O método filter pode receber outro parâmetro que não é obrigatório, que é o parâmetro de índice, ou seja, toda vez que filter iterar no array, ou seja, fizer o loop pelo array (de nomes), podemos trabalhar tanto com a informação do elemento, que seria o aluno, quanto com a informação do indice, indice 0, indice 1, índice 2, etc.


Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.


EXEMPLO 1
const notas = [10, 6.5, 8 ,7.5]
let media = 0

for (let i = 0; i < notas.length; i++) {
  media += notas[i]/notas.length;
}

console.log(media)


EXEMPLO2
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

No primeiro for, criamos uma let i e vamos executar o bloco de codigo enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for sera executado 3 vezes, com i=0, i=1, i=2.
O segundo for tem uma nova variavel, a let j, ja que nao podemos usar uma nova let i porque ela ja esta definida, e vamos executa-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parametro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um numero que podemos usar na nossa conta
Entao ficamos com o seguinte codigo:

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

console.log(media)

No entando!!!
Este codigo retorna uma media de 24. Coo tal media é possivel se nao temos nenhum numero maior que 10?

O que acontece é que para conseguir a media entre todos os arrays, temos que somar as medias dos arrayus de notas 8+7+9 e dividir pela quatidade de arrays em notasgerais.

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)


Com isso usamos o for para passar por todos os elementos da matriz, e nesse caso, calcular a media dos valores deles.




