<script setup lang="ts">
import foto from "@shared/assets/foto.jpg";
</script>

<template>
    <router-link :to="{path: '/lebenslauf'}">
        <img
            :src="foto"
            class="welcome"
            alt="Hi, Ich bin Micha!"
            />
    </router-link>
</template>

