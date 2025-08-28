<script lang="ts">
  import { currentPage, isAgeVerified } from "./stores/navigation";
  import LoadingScreen from "./components/LoadingScreen.svelte";
  import AgeVerification from "./components/AgeVerification.svelte";
  import HomePage from "./components/HomePage.svelte";
  import PromoPage from "./components/PromoPage.svelte";
  import NotFoundPage from "./components/NotFoundPage.svelte";
</script>

<main class="overflow-x-hidden">
  {#if $currentPage === "loading"}
    <LoadingScreen />
  {:else if $currentPage === "age-verification"}
    <AgeVerification />
  {:else if $currentPage === "home"}
    <HomePage />
  {:else if $currentPage === "promo"}
    <PromoPage />
  {:else if $currentPage === "404"}
    <NotFoundPage />
  {/if}
</main>
