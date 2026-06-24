let NomeDoHeroi = "Homem-Aranha";   
let XpDoHeroi = 400; 
let nivelDoHeroi = "";  

if (XpDoHeroi < 1000) {
    nivelDoHeroi = "ferro";
} else if (XpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (XpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (XpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (XpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (XpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (XpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("O herói " + NomeDoHeroi + " está no nível " + nivelDoHeroi + " com " + XpDoHeroi + " de XP!");