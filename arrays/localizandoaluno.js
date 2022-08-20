const alunos = ['Joao','Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10,7,9,6]

//includes -> booleano
//indexOf -> nº do indice

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNotas = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
       let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNotas('Tales'))