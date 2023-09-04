type Usuario = {

    anoQueNasceu: number
}

function calculaIdadeDoUsuario(usuario: Usuario){

    return 2023 - usuario.anoQueNasceu;
}

console.log(calculaIdadeDoUsuario({anoQueNasceu: 1994}));

