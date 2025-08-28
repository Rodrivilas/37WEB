<script lang="ts">
  export let text: string = "PARTICIPA DE LA PROMO • PARTICIPA DE LA PROMO • ";
  export const speed: number = 50;
</script>

<div class="relative h-0">
  <div class="absolute top-1/2 left-0 w-full z-30 -translate-y-1/2">
    <div
      class="w-full py-4 transform rotate-[-1.5deg] my-8"
      style="background: url('/src/assets/svg/redStripe.svg') repeat-x center; background-position: center;
    background-size: auto 99%;"
    >
      <div class="whitespace-nowrap animate-scroll">
        <span class="text-37l text-4xl tracking-wider font-poplar">
          {text.repeat(20)}
        </span>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
</style>
