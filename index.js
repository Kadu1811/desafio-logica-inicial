let heroName = ['Rhagnar', 'Asmodeus', 'Lokbhrar', 'Loki', 'Raven', 'Draktar', 'Kadu']

let randomName = heroName[Math.floor(Math.random() * heroName.length)];

function heroXP() {
    min = Math.ceil(0);
    max = Math.floor(15000);
    
    var exp =  Math.floor(Math.random() * (max - min + 1)) + min;

    let expNameLevel

    if (exp < 1000) {
        return expNameLevel = "Ferro"
    } else if (exp >= 1001 && exp < 2000) {
        return expNameLevel = "Bronze"
    } else if (exp >= 2001 && exp < 5000) {
        return expNameLevel = "Prata"
    } else if (exp >= 6001 && exp < 7000) {
        return expNameLevel = "Ouro"
    } else if (exp >= 7001 && exp < 8000) {
        return expNameLevel = "Platina"
    } else if (exp >= 8001 && exp < 9000) {
        return expNameLevel = "Ascendente"
    } else if (exp >= 9001 && exp < 10000) {
        return expNameLevel = "Imortal"
    } else if (exp >= 10001) {
        return expNameLevel = "Radiante"
    }

    return expNameLevel
    
}


console.log(`O Héroi de nome ${randomName} está no nível de ${heroXP()}`);
