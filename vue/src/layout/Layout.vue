<script setup type="ts">
import '@shared/scss/App.scss'
</script>
<template>
  <v-app>
    <v-main class="content">
      <router-view />
    </v-main>
    <v-bottom-navigation>
      <v-btn value="recent">
        <v-icon>mdi-home</v-icon>

        <span>Home</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-text</v-icon>

        <span>Lebenslauf</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-tools</v-icon>

        <span>Tech-Stack</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-help</v-icon>

        <span>FAQ</span>
      </v-btn>
      <v-btn value="nearby">
        <v-icon>mdi-email-outline</v-icon>

        <span>Kontakt</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
