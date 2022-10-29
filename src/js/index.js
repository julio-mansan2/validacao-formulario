const inputText = document.querySelectorAll(".input");
const inputSubmit = document.getElementById("input-submit")
const mensagemDeErro = document.querySelectorAll("span")

inputSubmit.addEventListener ('click', () => 
    inputText.forEach(function (input, indice) {
    if (input.value !== "") {            
        input.classList.add("valido")
        input.classList.remove("invalido")
        mensagemDeErro[indice].classList.remove("nao-preenchido")
    } else {
        input.classList.remove("valido")
        input.classList.add('invalido')
        mensagemDeErro[indice].classList.add("nao-preenchido")
    }

})
)
