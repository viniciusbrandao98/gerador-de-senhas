const btn = document.querySelector(".btn")
console.log(btn)
const inputEl = document.getElementById("input");
const copiaEl = document.querySelector(".fa-copy");
const senhaSalva = document.querySelector(".alerta-container")

btn.addEventListener("click", () => {
    criarsenha()
});

copiaEl.addEventListener("click", () => {
    copySenha();
    senhaSalva.classList.add("active");
    setTimeout(() => {
        senhaSalva.classList.remove("active");
    }, 2000);
})

function criarsenha() {
    const caracteres = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const tamanhoSenha = 14;
    let senha = ""
    for (let index = 0; index < tamanhoSenha; index++) {
        const numAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.substring(numAleatorio, numAleatorio + 1);
        console.log(numAleatorio, senha);
    }
    inputEl.value = senha
};

function copySenha() {
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
    senhaSalva.innerText = inputEl.value + "  copiada"
}