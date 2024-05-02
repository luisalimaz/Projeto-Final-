document.addEventListener("DOMContentLoaded", function (){
    const projetos = [
     {
        titulo: "Psicologia Organizacional",
        descricao: "Nas aulas de Psicologia Organizacional, entendi mais sobre comportamento humano, aprender a se comunicar e relações interpessoais e dinâmicas de grupo no ambiente de trabalho",
        imagem: "https://media.licdn.com/dms/image/D4D12AQFv3cbLiJL-6Q/article-cover_image-shrink_720_1280/0/1678231273775?e=2147483647&v=beta&t=4qyGS1N5ZoSZL9ZsFprEom_lgg7WdY16p-IPr5DYhOM",
    },

    {
        titulo: "Análise de Sistemas",
        descricao: "Nas aulas de Analise de sistema consegui adquirir certas habilidades para projetar e desenvolver sistemas de informação eficientes. Aprendi requisitos do software, criar os diagramas e modelos de banco de dados.",
        imagem: "https://unifacig.edu.br/wp-content/uploads/2023/05/ANALISE-DE-SISTEMAS.jpg",
    },

    {
        titulo: "Computação Gráfica",
        descricao: "Computação gráfica me permitiu explorar novas experiências e habilidades em photoshop e illustrador, o que me permitiu criar varias edições. Tento sempre estar em busca de novos desafios ",
        imagem: "https://img.freepik.com/fotos-premium/beleza-atemporal-da-arte-da-computacao-grafica_893610-6963.jpg",

    },
    ];
  
    const listaProjetos = document.getElementById("lista-projetos");
    const conteudoExibido = document.getElementById("conteudo-exibido");
    const tituloConteudo = document.getElementById("titulo-conteudo");
    const descricaoConteudo = document.getElementById("descricao-conteudo");
    const imagemConteudo = document.getElementById("imagem-conteudo");
    const observacaoConteudo = document.getElementById("observacao-conteudo");
  
    projetos.forEach((projeto) => {
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        button.textContent = projeto.titulo;
        button.addEventListener("click", function () {
            tituloConteudo.textContent = projeto.titulo;
            descricaoConteudo.textContent = projeto.descricao;
            imagemConteudo.setAttribute("src", projeto.imagem);
            observacaoConteudo.textContent = projeto.descricao;
  
            conteudoExibido.style.display = "block"; 
        });
        ul.appendChild(button);
        listaProjetos.appendChild(ul);
    });
    window.onclick = function (event) {
        if (event.target == conteudoExibido) {
            conteudoExibido.style.display = "none";
        }
    };
  });