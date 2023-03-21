"use strict";


const listaEmail = document.getElementById('lista-email');
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
          const email = response.data.response;
          const li = document.createElement('li');
          li.textContent = email;
          listaEmail.appendChild(li);
        })
    }