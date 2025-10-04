Segue o que preciso demonstrar no miro (3 pontos):

1 - Product Backlog: listar funcionalidades do programa no quadro do miro;
2 - Desenvolvimento: desenhar telas / escrever pseudocódigo;
3 - Review: apresentação rápida; 

Agora vou passar as funcionalidades que meu programa terá para que você possa me ajudar como demonstração esse projeto no miro, obedecendo os 3 pontos citados acima:


Funcionalidades: Sistema de Calculadora Álcool X Gasolina

1 - Solicitar ao cliente o preço atual da gasolina;
2 - Solicitar ao cliente o preço atual do álcool;
3 - Fazer o cálculo: (preço atual da gasolina x 0,7);

4 - Comparação de viabilidade (Álcool X Gasolina): se o resultado (preço atual da gasolina x 0,7) for menor ou igual ao preço atual do álcool, temos: 

a) É mais viável abastecer com gasolina.

Se o resultado (preço atual da gasolina x 0,7) for maior ao preço atual do álcool, temos:

b) É mais viável abastecer com álcool.

Exemplo: 
Gasolina: R$ 7,20 por litro
Cálculo: R$ 7,20 x 0,7 = R$ 5,04
Neste exemplo, o valor de R$ 5,04 é o limite para o preço atual do álcool para que ele seja mais vantajoso no abastecimento. Ou seja:
Se o álcool custar menos de R$ 5,04, ele é mais econômico.
Se o álcool custar igual ou mais de R$ 5,04, a gasolina compensa mais.

5 - Devolver ao usuário a informação obtida no passo "4 - Comparação de viabilidade"

6 - Questionar ao usuário se ele deseja saber um pouco mais sobre o consumo do combustível no percurso que irá fazer:

a) se o usuário responder que "NÃO" deseja saber, retornar ao menu inicial; 
b)se o usuário responder que "SIM" deseja saber, ir para os passos seguintes.

7 - Solicitar ao cliente qual a marca do carro dele, segundo a lista a seguir: 

(Marca do carro / capacidade do tanque de combustível) 
a) FIAT – 45 litros (ex: Argo, Mobi, Uno, Cronos)
b) Volkswagen (VW) – 52 litros (ex: Polo, Gol, Voyage)
c) Chevrolet – 50 litros (ex: Onix, Prisma, Spin)
d) Toyota – 55 litros (ex: Corolla, Yaris)
e) Hyundai – 50 litros (ex: HB20, Creta)
f) Renault – 50 litros (ex: Kwid – 38 L, Sandero/Logan – 50 L)
g) Honda – 47 litros (ex: Fit, City, Civic)
h) Nissan – 50 litros (ex: March, Versa, Kicks)
i) Jeep – 60 litros (ex: Renegade, Compass)
j) Peugeot – 47 litros (ex: 208, 2008)
l) Citroën – 47 litros (ex: C3, C4 Cactus)
m) Ford – 52 litros (ex: Ka, EcoSport)
n) Mitsubishi – 63 litros (ex: L200, Outlander)
o) Suzuki – 47 litros (ex: Jimny, Swift)
P) Chery (Caoa Chery) – 50 litros (ex: Tiggo 5x, Arrizo 6)

8) Solicitar qual a distância que será percorrida na viagem que o usuário irá fazer (em quilômetros);

9) Devolver ao usuário a informação:

a) Se a viagem for curta, e o tanque de combustível estiver inicialmente cheio totalmente: quantos litros de combustível o usuário irá consumir, e informar quanto da capacidade do tanque de combustível foi usada. Exemplo: "Serão gastos 25 litros (que é 50% da capacidade do seu tanque de combustível).

b) Se a viagem for longa, e o tanque de combustível estiver inicialmente cheio totalmente: quantos litros de combustível o usuário irá consumir, e quantas vezes será necessário abastecer na viagem.