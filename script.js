function mudarImagem() {
    var text = window.document.getElementById('texto');
    text.style.fontSize = '30px';
    text.innerText = "ESCURIDÃO";
    text.style.transition = "all 1.7s";
    var imagem = window.document.getElementById('imagem');
    imagem.src = "img/nocturn.jpg";
    var cor = window.document.getElementById('container').style.backgroundColor = 'rgb(70, 70, 70)';

}