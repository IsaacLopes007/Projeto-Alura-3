deixe campoldade:

deixe campoFantasia:

deixe campoAventura;

configuração de função () {

criarCanvas (800 400);

createElement("h2", "Recomendador de

filmes" );

createSpan ("Sua idade:");

campo Idade createInput ("5");

campoFantasia fantasia?"); createCheckbox ("Gosta de

campoAventura createCheckbox ("Gosta de aventura?");

função draw () (

fundo (branco");

let idade campoIdade valor ();

deixe gostaDeFantasia verificado (); campofantasia.

deixe gostaDeAventura. verificado (); campoAventura

let recomendação geraRecomendacao ( idade, gostaDeFantasia, gostaDeAventura);

preencher (cor (76, 8, 115)); textAlign (CENTRO, CENTRO);

tamanho do texto (38);

texto (recomendação, largura 2,

altura / 2);

}

function geraRecomendacao (idade gostalefantasia, gostaDeAventura) (

se (idade 10) [

return "O menino que descobriu o vento"

se (idade 14) (

) outro (

se (idade > 12) { if (gostaDeFantasia ||

gostaDeAventura) ( return "Homem aranha: no

aranhaverso

";

) outro (

return "Ladrões de bicicleta":

} outro (

se (gostaDeFantasia) (

retornar "As aventuras de pi"; )outro (

retornar "Depois da chuva":

) } outro (

se (gostaDeFantasia) {

retornar "A viagem de chihiro";

) outro {

return "O feitiço do tempo";
