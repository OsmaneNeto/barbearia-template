window.addEventListener('load', () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const form = document.querySelector('form');  

    form.addEventListener('submit', (event) => {
        event.preventDefault();  
        console.log("Nome:", nome.value);
        console.log("Email:", email.value);
        console.log("Mensagem:", mensagem.value);


        alert("Infelizmente o formulário só vem até aqui, mas quem sabe no futuro?\nMas está aqui o que você digitou:\n"+"Nome: " + nome.value + "\nEmail: " + email.value + "\nMensagem: " + mensagem.value);
        
         nome.value='';
         email.value='';
         mensagem.value='';
        
    });
});
