function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem elemento
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do artista</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();


    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //para cada dado dentro da lista de dados

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes compoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações - Wikipédia</a>
        <br>
        <a href=${dado.link2} target="_blank">ou - Instagram</a>
    </div>
`
    }
        
    
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados    
}

//Posso fazer um comentário
//console.log(dados);