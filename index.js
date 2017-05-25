$(".butao").click(function(event) {
    console.log(document.getElementById('botao').value);
    document.getElementById('texto').innerText +=  document.getElementById('inputerino').value;
    document.getElementById('texto').innerHTML +=  "</br>";
});
