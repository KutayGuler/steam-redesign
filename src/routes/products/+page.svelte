<script lang="ts">
  import Product from '$lib/components/Product.svelte';
  import { categoryType, products } from '$lib/db';
</script>

<main class="flex flex-col gap-2 text-white">
  <h1 class="text-2xl font-bold pl-2 pt-4">{$categoryType}</h1>
  {#each Object.values(products) as product}
    <Product {product} />
  {/each}
</main>
