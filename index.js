$(".butao").click(function(event) {
    console.log(document.getElementById('botao').value);
    document.getElementById('texto').innerHTML += "<h1>" + document.getElementById('inputerino').value + "</h1>";
});
