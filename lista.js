class ListaConvidados {

    constructor() {
        this.qtd = 0;
        this.id = 1;
        this.isEdicao = false;
        this.idEditar = null;
    }

    adicionar() {
        if (this.isEdicao) {
            document.getElementById(this.idEditar).childNodes[0].innerText = document.getElementById("inputConvidado").value;
            document.getElementById("btnAdicionar").innerText = "Adicionar";
            this.isEdicao = false;
        } else {
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

            let imgEditar = document.createElement("img");
            imgEditar.src = "img/editar.png";
            imgEditar.setAttribute("onclick", "lista.editar('" + div.id + "')");

            //Aninhando as TAGS criadas e configuradas
            div.appendChild(span);
            div.appendChild(imgEditar);
            div.appendChild(img);
            lista.appendChild(div);

            //let qtd = 0;
            this.qtd++;
            this.id++;

            this.atualizarQtd();
        }

        this.limpar();
    } //Fim de adicionar()

    excluir(id) {
        let conv = document.getElementById(id);
        let lis = document.getElementById("lista");
        lis.removeChild(conv);
        this.qtd--;
        this.atualizarQtd();
    }

    editar(id) {
        let nome = document.getElementById(id).childNodes[0].innerText;
        document.getElementById("inputConvidado").value = nome;
        this.isEdicao = true;
        this.idEditar = id;
        document.getElementById("btnAdicionar").innerText = "Editar";
    }

    atualizarQtd() {
        let labelQtd = document.getElementById("labelQtd");
        labelQtd.innerText = "(" + this.qtd + ")";
    }

    limpar() {
        document.getElementById("inputConvidado").value = "";
    }

} //Fim da classe

var lista = new ListaConvidados();