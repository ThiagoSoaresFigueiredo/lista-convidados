class ListaConvidados {

    constructor() {
        this.qtd = 0;
        this.id = 1;        
    }

    adicionar() {
        let nome = document.getElementById("inputConvidado").value;
        let lista = document.getElementById("lista");

        //lista.innerText += "\n" + nome;

        //Criando e configurando TAGS
        let div = document.createElement("div"); //cria a div
        div.classList.add("item-lista"); // adiciona css a div
        div.id = this.id; // atribui um id a div

        let span = document.createElement("span"); // cria um span
        span.innerText = nome; // atribui um valor ao span

        let img = document.createElement("img"); // cria um img
        img.src = "img/delete.svg"; // atribui uma imagem ao img
        img.setAttribute("onclick", "lista.excluir('" + div.id + "')"); // adiciona um evento de click na img

        //Aninhando as TAGS criadas e configuradas
        div.appendChild(span);
        div.appendChild(img);
        lista.appendChild(div);

        //let qtd = 0;
        this.qtd++;
        this.id++;

        let labelQtd = document.getElementById("labelQtd");
        labelQtd.innerText = "(" + this.qtd + ")";
    } //Fim de adicionar()

    excluir(id) {
        let conv = document.getElementById(id);
        let lis = document.getElementById("lista");
        lis.removeChild(conv);
    }

} //Fim da classe

var lista = new ListaConvidados();