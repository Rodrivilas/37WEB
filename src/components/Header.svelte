<script lang="ts">
  import { navigateTo } from "../stores/navigation";
  import { slide } from "svelte/transition";

  let menuOpen = false;
</script>

<!-- HEADER DESKTOP -->
<header class="fixed left-1/2 transform -translate-x-1/2 z-50 hidden sm:block">
  <div
    class="bg-37l rounded-bl-full rounded-br-full px-12 py-3 flex items-center space-x-6"
  >
    <!-- Home Button -->
    <button
      on:click={() => navigateTo("home")}
      class="text-wine hover:text-reed font-abcmarfa text-sm transition-colors px-3 py-1 rounded-full hover:bg-amber-600/20"
    >
      HOME
    </button>

    <!-- Logo -->
    <button on:click={() => navigateTo("home")} class="focus:outline-none mx-2">
      <div class="w-48 h-12 rounded-full flex items-center justify-center">
        <img
          class="w-32 h-32"
          src="/src/assets/svg/logoYango.svg"
          alt="37Lenguas"
        />
      </div>
    </button>

    <!-- Promo Button -->
    <button
      on:click={() => navigateTo("promo")}
      class="text-wine hover:text-reed font-abcmarfa text-sm transition-colors px-3 py-1 rounded-full hover:bg-amber-600/20"
    >
      PROMO
    </button>
  </div>
</header>

<!-- Fono -->
<header class="fixed left-1/2 transform -translate-x-1/2 z-50 w-full sm:hidden">
  <div class="bg-37l px-4 py-3 flex items-center justify-between">
    <!-- Logo -->
    <button on:click={() => navigateTo("home")} class="focus:outline-none">
      <div class="w-28 h-10 flex items-center justify-center">
        <img
          class="w-full h-full object-contain"
          src="/src/assets/svg/logoYango.svg"
          alt="37Lenguas"
        />
      </div>
    </button>

    <!-- borger -->
    <button
      class="text-wine text-2xl focus:outline-none"
      on:click={() => (menuOpen = !menuOpen)}
    >
      {#if menuOpen}
        ✕
      {:else}
        ☰
      {/if}
    </button>
  </div>

  {#if menuOpen}
    <div
      transition:slide={{ duration: 300 }}
      class="bg-37l rounded-b-2xl flex flex-col items-center py-4 space-y-3 shadow-lg"
    >
      <button
        on:click={() => {
          navigateTo("home");
          menuOpen = false;
        }}
        class="text-wine hover:text-reed font-abcmarfa text-sm transition-colors px-3 py-1 rounded-full hover:bg-amber-600/20"
      >
        HOME
      </button>
      <button
        on:click={() => {
          navigateTo("promo");
          menuOpen = false;
        }}
        class="text-wine hover:text-reed font-abcmarfa text-sm transition-colors px-3 py-1 rounded-full hover:bg-amber-600/20"
      >
        PROMO
      </button>
    </div>
  {/if}
</header>
