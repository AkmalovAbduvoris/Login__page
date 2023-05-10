<script setup>
    import './Hero.css'
</script>
<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <router-link to="/login">login</router-link>
                <router-link to="/register">register</router-link>
            </div>
        </div>
    </section>
</template>