// trouxe o array do arquivo moduloDados.js usando o import

import usuarios from "./moduloDados.js"

const btnEntrar = document.getElementById('btnEntrar')
const alertaLogin = new bootstrap.Modal('#alertaLogin')

btnEntrar.addEventListener('click', () => {
    const inputLoguin = document.getElementById('login').value
    const inputSenha = document.getElementById('senha').value

     let usuarioValido

     for(let usuario of usuarios){
     if (usuario.nomeUsuario == inputLoguin) {
        usuarioValido = usuario
        break
     }
    }
     if (inputSenha == usuarioValido.senha){
        window.location.pathname = '/app.html'
     }else {
        alertaLogin.show()
     }
})
