<script lang="ts">
  import Footer from "./Footer.svelte";
  import { navigateTo } from "../stores/navigation";
</script>

<div class="min-h-screen bg-beige flex items-center justify-center p-4">
  <div class="text-center animate-fade-in">
    <!-- 404 Logo -->
    <div class="mb-8">
      <div
        class="w-32 h-32 mx-auto bg-beige rounded-full flex items-center justify-center mb-6 shadow-2xl animate-pulse-slow"
      >
        <span class="text-4xl font-poplar font-bold text-reed">ERROR 404</span>
      </div>
      <h1 class="text-6xl font-serif font-bold text-white mb-4">
        Página No Encontrada
      </h1>
      <p class="text-xl text-wine font-abcmarfa font-bold mb-8 max-w-2xl">
        SORRY, la página no está disponible en este momento. Pronto podrás
        moverte con tu roncito de 37 Lenguas.
      </p>
    </div>

    <!-- Redirect Button -->
    <button on:click={() => navigateTo("home")} class="btn-primary w-full">
      IR AL INICIO
    </button>
  </div>

  <Footer />
</div>
