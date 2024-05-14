// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const classe = gets();

// TODO: Implemente os demais casos para a resolução do desafio
switch(classe) {
  case "Guerreiro":
      console.log("Você escolheu a classe Guerreiro!");
      break;
  case "Mago":
      console.log("Você escolheu a classe Mago!");
      break;
  case "Arqueiro":
      console.log("Você escolheu a classe Arqueiro!");
      break;
  default:
      console.log("Classe inválida! Escolha entre Guerreiro, Mago ou Arqueiro.");
      break;
}