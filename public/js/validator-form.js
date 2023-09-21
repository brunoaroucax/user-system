"use strict";

function validatorPassword(){
  const password = document.getElementById('passwordInput').value;
  const confirmPassword = document.getElementById('confirmPasswordInput').value;

  if(password !== confirmPassword){
    alert('As senhas não coincidem!');
    return false;
  }

  return true;
}

function validatorLogin(){
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;
  console.log(username, password)
  if(!username || !password){
    alert('Preencha todos os campos')
    return false;
  }

  return true;
}