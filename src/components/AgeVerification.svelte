<script lang="ts">
  import { navigateTo, isAgeVerified } from "../stores/navigation";

  let birthDate = "";
  let error = "";

  function handleSubmit() {
    if (!birthDate) {
      error = "Por favor ingrese su fecha de nacimiento";
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      error = "Debe ser mayor de 18 años para acceder a este sitio";
      return;
    }
    if (age > 100) {
      error = "Debe dar una fecha valida para acceder";
      return;
    }

    error = "";
    isAgeVerified.set(true);
    navigateTo("home");
  }
</script>

<div class="min-h-screen bg-37l flex flex-col items-center justify-center p-4">
  <div class="text-center mb-8">
    <div class=" flex items-center justify-center animate-pulse-sSlow">
      <img
        class="w-32 h-full overflow-hidden"
        src="/src/assets/gif/manoVaso.gif"
        alt="37Lenguas"
      />
    </div>
    <div
      class=" mx-auto flex items-center justify-center mb-4 animate-pulse-slow"
    >
      <img
        class="w-full md:w-2xl h-full md:h-2xl"
        src="/src/assets/svg/title.svg"
        alt="37Lenguas"
      />
    </div>
    <h2 class="text-4xl font-poplar font-bold text-wine mb-2">
      ¿ERES MAYOR DE 18 AÑOS?
    </h2>
  </div>

  <form
    on:submit|preventDefault={handleSubmit}
    class="space-y-6 flex flex-col items-center justify-center"
  >
    <div>
      <input
        type="date"
        id="birthdate"
        bind:value={birthDate}
        class="w-full py-3 bg-wine border px-14 border-amber-600/50 rounded-full text-37l font-abcmarfa placeholder-reed focus:outline-none focus:ring-2 focus:ring-wine focus:border-transparent"
        required
      />
    </div>

    {#if error}
      <div
        class="bg-red-900/50 border border-red-600 text-red-200 px-4 py-3 rounded-lg"
      >
        {error}
      </div>
    {/if}

    <button type="submit" class=" btn-primary py-2"> ENTRAR </button>
  </form>
</div>
