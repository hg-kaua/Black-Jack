# Black-Jack

<img width="1080" alt="Captura de Tela 2023-01-25 às 11 29 25" src="https://user-images.githubusercontent.com/67756528/214591822-5e13b165-d864-485a-9cde-c62f20b98c95.png">

 
> ## Sobre
Blackjack é um jogo de cartas popular em cassinos. O objetivo é obter 21 pontos ou um número maior do que o do revendedor, sem ultrapassar 21. Os jogadores jogam contra o revendedor, e não uns contra os outros. Cada carta tem um valor numérico, com as cartas de figura valendo 10 pontos e o ás valendo 1 ou 11, dependendo da preferência do jogador. O jogador tem a opção de pedir mais cartas (hit) ou parar (stand) a qualquer momento durante sua rodada.

> ## Tecnologias ultilizadas
* JavaScript
* Html
* Css

> ## O que aprendi?
Com esse jogo consegui aprimorar alguns conceitos de CSS e Js. 

> #### CSS
* hover: com o hover pude melhorar a interaçao do cliente com o jogo, usei para deixar um pouquinho mais animado os botoes ao passar o mouse por cima dele.
* transition: funcionando junto com o hover o transition pode controlar o tempo da animaçao (no caso o que acontece quando passa o cursor por cima do botao), além disso pode especificar o que voce quer que seja animado.

> #### JS
* querySelector() e getElementById(): consegui entender bastante sobre essas funcionalidades para pegar classe ou o id dos elementos em Html.
* addEventListener(): com ele pude dar eventos aos botoes, o addEventListener() passa 2 parâmetros, o primeiro ultizei o evento 'click' e o segundo é uma funçao, dentro da função especifiquei o que que eu queria que acontecesse.
* setAttribute(): ele é um metodo onde voce pode atribuir um atributo em um elemento, atravez da sintaxe "elementoTeste.setAtribute()", eu utilizei ele para atribuir o atributo 'disabled' para que em certos momentos os botoes ficassem inativos.
* createElement(): esse foi o que eu mais fiquei animado para usar porque eu queria muito entender como ele funcionava, e ele funciona da seguinte maneira.

  1. ele recebe um parametro que é uma string que simboliza o elemento html que voce esta criando, no casa eu usei o 'button'.
  2. depois de especificar o que esta criando, voce passa o conteudo para ele utilizando o <b>textcontent</b>.
  3. por ultimo voce inseri ele no seu html com o <b>apendChild()</b>.
  
    /*
    const resetBtn = document.createElement('button');
    
    resetBtn.textContent = 'PLAY AGAIN';
    
    document.querySelector('.container').appendChild(resetBtn);
    */
* remove(): depois utilizei a funçao remove para remover o botao play again quando for clicado.
* funçoes: consegui aprender varias conceitos de funçoes.
