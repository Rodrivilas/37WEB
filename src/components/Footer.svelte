<script lang="ts">
  import { navigateTo } from "../stores/navigation";
</script>

<footer class="bg-wine border-t border-amber-600/30 py-8">
  <div
    class="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-0 text-center md:text-left"
  >
    <!-- Logo Section -->
    <div class="flex items-center space-x-3 justify-center md:justify-start">
      <button on:click={() => navigateTo("home")} class="focus:outline-none">
        <img src="/src/assets/gif/baile.gif" alt="logo" />
      </button>
      <div>
        <h3 class="text-white font-serif font-bold text-lg">AJ</h3>
        <p class="text-amber-200 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem
          hic, non praesentium, quasi modi et, laudantium sed molestiae
          repudiandae in fuga reiciendis quae minus distinctio obcaecati aut
          nihil vel.
        </p>
      </div>
    </div>

    <!-- Center Text -->
    <div class="flex flex-col items-center justify-center text-center px-4">
      <p class="text-amber-200 text-m font-helvetica-100 leading-relaxed">
        EL CONSUMO EXCESIVO DE ALCOHOL ES DAÑINO PARA LA SALUD. VENTA PROHIBIDA
        A MENORES DE 18 AÑOS DE EDAD.
      </p>
      <hr class="border-37l w-full my-2" />
      <p class="text-amber-300 text-xs mt-2 font-helvetica-100">
        © 2025 Tourette Agency 37 Lenguas. Todos los derechos reservados.
      </p>
    </div>

    <!-- Social Networks -->
    <div class="flex flex-col items-center md:items-center space-y-2">
      <p class="text-37l text-3xl md:text-4xl font-poplar">37 LENGUAS</p>

      <!-- Wrapper con flex responsive -->
      <div
        class="flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-end gap-3 sm:gap-4"
      >
        <div class="flex items-center space-x-2">
          <p class="text-37l text-lg sm:text-xl font-poplar">SÍGUENOS:</p>
        </div>

        <!-- Instagram -->
        <div class="flex items-center space-x-2">
          <a
            href="https://www.instagram.com/ron37lenguas/"
            class="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors group"
          >
            <svg
              class="w-5 h-5 text-amber-600 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <p class="text-37l text-sm font-abcmarfa">@ron37lenguas</p>
        </div>

        <!-- Facebook -->
        <div class="flex items-center space-x-2">
          <a
            href="https://www.facebook.com/ron37lenguas/"
            class="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors group"
          >
            <svg
              class="w-5 h-5 text-amber-600 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
              />
            </svg>
          </a>
          <p class="text-37l text-sm font-abcmarfa">Ron 37 Lenguas</p>
        </div>
      </div>
    </div>
  </div>
</footer>
