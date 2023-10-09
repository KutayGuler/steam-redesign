<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";

  // your script goes here

  import Searchbox from "$lib/components/Searchbox.svelte";
</script>

<main class="flex flex-col gap-4 bg-slate-800 w-full h-full pt-16">
  <Hero />
  <section class="p-4">
    <Searchbox />
  </section>
</main>
