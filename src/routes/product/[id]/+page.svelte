<script lang="ts">
  import { page } from '$app/stores';
  import { products } from '$lib/db.js';
  import { getScoreColor } from '$lib/utils';
  const { title, review } = products[$page.params.id];
</script>

<main class="text-white p-4 flex flex-col gap-2">
  <div class="flex flex-row gap-1 items-baseline justify-between">
    <h1 class="text-2xl">{title}</h1>
    <span class="text-slate-400 text-sm">{new Date().toDateString()}</span>
  </div>
  <img src="https://placehold.co/160x90" alt="game" class="w-full" />
  <div class="flex flex-row gap-2 overflow-x-auto pb-2 h-20">
    {#each { length: 12 } as item}
      <img src="https://placehold.co/160x90" alt="game" />
    {/each}
  </div>
  <div class="flex flex-col gap-2 p-2 text-sm bg-slate-400 h-24 w-full rounded">
    <div class="flex flex-row gap-2">
      <span class="w-full text-center rounded py-2 {getScoreColor(review.recent, 'bg')}"
        >RECENT REVIEWS {review.recent}%</span
      >
      <span class="w-full text-center rounded py-2 {getScoreColor(review.all, 'bg')}"
        >ALL REVIEWS {review.all}%</span
      >
    </div>
  </div>
</main>

<!-- TODO -->
