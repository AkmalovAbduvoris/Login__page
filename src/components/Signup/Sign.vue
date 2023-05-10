<script setup>
import './Sign.css';

let login = "";
let pass = "";

async function Post() {
    await fetch('https://reqres.in/api/register', {
        headers : {"Content-Type" : "application/json"},
        method: 'POST',
        body: JSON.stringify({
            "email":login,
            "password": pass
        })
    })
    .then(g => g.json())
    .then(data => {
        if (data.token) {           
            window.localStorage.setItem('token',data.token)
            // window.location.href = '/'
        }else{
            
        }
    })
    
}
</script>
<template>
<section class="hero">
    <div class="container">
        <div class="hero__wrapper">
            <a href="https://Abdulvaris5005.t.me" class="hero__title">VORIS</a>
            <input class="hero__inp" placeholder="Email" v-model="login" :on-input="(e) => (login = e.target.value)" type="text"/>
            <input class="hero__inp" placeholder="Password" v-model="pass" :on-input="(e) => (pass = e.target.value)" type="password"/>
            <button class="hero__btn" @click="Post">SIGNUP</button>
            <small class="hero__text"> Don't have an account?  <a class="hero__link" href="/login">Sign In</a></small>
        </div>
    </div>
</section>
</template>