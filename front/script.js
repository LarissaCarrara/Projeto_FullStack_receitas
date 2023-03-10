const form = document.querySelector("#form");
const impnome = document.querySelector("#nome");
const impingre = document.querySelector("#ingredientes");
const impmodo = document.querySelector("#modofazer");
const imppor = document.querySelector("#rendimento");




function cadastrar() {
    alert("sucesso");

    let dados =
    {
        "nome": impnome.value,
        "ingredientes": impingre.value,
        "modofazer": impmodo.value,
        "rendimento": imppor.value
    }

    fetch(`http://localhost:3000/novareceita`, {
        "method": "POST",
        "headers": {
            'Content-type': 'application/json'  //falando q eu conteúdo é um json     
        },
        body: JSON.stringify(dados)
    })
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            if (data.affectedRows == 1) {
                window.location.reload();

            }
        })

    //localStorage.setItem("receita", JSON.stringify(dados));

    //abrir aula 08 fe
}

function proxpagina() {

    window.location.href = "./receita.html";
   
    //listar as receitas
}
