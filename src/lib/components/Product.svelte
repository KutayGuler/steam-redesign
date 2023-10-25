<script lang="ts">
  import type { Product } from '$lib/db';
  import { getScoreColor } from '$lib/utils';
  export let product: Product;
</script>

<a
  href="/product/{product.id}"
  class="flex flex-row items-center gap-2 hover:bg-slate-600 p-2"
>
  <img src="https://placehold.co/160x90" alt="" />
  <div class="flex flex-col gap-1">
    <h3 class="text-white">{product.title}</h3>
    <div class="flex flex-row gap-1 text-gray-300">
      {#each product.categories as category}
        <span class="text-xs">{category}</span>
      {/each}
    </div>
    <div class="flex flex-row gap-1 text-xs">
      <span class="text-sky-500 font-bold">{product.price}</span>
      <span class={getScoreColor(product.review.all, 'text')}
        >{product.review.all}%</span
      >
    </div>
  </div>
</a>
