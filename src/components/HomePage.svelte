<script lang="ts">
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { navigateTo } from "../stores/navigation";
</script>

<div class="min-h-screen bg-37l">
  <Header />

  <main class="pt-20 min-h-screen flex items-center justify-center p-4">
    <div class="text-center animate-fade-in">
      <!-- Main Logo -->
      <div
        class=" mx-auto flex items-center justify-center mb-4 animate-pulse-sSlow"
      >
        <img
          class="w-full h-full"
          src="/src/assets/svg/title.svg"
          alt="37Lenguas"
        />
      </div>

      <!-- Hero Content -->
      <div class="max-w-2xl mx-auto mb-12">
        <p
          class="text-lg text-wine leading-relaxed mb-8 font-abcmarfa font-bold"
        >
          Descubra la perfección destilada en cada botella de nuestro ron.
          Elaborado con los mejores ingredientes y años de tradición, ofrecemos
          una experiencia única para los paladares más exigentes.
        </p>

        <div
          class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center"
        >
          <button
            on:click={() => navigateTo("promo")}
            class="btn-primary w-full sm:w-auto"
          >
            PROMO
          </button>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>
