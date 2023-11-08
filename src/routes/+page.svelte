<script lang="ts">
  import { goto } from '$app/navigation';
  import Hero from '$lib/components/Hero.svelte';
  import Product from '$lib/components/Product.svelte';
  import Searchbox from '$lib/components/Searchbox.svelte';
  import { categoryType, products } from '$lib/db';
  import { getScoreColor } from '$lib/utils';
  const categories = ['New', 'Trending', 'Top', 'Upcoming'];
  let category = categories[0];
</script>

<main class="flex flex-col bg-black w-full h-full">
  <h1 class="text-white text-4xl font-bold pl-4 p-4">Highlights</h1>
  <Hero />
  <section class="px-5">
    <Searchbox />
    <div class="flex flex-row gap-2 pb-2 pt-4">
      {#each categories as c}
        <button
          on:click={() => (category = c)}
          class="{category == c
            ? 'bg-white text-black'
            : 'bg-black text-white hover:bg-gray-900'} rounded-full px-4 py-2 text-xs font-bold border border-white/30"
          >{c.toUpperCase()}</button
        >
      {/each}
    </div>
    <h3 class="text-white pl-2 pt-4 font-bold text-2xl">{category} Games</h3>
    <div class="flex flex-col">
      {#each Object.values(products) as product}
        <Product {product} />
      {/each}
    </div>
  </section>
</main>
