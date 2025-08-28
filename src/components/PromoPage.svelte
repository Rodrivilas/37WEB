<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import InfiniteScroll from "./InfiniteScroll.svelte";
  import Animation from "./Animation.svelte";

  let scrollY = 0;
  let innerHeight = 0;

  // Form data
  let formData = {
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    genero: [] as string[],
    email: "",
    ciudad: "",
    ci: "",
    codigo: "",
  };

  function handleGenderChange(event: Event, gender: string) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      formData.genero = [...formData.genero, gender];
    } else {
      formData.genero = formData.genero.filter((g) => g !== gender);
    }
  }

  function handleSubmit() {
    console.log("Form submitted:", formData);
    alert(
      "Formulario enviado con éxito. ¡Gracias por participar en nuestras promociones!",
    );
  }

  onMount(() => {
    const handleScroll = () => (scrollY = window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="bg-black overflow-x-hiddenz">
  <Header />

  <!-- Section 1 -->
  <section
    class="relative h-screen flex items-center justify-center bg-37l text-center p-4"
  >
    <div class="animate-fade-in">
      <div
        class="mx-auto flex items-center justify-center mb-4 animate-pulse-sSlow"
      >
        <img
          class="w-1/2 h-dvw"
          src="/src/assets/svg/promoTitle.svg"
          alt="37Lenguas"
        />
      </div>
    </div>
  </section>

  <!-- Franja Amarilla -->
  <div class="relative h-0">
    <div class="absolute top-1/2 left-0 w-full z-30 -translate-y-1/2">
      <div
        class="w-full py-4 transform rotate-[-1.5deg] my-8"
        style="background: url('/src/assets/svg/yellowStripe.svg') repeat-x center; background-position: center;
    background-size: auto 99%;"
      >
        <div class="p-5"></div>
      </div>
    </div>
  </div>

  <!-- Section 2 -->
  <section class="relative h-screen overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/src/assets/jpg/2.jpg')]"
      style="
      transform: translateY({(scrollY - innerHeight) * 0.3}px);
    "
    ></div>
  </section>

  <InfiniteScroll text="PARTICIPA DE LA PROMO • PARTICIPA DE LA PROMO •" />

  <!-- Section 3: Promociones -->
  <section class="relative md:h-screen bg-beige overflow-hidden">
    <!-- Fila de 3 columnas -->
    <div class="relative h-screenflex items-center justify-end p-8 md:p-16">
      <!-- Primera fila-->
      <div class="w-full grid grid-cols-1 md:grid-cols-3">
        <!--Columna 1: Texto alineado a la derecha-->
        <div
          class="p-6 flex flex-col md:items-end items-center justify-center h-full"
        >
          <p
            class="text-4xl md:text-6xl text-reed font-poplar md:text-end mb-2"
          >
            COMPRA TU <br /> PACK CON 3 <br /> VASOS GRATIS
          </p>

          <span
            class="text-xl md:text-3xl text-wine font-abcmarfa md:text-end mb-4 font-bold"
          >
            PARA CONSUMO <br />EN BOLICHES <br />AUTORIZADOS
          </span>
          <img src="/src/assets/svg/vasos.svg" alt="Vasos" class="w-52 mt-4" />
        </div>
        <!--Columna 2-->
        <div class="flex items-center justify-center">
          <Animation />
        </div>

        <!-- Columna 3: 3 filas, cada una con 2 columnas (imagen pequeña + texto) -->
        <div
          class="flex flex-col gap-6 justify-start md:justify-center w-full md:w-1/3 mx-auto md:mx-0 items-center md:items-start"
        >
          <!-- Fila 1: LA PAZ -->
          <div class="flex items-start gap-3">
            <img
              src="/src/assets/svg/location.svg"
              alt="Icono"
              class="w-5 h-5 mt-1"
            />
            <div>
              <p class="text-lg md:text-xl text-wine font-abcmarfa font-bold">
                LA PAZ
              </p>
              <p class="text-sm md:text-lg text-wine font-abcmarfa">
                BOLICHE #1 <br /> BOLICHE #2 <br /> BOLICHE #3
              </p>
            </div>
          </div>

          <!-- Fila 2: COCHABAMBA -->
          <div class="flex items-start gap-3">
            <img
              src="/src/assets/svg/location.svg"
              alt="Icono"
              class="w-5 h-5 mt-1"
            />
            <div>
              <p class="text-lg md:text-xl text-wine font-abcmarfa font-bold">
                COCHABAMBA
              </p>
              <p class="text-sm md:text-lg text-wine font-abcmarfa">
                BOLICHE #1 <br /> BOLICHE #2 <br /> BOLICHE #3
              </p>
            </div>
          </div>

          <!-- Fila 3: SANTA CRUZ -->
          <div class="flex items-start gap-3">
            <img
              src="/src/assets/svg/location.svg"
              alt="Icono"
              class="w-5 h-5 mt-1"
            />
            <div>
              <p class="text-lg md:text-xl text-wine font-abcmarfa font-bold">
                SANTA CRUZ
              </p>
              <p class="text-sm md:text-lg text-wine font-abcmarfa">
                BOLICHE #1 <br /> BOLICHE #2 <br /> BOLICHE #3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Separador rojo-->

  <div class="relative h-0">
    <div class="absolute top-1/2 left-0 w-full z-30 -translate-y-1/2">
      <div
        class="w-full py-4 transform rotate-[-1.5deg] my-8"
        style="background: url('/src/assets/svg/redStripe.svg') repeat-x center; background-position: center;
    background-size: auto 99%;"
      >
        <div class="p-5"></div>
      </div>
    </div>
  </div>

  <!-- Seccion 4 -->

  <section class="bg-reed p-4 md:p-8 h-screen">
    <div class="relative h-full flex items-center justify-end p-4 md:p-16">
      <div
        class="w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full"
      >
        <!-- Fila 1, Columna 1: Imagen -->
        <div class=" flex items-center justify-center">
          <img
            src="/src/assets/png/card1.png"
            alt="Imagen Fila 1"
            class="w-11/12 md:w-full h-auto max-h-[45vh] md:max-h-[60vh] object-contain"
          />
        </div>

        <!-- Fila 1, Columna 2: Espacio vacío, oculto en móviles -->
        <div class="hidden md:block p-6"></div>

        <!-- Fila 2, Columna 1: Texto alineado a la derecha -->
        <div
          class="flex flex-col md:items-end items-center justify-center h-full md:text-end text-center"
        >
          <p class="text-6xl font-poplar mb-2 text-37l">
            RASPA EL<br />CÓDIGO DE LA<br />TARJETA
          </p>

          <span class="text-4xl text-wine font-abcmarfa">Y REGÍSTRATE</span>
        </div>

        <!-- Fila 2, Columna 2: Imagen -->
        <div class=" flex items-center justify-center">
          <img
            src="/src/assets/png/card2.png"
            alt="Imagen Fila 2"
            class="w-11/12 md:w-full h-auto max-h-[40vh] md:max-h-[60vh] object-contain"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Sorteo37-->
  <div class="relative h-0">
    <div class="absolute top-1/2 left-0 w-full z-30 -translate-y-1/2">
      <div
        class="w-full py-4 transform rotate-[-1.5deg] my-8"
        style="background: url('/src/assets/svg/yellowStripe.svg') repeat-x center; background-size: auto 101%;"
      >
        <div class=" text-center space-y-6">
          <!-- Evitar saltos y escalar con clamp -->
          <span
            class="text-wine font-poplar tracking-wider whitespace-nowrap"
            style="font-size: clamp(1.5rem, 5vw, 4rem);"
          >
            SORTEAMOS
          </span>
          <span
            class="text-reed font-poplar tracking-wider whitespace-nowrap"
            style="font-size: clamp(1.5rem, 5vw, 4rem);"
          >
            37 PREMIOS
          </span>
          <span
            class="text-wine font-poplar tracking-wider whitespace-nowrap"
            style="font-size: clamp(1.5rem, 5vw, 4rem);"
          >
            DE:
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 5: Auto -->
  <section class="relative md:h-screen h-[80vh] overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/src/assets/jpg/4.jpg')]"
      style="transform: translateY({(scrollY - innerHeight * 2) * 0.04}px);"
    ></div>
    <div class="absolute inset-0"></div>
    <div class="relative z-10 h-full w-full">
      <!-- Imagen superior izquierda (desktop), centrada arriba (mobile) -->
      <div
        class="absolute p-10 mt-20 top-0 left-0 w-full flex justify-center md:justify-start pt-8"
      >
        <img
          src="/src/assets/svg/1000viajes.svg"
          alt="Imagen Start"
          class="max-w-sm md:max-w-xl w-full mt-9 md:ml-8"
          style="object-fit: contain;"
        />
      </div>

      <!-- Imagen inferior derecha (desktop), centrada abajo (mobile) -->
      <div
        class="absolute p-10 mb-20 bottom-0 right-0 w-full flex justify-center md:justify-end pb-8"
      >
        <img
          src="/src/assets/svg/12botellas.svg"
          alt="Imagen End"
          class="max-w-sm md:max-w-xl w-full md:mr-8"
          style="object-fit: contain;"
        />
      </div>
    </div>
  </section>

  <InfiniteScroll
    text="PARTICIPA DE LA PROMO • PARTICIPA DE LA PROMO • PARTICIPA DE LA PROMO • "
  />
  <!-- Section 6: Formulario -->
  <section
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-black"
  >
    <!-- Imagen de fondo -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/src/assets/jpg/6.jpg')]"
      style="transform: translateY({(scrollY - innerHeight) * 0}px);"
    ></div>
    <div class="absolute inset-0"></div>

    <!-- Contenedor del formulario -->
    <div class="relative z-10 flex justify-end items-start h-full">
      <div class="w-full md:w-1/2 lg:w-1/3 p-4 md:p-8">
        <div
          class="rounded-2xl p-8 animate-slide-up"
          style="background: url('/src/assets/png/form.png') center/cover no-repeat;"
        >
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div>
              <h2 class="text-4xl md:text-6xl font-poplar text-reed mb-6">
                REGISTRO
              </h2>
              <label for="nombre" class="block text-lg font-abcmarfa text-wine">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                bind:value={formData.nombre}
                class="w-full px-0 py-2 bg-transparent font-helvetica-300 text-black border-b-2 placeholder-amber-300 focus:bg-wine/10 focus:outline-none transition-colors ho"
                style="border-bottom: 5px solid transparent; border-image: url('/src/assets/png/line.png') 5 stretch;"
                required
              />
            </div>

            <div>
              <label
                for="apellidos"
                class="block text-lg font-abcmarfa text-wine"
              >
                Apellidos *
              </label>
              <input
                type="text"
                id="apellidos"
                bind:value={formData.apellidos}
                class="w-full px-0 py-2 bg-transparent font-helvetica-300 text-black border-b-2 placeholder-amber-300 focus:bg-wine/10 focus:outline-none transition-colors ho"
                style="border-bottom: 5px solid transparent; border-image: url('/src/assets/png/line.png') 5 stretch;"
                required
              />
            </div>

            <div>
              <label
                for="fechaNacimiento"
                class="block text-lg font-abcmarfa text-wine"
              >
                Fecha de Nacimiento *
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                bind:value={formData.fechaNacimiento}
                class="w-full px-0 py-2 bg-transparent font-abcmarfa text-black border-b-2 placeholder-amber-300 focus:bg-wine/10 focus:outline-none transition-colors ho"
                style="border-bottom: 5px solid transparent; border-image: url('/src/assets/png/line.png') 5 stretch;"
                required
              />
            </div>

            <div>
              <label for="genero" class="block text-lg font-abcmarfa text-wine">
                Género *
              </label>
              <div id="genero" class="space-y-2">
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="genero"
                    value="Mujer"
                    bind:group={formData.genero}
                    class="mr-2 text-amber-600 bg-black/50 border-amber-600/50 rounded-full focus:ring-amber-600"
                  />
                  <span class="block text-lg font-abcmarfa text-wine"
                    >MUJER</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="genero"
                    value="Hombre"
                    bind:group={formData.genero}
                    class="mr-2 text-amber-600 bg-black/50 border-amber-600/50 rounded-full focus:ring-amber-600"
                  />
                  <span class="block text-lg font-abcmarfa text-wine"
                    >HOMBRE</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="genero"
                    value="Otro"
                    bind:group={formData.genero}
                    class="mr-2 text-amber-600 bg-black/50 border-amber-600/50 rounded-full focus:ring-amber-600"
                  />
                  <span class="block text-lg font-abcmarfa text-wine">OTRO</span
                  >
                </label>
              </div>
            </div>

            <div>
              <label for="email" class="block text-lg font-abcmarfa text-wine">
                Email *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                class="w-full px-0 py-2 bg-transparent font-helvetica-300 text-black border-b-2 placeholder-amber-300 focus:bg-wine/10 focus:outline-none transition-colors ho"
                style="border-bottom: 5px solid transparent; border-image: url('/src/assets/png/line.png') 5 stretch;"
                required
              />
            </div>

            <div>
              <label for="ciudad" class="block text-lg font-abcmarfa text-wine">
                Ciudad *
              </label>
              <input
                type="text"
                id="ciudad"
                bind:value={formData.ciudad}
                class="w-full px-0 py-2 bg-transparent font-helvetica-300 text-black border-b-2 placeholder-amber-300 focus:bg-wine/10 focus:outline-none transition-colors ho"
                style="border-bottom: 5px solid transparent; border-image: url('/src/assets/png/line.png') 5 stretch;"
                required
              />
            </div>

            <div>
              <label for="ci" class="block text-lg font-abcmarfa text-wine">
                CI *
              </label>
              <input
                type="text"
                id="ci"
                bind:value={formData.ci}
                class="w-full px-0 py-2 bg-transparent font-helvetica-300 text-black border-b-2 placeholder-amber-300 focus:bg-wine/10 focus:outline-none transition-colors ho"
                style="border-bottom: 5px solid transparent; border-image: url('/src/assets/png/line.png') 5 stretch;"
                required
              />
            </div>

            <div>
              <label for="codigo" class="block text-3xl font-poplar text-reed">
                CÓDIGO *
              </label>
              <input
                type="text"
                id="codigo"
                bind:value={formData.codigo}
                class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                required
              />
            </div>

            <!-- Link a acuerdos y políticas -->
            <div class="mt-2">
              <a
                href="/acuerdos-y-politicas"
                class="text-sm font-bold text-wine underline hover:text-reed font-abcmarfa transition-colors"
                target="_blank"
              >
                Leer acuerdos y políticas
              </a>
            </div>

            <div class="text-center pt-4">
              <button type="submit" class="btn-primary w-full">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>
