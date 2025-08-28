<script lang="ts">
  import { onMount } from "svelte";
  import { navigateTo } from "../stores/navigation";
  import { fade } from "svelte/transition";

  let progress = 0;
  let showLogo = false;
  let showScreen = false;

  onMount(() => {
    // Fade-in de la pantalla
    showScreen = true;

    // Show logo después de 500ms
    setTimeout(() => {
      showLogo = true;
    }, 500);

    // Progress animation
    const interval = setInterval(() => {
      progress += 2.5;
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          navigateTo("age-verification");
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  });
</script>

{#if showScreen}
  <div
    class="fixed inset-0 bg-37l flex items-center justify-center"
    transition:fade={{ duration: 1000 }}
  >
    <div class="text-center">
      <!-- Logo Animation -->
      <div class="mb-8">
        <div
          class="w-64 h-64 mx-auto flex items-center justify-center mb-4 animate-pulse-sSlow"
        >
          <img
            class="w-64 h-64"
            src="/src/assets/gif/baile.gif"
            alt="37Lenguas"
          />
        </div>
        <p class="text-wine font-abcmarfa">SIRVIENDO TU EXPERIENCIA...</p>
      </div>

      <!-- Loading Bar -->
      <div class="w-64 h-2 bg-beige rounded-full overflow-hidden mx-auto">
        <div
          class="h-full bg-reed rounded-full transition-all duration-300 ease-out"
          style="width: {progress}%"
        ></div>
      </div>
    </div>
  </div>
{/if}
