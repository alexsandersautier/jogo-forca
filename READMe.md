### Esse jogo é uma aplicação simples desenvolvida em JavaScript, que roda diretamente no terminal (Windows, Linux ou VS Code).

### O jogo desafia o jogador a adivinhar o nome de uma fruta, escolhida aleatoriamente.

- A aplicação apresenta uma dica, informando a quantidade de letras do nome da fruta a ser adivinhada. Veja um exemplo:
- Ex.: Adivinhe o nome da fruta com 9 letras:

- A seguir, o nome da fruta é exibido somente com a letra inicial visível, enquanto as outras letras são 'escondidas' com um underline. Veja um exemplo:
- Ex.: Fruta: C________

#### Para começar a adivinhar o nome da fruta, o jogador deve digitar uma letra que faça parte do nome da fruta. Por exemplo:
- Jogo -> Fruta: C________
- Resposta (digitada pelo usuário): a

- Jogo -> Fruta: Ca_a____a

- O jogo permite apenas um jogador por rodada, e as respostas devem ser um único caractere alfabético, que serão inseridas diretamente no terminal.

- Respostas como números ou mais de um caractere serão consideradas 'inválidas'.

- Cada resposta do jogador(a) será verificada. Se a resposta estiver correta, a palavra oculta será atualizada com o caractere digitado e o jogador(a) será convidado a fornecer uma nova resposta.

- Se a resposta do jogador(a) estiver errada, uma mensagem será exibida informando o erro e o número de chances restantes. Além disso, o usuário será convidado a fornecer uma nova resposta.

- O jogador(a) terá quatro chances de erro antes do jogo ser encerrado, exibindo uma mensagem informando a derrota do jogador(a).

- Após digitar as letras corretas e completar o nome da fruta, uma mensagem de encerramento será exibida, informando a vitória do jogador(a).