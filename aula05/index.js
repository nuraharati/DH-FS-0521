let pets = [
    {
        nome: 'Fred',
        nomeDono: 'Nura',
        idade: 10,
        tipo: 'cachorro',
        raca: 'lhasa apso',
        peso: 8,
        genero: 'macho',
        cor: 'branco',
        vacinado: true
    },
    {
        nome: 'Regina',
        nomeDono: 'Ilai',
        idade: 1,
        tipo: 'gato',
        raca: 'SRD',
        peso: 2,
        genero: 'femea',
        cor: 'branco e marrom',
        vacinado: true
    },
    {
        nome: 'Mike',
        nomeDono: 'Sumaia',
        idade: 4,
        tipo: 'cachorro',
        raca: 'lhasa apso',
        peso: 12,
        genero: 'macho',
        cor: 'branco',
        vacinado: true
    },
    {
        nome: 'Sadan',
        nomeDono: 'Hussen',
        idade: 7,
        tipo: 'cachorro',
        raca: 'rottweiler',
        peso: 30,
        genero: 'macho',
        cor: 'preto',
        vacinado: true
    }
]

const listarPets = () => 
{
    for(let i=0; i < pets.length; i++){
        console.log('Nome: '+ pets[i].nome)
    } 
}




let novoPet = {
    nome: 'Buddy',
    nomeDono: 'Amany',
    idade: 12,
    tipo: 'cachorro',
    raca: 'shitzu',
    peso: 15,
    genero: 'macho',
    cor: 'preto',
    vacinado: true
}

//cadastrarPet(pets, novoPet)

//listarPets();

function validaDados(objetoPet) {
    return (
        objetoPet.nome && 
        objetoPet.nomeDono && 
        objetoPet.idade && 
        objetoPet.tipo && 
        objetoPet.raca && 
        objetoPet.peso && 
        objetoPet.genero && 
        objetoPet.cor && 
        objetoPet.vacinado
        )
}

function cadastrarPet(arrayPets, objetoPet){
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
        arrayPets.push(objetoPet)
        console.log(pets)
      } else {
        console.log('O objeto não tem todas as propriedades necessárias informadas')
      }
    } else {
      console.log('Insira um objeto válido')
    }
  }
  

cadastrarPet(pets, novoPet)