document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.alert('Mensagem enviada com sucesso!!');
    this.reset();
});