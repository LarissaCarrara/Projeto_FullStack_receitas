const tbody = document.querySelector("tbody");

const body = document.querySelector("body");


function listar() {
    fetch(`http://localhost:3000/receitas`)
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            if (data != undefined) {
                console.log(data);
                data.forEach(element => {

                    const tr = document.createElement("tr");
                    const pnome = document.createElement("td");
                    pnome.innerHTML = element.nome;
                    const pingredientes = document.createElement("td");
                    pingredientes.innerHTML = element.ingredientes;
                    const pmodo = document.createElement("td");
                    pmodo.innerHTML = element.modofazer;
                    const prendimento = document.createElement("td");
                    prendimento.innerHTML = element.rendimento;
                    const botaodelete = document.createElement("button");
                    botaodelete.src = "/icone_lixeira.svg";
                    botaodelete.className = "botaodelete";

                    tr.appendChild(pnome);
                    tr.appendChild(pingredientes);
                    tr.appendChild(pmodo);
                    tr.appendChild(prendimento);
                    tr.appendChild(botaodelete);
                    tbody.appendChild(tr);



                    botaodelete.addEventListener("click", () => {
                        tr.remove();
                    
                        fetch(`http://localhost:3000/remove/${element.id}`)
                            .then(resp => {
                                return resp.json();
                            })
                            .then(data => {
                                console.log("apagado");
                            })
                    });




                });




            }
        })
}


function sair() {
    localStorage.removeItem("receita");
    window.location.href = "./index.html";
}

