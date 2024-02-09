const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional"
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado numérico",
        "Uma estrutura de controle de fluxo",
        "Uma coleção de elementos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é hoisting em JavaScript?",
      respostas: [
        "Elevar um elemento na página",
        "Mover declarações para o topo do escopo",
        "Animar elementos com CSS"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do operador ternário em JavaScript?",
      respostas: [
        "Comparar dois valores",
        "Atribuir um valor com base em uma condição",
        "Realizar uma operação matemática"
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  // modelar o doc p/ js, pesquisa
  
  const corretas = new Set()
  // criar estrutura de dados ou tipo de objeto específico
  // Set => guarda uma info sem repeti-lá
  
  const totalDePerguntas = perguntas.length
  // responde o total de itens, somatório de todos
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    // puxar template => conteúdo => clonar o nó (tag, filho)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true) 
      // dentro do dl procura o dt
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      // pesquisa o índice de um item específico
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
      // só irá rodar quando houver mudança no input, arrowfunction
        const estaCorreta = event.target.value == item.correta  // o == compara sem considerar o tipo
        
        corretas.delete(item)  // se mudar a resposta, deleta o acerto
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem) // adiciona um filho
      
  }