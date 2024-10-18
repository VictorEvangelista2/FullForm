const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome');
  if (nome.value.trim() === '') {
    alert('Insira um nome!');
  } else {
    
  }
});




const Form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === '' || !emailRegex.test(email)) {
    alert('Insira um email válido!');
  } else {
    
  }
});

function validarSenha() {
    const senha = document.getElementById("senha").value;
    const regex = /^.{4,16}$/;
  
    if (!regex.test(senha)) {
      alert("A senha deve conter de 4 a 8 caracteres.");
    }
}



$(document).ready(function() {
    $('#dataNascimento').datepicker({
    format: 'dd/mm/yyyy',
    language: 'pt-BR',
    todayHighlight: true,
    autoclose: true
});
});


// VALIDAÇÃO DE CPF DIRETO NO JAVASCRIPT
 
// Adicionando escutador ao formulário
document.getElementById('cpfForm').addEventListener('submit', function(event){
    event.preventDefault();
 
    const cpf = document.getElementById('cpf').value;
    const msg = document.getElementById('message');
 
    if(validarCPF(cpf)){
        msg.textContent = 'O CPF é válido!';
        msg.style.color = 'green';
    }else{
        msg.textContent = 'Insira um CPF válido';
        msg.style.color = 'red';
    }
});

 
function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
 
    // Estrutura de decisão para verificar quantidade de dígitos e se todos os digitos são iguais
    if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
        return false;
    }
   
    let soma = 0;
    let resto;
 
    // Validando o primeiro digito verificador
    for(let i=1;i <= 9;i++){
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
 
    resto = (soma * 10) % 11;
 
    if((resto === 10) || (resto === 11)){
        resto = 0;
    }
    if(resto !== parseInt(cpf.substring(9, 10))){
        return false;
    }
 
    soma = 0;
    // Validando o segundo digito verificador
    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
 
    resto = (soma * 10) % 11;
 
    if((resto === 10) || (resto === 11)){
        resto = 0;
    }
   
    if(resto !== parseInt(cpf.substring(10, 11))){
        return false;
    }
 
    return true;
}


'use strict'; // Ativa o modo restrito
 
// codigo para consumo da via cep
//https://viacep.com.br/
 
// Limpar consulta do form ja realizada
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
 
}

// verifica se o cep é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero); // Expressão regular
 
//verifica o tamanho do cep
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
//Função para preencher campos relacionados ao cep
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro; // Coloca o valor de logradouro da API dentro do campo do formulario
    document.getElementById('bairro').value = endereco.bairro;  // *;
    document.getElementById('cidade').value = endereco.localidade; // *;
    document.getElementById('uf').value = endereco.uf; // *.
}

// Função para consumo de API ViaCep
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
 
        console.log(addres);
 
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado')
        }else{
            preencherFormulario(addres)
        }
    }else{
        alert('Insira um CEP válido!');
    }
}
 
// Executa a ação de preenchimento do formulario ao deixar o campo do cep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

