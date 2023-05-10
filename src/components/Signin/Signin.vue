<script setup>
import './Signin.css'
let email = ''
let pass = ''

async function Fetchall(){
    await fetch('https://reqres.in/api/login', {
        headers : {"Content-Type" : "application/json"},
        method: 'POST',
        body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
    })
    .then(login => login.json())
    .then(data => {
        if(data.token){
            window.localStorage.setItem('token' , data.token)
            // window.location.href = '/'
        }else{
        }
    })
}
Fetchall()

function press(){
    console.log(email);
    console.log(pass);
    
}
</script>

<template>
    <section class="login">
        <!-- <div class="container"> -->
            <div class="login__wrapper">
                <div class="login__l">
                    <img src="/img/login__bg.png" width="756" height="1077" alt="">
                </div>
                <div class="login__r">
                    <div class="login__r__wrapper">
                        <h2 class="login__title">Sign In</h2>
                        <p class="login__text">Enter your email and password to Sign In</p>
                        <input class="login__inp" type="text" placeholder="Name" v-model="email" :on-input="(e) =>(email = e.target.value)">
                        <input class="login__inp" type="password" placeholder="Password" v-model="pass" :on-input="(e)=>(pass = e.target.value)">
                        <button class="login__btn" @click="press">SIGN IN</button>
                        <small class="login__link">Don't have an account?<a href="/register">Sign Up</a></small>
                    </div>
                </div>
            </div>
            <p>{{  }}</p>
            <!-- </div> -->
        </section>
    </template>