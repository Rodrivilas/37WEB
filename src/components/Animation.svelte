<script lang="ts">
    import { onMount } from "svelte";

    let scrollY = 0;
    const frameCount = 22;
    let imageSrc = `/src/assets/animation/frame (1).pg`;

    const images: string[] = [];
    const speed = 1.5;

    // precargar imágenes
    for (let i = 1; i <= frameCount; i++) {
        images.push(`/src/assets/animation/frame (${i}).png`);
    }

    onMount(() => {
        const handleScroll = () => {
            scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            let scrollFraction = scrollY / maxScroll;

            scrollFraction *= speed;

            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount),
            );
            imageSrc = images[frameIndex];
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<img src={imageSrc} alt="Animación scroll" class="w-auto max-h-[90vh]" />

<style>
    /* solo para suavizar la transición */
    img {
        transition: opacity 0.1s ease-out;
    }
</style>
